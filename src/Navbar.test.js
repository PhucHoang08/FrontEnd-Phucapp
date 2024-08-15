import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar';

test('renders learn react link', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
