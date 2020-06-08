import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const welcomeText = getByText('Welcome to our storybuilder!');
  expect(welcomeText).toBeInTheDocument();
});
