import { act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('puts research and teaching on the homepage without a navbar or in-progress work', () => {
  render(<App />);
  expect(screen.getAllByRole('heading', { level: 2 }).map(heading => heading.textContent))
    .toEqual(['Research', 'Teaching']);
  expect(screen.getAllByRole('article')).toHaveLength(5);
  expect(screen.getAllByRole('listitem')).toHaveLength(5);
  expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  expect(screen.queryByText(/Property Rights and Deforestation/)).not.toBeInTheDocument();
});

test('opens and closes abstracts with the keyboard while keeping paper links separate', () => {
  render(<App />);
  const toggle = screen.getAllByRole('button', { name: /^Abstract:/ })[0];
  const abstract = document.getElementById(toggle.getAttribute('aria-controls'));
  toggle.focus();
  expect(abstract).not.toBeVisible();
  act(() => { userEvent.keyboard('{Enter}'); });
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(abstract).toBeVisible();
  act(() => { userEvent.keyboard(' '); });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(abstract).not.toBeVisible();
  userEvent.tab();
  expect(screen.getAllByRole('link', { name: /^paper:/ })[0]).toHaveFocus();
});
