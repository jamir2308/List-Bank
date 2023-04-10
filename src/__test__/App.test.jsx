import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './../App';
import { Provider } from 'react-redux';
import { store } from '../store/index';

describe('App', () => {
  test('should render title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const title = screen.getByText('Lista de Bancos');
    expect(title).toBeInTheDocument();
  });

  test('should render BankList', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const bankList = screen.getByRole('list');
    expect(bankList).toBeInTheDocument();
  });
});