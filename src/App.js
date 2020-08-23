import React from 'react';
import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Container } from 'reactstrap';

const Example = (props) => {
  return (
    <>
      <Container className="Product">.container</Container>
      <Container className="Name" fluid="sm">.container-sm</Container>
      <Container className="Category" fluid="md">.container-md</Container>
      <Container className="price" fluid="lg">.container-lg</Container>
      
  );
}

export default Example;