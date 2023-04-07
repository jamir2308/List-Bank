import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import BankCard from '../../../components/bankCard/BankCard';

describe('BankCard', () => {
  const props = {
    bankName: 'Bank Name',
    description: 'Description',
    age: 5,
    url: 'http://example.com/image.jpg',
  };

  test('renders bank card', () => {
    render(<BankCard {...props} />);
    const bankName = screen.getByText(props.bankName);
    const description = screen.getByText(props.description);
    const age = screen.getByText(`${props.age} años`);
    const image = screen.getByAltText(props.bankName);

    expect(bankName).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test('renders correct image', () => {
    render(<BankCard {...props} />);
    const image = screen.getByAltText(props.bankName);

    expect(image.src).toBe(props.url);
  });
});