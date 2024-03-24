
import React from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';

import '../css/bootstrap.min.css';
import '../css/bs-theme-overrides.css';
import '../css/Navbar-Centered-Links-icons.css';
import '../fonts/fontawesome-all.min.css';
import '../css/aos.min.css';
import '../css/animate.min.css';
import '../css/accordion-faq-list.css';
import '../css/Hero-Clean-images.css';




const CardInformation = () => {
  // State to manage the collapse
  
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
                  <h5 className="fw-bold text-center" style={{ paddingTop: '0', paddingBottom: '20px' }}>Bank Information</h5>
                  <p className="text-muted"></p>
                  <Form>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" style={{ paddingBottom: '20px' }}>
                          <Form.Label htmlFor="username"><strong>Account Holder Name</strong></Form.Label>
                          <Form.Control type="text" id="username-1" placeholder="A GIFT TO YOU" name="username" />
                        </Form.Group>
                        <Form.Group className="mb-3" style={{ paddingBottom: '20px' }}>
                          <Form.Label htmlFor="email"><strong>Bank Name</strong></Form.Label>
                          <InputGroup className="expiration-date" data-bs-theme="light">
                            <Form.Control type="text" placeholder="MM" name="expiration_month" />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" style={{ paddingBottom: '20px' }}>
                          <Form.Label htmlFor="first_name"><strong>Accounting Number</strong></Form.Label>
                          <Form.Control type="text" id="first_name-1" placeholder="Card Number" name="first_name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="last_name"><strong>Routing Number</strong></Form.Label>
                          <Form.Control type="text" id="last_name-2" placeholder="CVC" name="last_name" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-center mb-3" style={{ paddingTop: '30px' }}>
                      <Button variant="primary" size="lg"><strong>Submit</strong></Button>
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

  
};

export default CardInformation;
