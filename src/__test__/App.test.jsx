import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './../App';

test('Renderiza el título correctamente', () => {
  render(<App />);
  const titulo = screen.getByText(/Lista de Bancos/i);
  expect(titulo).toBeInTheDocument();
});

test('Renderiza la lista de bancos', async () => {
  const mockResponse = [
    { id: 1, name: 'Banco 1' },
    { id: 2, name: 'Banco 2' },
    { id: 3, name: 'Banco 3' },
  ];

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  );

  render(<App />);

  const bankListItems = await screen.findAllByRole('listitem');
  expect(bankListItems).toHaveLength(mockResponse.length);
});