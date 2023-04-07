import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './../App';

test('Renderiza el título correctamente', () => {
  render(<App />);
  const titulo = screen.getByText(/Lista de Bancos/i);
  expect(titulo).toBeInTheDocument();
});

test('Renderiza la lista de bancos', async () => {
  const mockResponse = [
    {
      "description": "esto es una descripcion",
      "age": 10,
      "url": "https://imagenestest.com",
      "bankName": "Banco"
    }
  ];

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  );

  render(<App />);

  const bankListItems = await screen.findAllByTestId('bank');
  expect(bankListItems).toHaveLength(mockResponse.length);
});