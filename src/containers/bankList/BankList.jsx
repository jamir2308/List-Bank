import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'react-bootstrap';
import Spinner from '../../components/spinner/Spinner';
import BankCard from '../../components/bankCard/BankCard';
import useFetch from '../../hooks/useFetch';

const BankList = () => {
  const { data, loading, error } = useFetch('https://dev.obtenmas.com/catom/api/challenge/banks');

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Alert variant="danger">
        Ha ocurrido un error al cargar los datos. Inténtelo de nuevo más tarde.
      </Alert>
    );
  }

  return (
    <Row>
      {data && data.map((bank) => (
        <Col key={bank.bankName} xs={12} md={6} lg={4} className='mt-4'>
          <BankCard
            bankName={bank.bankName}
            description={bank.description}
            age={bank.age}
            url={bank.url}
          />
        </Col>
      ))}
    </Row>
  );
};

export default BankList;