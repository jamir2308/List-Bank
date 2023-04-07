import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BankList from '../../../containers/bankList/BankList';

describe('BankList component', () => {

  test('renders a spinner while loading data', () => {
    const { container } = render(<BankList />);
    expect(container.querySelector('.spinner-border')).toBeInTheDocument();
  });

  test('renders an error message when data loading fails', async () => {
    const mockData = [
      {
        bankName: 'Mock Bank 1',
        description: 'Mock Bank 1 Description',
        age: '10 years',
        url: 'https://www.mockbank1.com/',
      },
      {
        bankName: 'Mock Bank 2',
        description: 'Mock Bank 2 Description',
        age: '5 years',
        url: 'https://www.mockbank2.com/',
      },
    ];
    const errorMessage = 'Ha ocurrido un error al cargar los datos. Inténtelo de nuevo más tarde.';
    const mockError = new Error('mock error');
    jest.mock('../../../hooks/useFetch', () => ({
      __esModule: true,
      default: () => ({
        data: mockData,
        loading: false,
        error: mockError,
      }),
    }));
    render(<BankList />);
    const errorAlert = await screen.findByRole('alert');
    expect(errorAlert).toHaveTextContent(errorMessage);
  });

});