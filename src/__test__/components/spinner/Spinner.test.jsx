import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Spinner from '../../../components/spinner/Spinner';

describe('Spinner', () => {
  test('renders spinner', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
  });
});