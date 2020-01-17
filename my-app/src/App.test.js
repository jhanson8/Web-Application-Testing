import React from 'react';
import { render } from '@testing-library/react';
import App, {addStrike, addBall} from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('addStrike adds 1 strike to current strike count', () => {
  let actual;
  let expected;
  actual = addStrike(1);
  expected = 2;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(3);

  // litte cleaner tests
  expect(addStrike(1)).toBe(2);
  expect(addStrike(1)).not.toBe(3);
});
