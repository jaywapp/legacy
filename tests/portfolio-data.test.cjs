const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

function element(tag) {
  return { tag, attributes: {}, children: [], setAttribute(key, value) { this.attributes[key] = value; }, append(child) { this.children.push(child); } };
}
function load(file, missingGrid = false) {
  const grid = element('div');
  const warnings = [];
  let request;
  class Request {
    constructor() { request = this; }
    open(method, url) { this.method = method; this.url = url; }
    send() {}
  }
  const context = vm.createContext({
    XMLHttpRequest: Request,
    document: { createElement: element, createTextNode: value => String(value), getElementById: () => missingGrid ? null : grid },
    console: { warn: (...args) => warnings.push(args) },
  });
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
  return { context, grid, warnings, request };
}
for (const directory of ['src/web.site', 'src/Portfolio/html']) {
  for (const name of ['about_edu.js', 'about_experience.js', 'about_intro.js']) {
    const file = directory + '/' + name;
    test(file + ' preserves normal row order and text', () => {
      const { context, grid, warnings } = load(file);
      context.write(JSON.stringify([{ title: 'First', date: '2020', comment: '<b>text</b>', content: 'Body' }, { title: 'Second' }]));
      assert.equal(grid.children.length, 1);
      const section = grid.children[0];
      assert.equal(section.children.length, 3);
      assert.equal(section.children[1].children[0].children[0], 'First');
      assert.equal(section.children[2].children[0].children[0], 'Second');
      assert.equal(warnings.length, 0);
    });
    test(file + ' handles empty and malformed input without losing valid rows', () => {
      for (const raw of ['', '{', 'null', '{}']) {
        const { context, grid, warnings } = load(file);
        assert.doesNotThrow(() => context.write(raw));
        assert.equal(grid.children.length, 0);
        assert.equal(warnings.length, 1);
      }
      const empty = load(file); empty.context.write('[]');
      assert.equal(empty.grid.children[0].children.length, 1);
      const mixed = load(file); mixed.context.write('[null, 1, {"title":"Valid"}]');
      assert.equal(mixed.grid.children[0].children.length, 2);
      assert.equal(mixed.warnings.length, 2);
    });
    test(file + ' handles missing DOM, HTTP permission errors and network failures', () => {
      const missing = load(file, true);
      assert.doesNotThrow(() => missing.context.write('[]'));
      assert.equal(missing.warnings.length, 1);
      const { request, grid, warnings } = load(file);
      request.readyState = 4; request.status = 403;
      assert.doesNotThrow(() => request.onreadystatechange());
      assert.doesNotThrow(() => request.onerror());
      assert.equal(warnings.length, 2);
      assert.equal(grid.children.length, 0);
      request.status = 200; request.responseText = '[]'; request.onreadystatechange();
      assert.equal(grid.children.length, 1);
    });
  }
}
