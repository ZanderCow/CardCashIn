import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SuccessComponent = ({changeComponent}) => {
  return (
    <Container style={{ paddingTop: '1rem', paddingBottom: '0' }} fluid="xl">
      <Row className="gy-4 gy-md-0">
        <Col md={6}>
          <div className="d-flex justify-content-center p-xl-5 m-xl-5 align-items-center" style={{ minHeight: '320px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-check swing animated" style={{ fontSize: '320px' }}>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </div>
        </Col>
        <Col sm={12} md={6} className="text-center d-flex justify-content-center align-items-center">
          <div style={{ maxWidth: '350px' }}>
            <h2 className="fw-bold">Thank You!</h2>
            <p className="my-3">Your card was successful! You should receive the money in your bank account in 1-3 days.&nbsp;</p>
            <Button variant="primary" size="lg" className="text-center d-flex justify-content-center me-2" onClick={() => changeComponent('Home')}><strong>Go To Homepage</strong></Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessComponent;
