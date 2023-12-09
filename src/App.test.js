import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react select', async () => {
  render(<App />);
  const selectElement = screen.getByTitle('test-select')
  expect(selectElement).toBeInTheDocument();
});
