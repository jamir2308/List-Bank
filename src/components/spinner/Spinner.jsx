import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <BootstrapSpinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </BootstrapSpinner>
    </div>
  );
};

export default Spinner;