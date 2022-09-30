import React from 'react';
import { Spinner as Loader } from 'react-bootstrap';

const spinnerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
};

const Spinner = () => {
  return (
    <Loader animation="border" variant="primary" style={spinnerStyle}></Loader>
  );
};

export default Spinner;
