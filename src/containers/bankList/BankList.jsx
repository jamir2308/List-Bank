import React from 'react';
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
      {data && data.map(({bankName,description,age,url}) => (
        <Col key={bankName} xs={12} md={6} lg={4} className='mt-4'>
          <BankCard
            bankName={bankName}
            description={description}
            age={age}
            url={url}
          />
        </Col>
      ))}
    </Row>
  );
};

export default BankList;