import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import '@testing-library/jest-dom';
import BankList from '../../../containers/bankList/BankList';


jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('BankList component', () => {
  let dispatch;
  let bankList;

  beforeEach(() => {
    dispatch = jest.fn();
    useSelector.mockImplementation(callback =>
      callback({
        banks: { bankList: bankList },
      })
    );
    useDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Spinner when bankList is falsy', () => {
    bankList = null;
    render(<BankList />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByTestId('bank-row')).not.toBeInTheDocument();
  });

  it('should render BankCard for each bank in bankList', () => {
    bankList = [
      {
        bankName: 'Bank A',
        description: 'Bank A description',
        age: '10 years',
        url: 'https://www.banka.com',
      },
      {
        bankName: 'Bank B',
        description: 'Bank B description',
        age: '5 years',
        url: 'https://www.bankb.com',
      },
    ];
    render(<BankList />);
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    expect(screen.getAllByTestId("bank")).toHaveLength(2);

  });

  it('should pass the correct props to BankCard', () => {
    bankList = [
      {
        bankName: 'Bank A',
        description: 'Bank A description',
        age: 10,
        url: 'https://www.banka.com',
      },
    ];
    render(<BankList />);
    expect(screen.getByText('Bank A')).toBeInTheDocument();
    expect(screen.getByText('Bank A description')).toBeInTheDocument();
    expect(screen.getByText('10 años')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://www.banka.com');
  });
});