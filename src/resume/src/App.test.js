import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Common } from './data/Common';
import { Exps } from './data/Exps';

test('renders the Korean resume and switches languages in both directions', () => {
  render(<App />);
  expect(screen.getByText('박준영')).toBeInTheDocument();
  fireEvent.click(screen.getByText('English'));
  expect(screen.getByText('Junyoung Park')).toBeInTheDocument();
  expect(screen.queryByText('박준영')).not.toBeInTheDocument();
  fireEvent.click(screen.getByText('Korean'));
  expect(screen.getByText('박준영')).toBeInTheDocument();
});

test.each([undefined, null, '', 'unsupported'])('falls back to Korean for language %p', language => {
  expect(Common(language)).toEqual(Common('Korean'));
  expect(Exps(language)).toEqual(Exps('Korean'));
});

test('both languages retain complete experience collections', () => {
  for (const language of ['Korean', 'English']) {
    const experiences = Exps(language);
    expect(experiences.length).toBeGreaterThan(0);
    for (const experience of experiences) {
      expect(Array.isArray(experience.roles)).toBe(true);
      expect(Array.isArray(experience.works)).toBe(true);
      for (const project of experience.projects) {
        expect(Array.isArray(project.actions)).toBe(true);
        expect(Array.isArray(project.results)).toBe(true);
        expect(Array.isArray(project.skills)).toBe(true);
      }
    }
  }
});
