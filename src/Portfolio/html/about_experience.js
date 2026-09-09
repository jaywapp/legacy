function createTextElement(tag, id, value) {
    var ele = document.createElement(tag);
    ele.setAttribute('id', id);
    ele.append(document.createTextNode(value));

    return ele;
}


function craeteTypeElement(id, item) {

    var div = document.createElement('div');
    div.setAttribute('id', id);

    div.append(createTextElement('div', 'title', item.title));
    div.append(createTextElement('div', 'date', item.date));
    div.append(createTextElement('div', 'comment', item.comment));

    return div;
}

const path = '../data/experience_k.json';

let http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        write(this.responseText); //this = http
    } else if (http.readyState == 4) {
        console.warn('Portfolio data request failed', path, http.status);
    }
}

http.open("GET", path, true);
http.onerror = function () {
    console.warn('Portfolio data network error', path);
};
http.send();


function write(jsonText) {

    let json;
    try {
        json = JSON.parse(jsonText);
    } catch (error) {
        console.warn('Invalid portfolio JSON', path);
        return;
    }
    if (!Array.isArray(json)) {
        console.warn('Portfolio data must be an array', path);
        return;
    }
    var grid = document.getElementById('grid');
    if (!grid) {
        console.warn('Portfolio grid is unavailable', path);
        return;
    }

    var compary = document.createElement('div');
    compary.setAttribute('id', 'sub_grid');
    compary.setAttribute('class', 'company');

    compary.append(createTextElement('div', 'title', '경력'));

    json.forEach(element => {
        if (element === null || typeof element !== 'object') {
            console.warn('Invalid portfolio row', path);
            return;
        }
        compary.append(craeteTypeElement('timeline_item', element));
    });

    grid.append(compary);
}
