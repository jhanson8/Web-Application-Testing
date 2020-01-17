import React, {useState} from 'react';
import { render } from '@testing-library/react';
import  App from './App.js';
import Display from './components/Display';
import Dashboard from './components/Dashboard';




// test('addStrike adds 1 strike to current strike count', () => {
//   let actual;
//   let expected;
//   actual = addStrike(1);
//   expected = 2;
//   expect(actual).toBe(expected);
//   expect(actual).not.toBe(3);
//
//   // litte cleaner tests
//   expect(addStrike(1)).toBe(2);
//   expect(addStrike(1)).not.toBe(3);
// });

test('App renders to screen properly', () => {
  render(<App />);
});

test('Dashboard component renders', () => {
  render(<Dashboard />);
});

test('Strike Button exists', () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId(/strike/i);
});

test('Ball Button exists', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/ball/i);
});
