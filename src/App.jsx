import React from 'react';
import { Container } from 'react-bootstrap';
import BankList from './containers/bankList/BankList';
import "./App.scss"

const App = () => {
  return (
    <Container className="my-4">
      <h2 className='text-center text-secondary text-xl'>Lista de Bancos</h2>
      <BankList />
    </Container>
  );
};

export default App;
