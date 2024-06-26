import React from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';

const CardInformation = ({changeComponent}) =>  {
  return (
    <section className="position-relative py-4 py-xl-5">
      <Container>
        <Row className="mb-5">
          <Col md={8} xl={6} className="text-center mx-auto">
            <h2><strong>Deposit</strong></h2>
            <p className="w-lg-50"><strong>deposit your card below</strong></p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={6} xl={8} className="flex-grow-1" style={{ borderStyle: 'none' }}>
            <Card className="border-light border-1 d-flex justify-content-center p-4">
              <Card.Body>
                <div>
                  <h5 className="fw-bold text-center" style={{ paddingTop: '0', paddingBottom: '20px' }}>Card Information</h5>
                  <Form>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" style={{ paddingBottom: '20px' }}>
                          <Form.Label htmlFor="username"><strong>Card Holder</strong></Form.Label>
                          <Form.Control type="text" id="username-2" placeholder="A GIFT TO YOU" name="username" />
                        </Form.Group>
                        <Form.Group className="mb-3" style={{ paddingBottom: '20px' }}>
                          <Form.Label htmlFor="email"><strong>Expiration Date</strong></Form.Label>
                          <InputGroup className="expiration-date" data-bs-theme="light">
                            <Form.Control type="text" placeholder="MM" name="expiration_month" />
                            <Form.Control type="text" placeholder="YY" name="expiration_year" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" style={{ paddingBottom: '20px' }}>
                          <Form.Label htmlFor="first_name"><strong>Card Number</strong></Form.Label>
                          <Form.Control type="text" id="first_name-2" placeholder="Card Number" name="first_name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="last_name"><strong>CVC</strong></Form.Label>
                          <Form.Control type="text" id="last_name-1" placeholder="CVC" name="last_name" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-center mb-3" style={{ paddingTop: '30px' }}>
                      <Button variant="primary" size="lg" onClick={() => changeComponent('BankInformation')}><strong>Continue</strong></Button>
                    </div>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CardInformation;
