import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the joke button', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText(/Tell me a Joke/i);
  expect(btnElement).toBeInTheDocument();
});
