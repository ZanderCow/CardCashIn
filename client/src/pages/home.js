import React from 'react';
import { Container, Row, Col, Button,Card,Accordion } from 'react-bootstrap';
import '../css/bootstrap.min.css';
import '../css/bs-theme-overrides.css';
import '../css/Navbar-Centered-Links-icons.css';
import '../fonts/fontawesome-all.min.css';
import VisaLogo from '../img/brands/visa.png';
import MasterCardLogo from '../img/brands/mastercard.png';
import AmexLogo from '../img/brands/amex.png';
import DiscoverLogo from '../img/brands/discover.png';


const Home = ({ changeComponent }) => {

    return (
        <>
          <section className="py-4 py-xl-5">
            <Container>
              <div className="text-center p-4 p-lg-5">
                <h1 className="fw-bold mb-4">Seamlessly Convert Gift Cards<br />to Bank Deposits</h1>
                <Button variant="primary" size="lg" className="me-2 py-2 px-4" onClick={() => changeComponent('CardInformation')}>
                  <strong>Try Now</strong>
                </Button>
              </div>
            </Container>
            <Row className="pt-5">
              <Col xs={12} lg={10} className="mx-auto">
                <div className="text-center position-relative">
                  <i className="far fa-credit-card" style={{ fontSize: '237px' }}></i>
                </div>
              </Col>
            </Row>
          </section>
    <Container className="py-4 py-xl-5">
      <Row className="gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-md-center">
        {/* Card 1 */}
        <Col>
          <Card className="border-light border-1 d-flex justify-content-center p-4">
            <Card.Body>
              <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                <svg class="icon icon-tabler icon-tabler-credit-card" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                    <path d="M3 10l18 0"></path>
                    <path d="M7 15l.01 0"></path>
                    <path d="M11 15l2 0"></path>
                </svg>
              </div>
              <h4 className="fw-bold"> Seamless Balance Transfer</h4> 
              <p class="text-muted">
                <strong>
                    <span color="black"> Easily transfer your gift card balances directly into your bank with just a few taps.</span>
                </strong>
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col>
        <Card className="border-light border-1 d-flex justify-content-center p-4">
            <Card.Body>
              <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
              <svg class="icon icon-tabler icon-tabler-shield-filled" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11.884 2.007l.114 -.007l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021z" stroke-width="0" fill="currentColor"></path>
            </svg>
              </div>
              <h4 className="fw-bold"> Secure</h4> 
              <p class="text-muted">
                <strong>
                    <span color="black"> We utilize industry-standard encryption when processing your card, ensuring your financial information is protected.</span>
                </strong>
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col>
        <Card className="border-light border-1 d-flex justify-content-center p-4">
            <Card.Body>
              <div class="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
              <svg class="bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                </svg>
              </div>
              <h4 className="fw-bold">Transparency</h4> 
              <p class="text-muted">
                <strong>
                    <span color="black">No hidden fees, no BS. We provide a transparent fee structure so that you know what you are paying for each transfer!</span>
                </strong>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <section class="py-5">
        <div class="container text-center py-5">
            <h4 className="fw-bold">Supports all of the major card holders</h4>
              <img src={VisaLogo} width="119" height="45" alt='VisaLogo'/>
              <img src={MasterCardLogo} width="103" height="57" alt="MastercardLogo"/>
              <img  src={AmexLogo} width="111" height="62" alt='AmexLogo'/>
              <img  src={DiscoverLogo} width="252" height="74" alt="DiscoverLogo"/>
              
        </div>
    </section>
    <section className="py-5">
      <h1 className="text-center" style={{ paddingTop: '15px', paddingBottom: '15px', }}><strong>FAQ</strong></h1>
      <Container>
        <Row style={{ paddingBottom: '100px' }}>
          <Col md={6} className="flex-grow-1 justify-content-center">
            <Accordion className="accordion-flush" id="faqlist">
              <Accordion.Item eventKey="0">
                <Accordion.Header><strong>is there any transaction fees?&nbsp;</strong></Accordion.Header>
                <Accordion.Body>
                  <strong>Yes, our services do include transaction fees. This is because credit card companies impose charges on us for processing payments. We incorporate these fees to cover the costs associated with these transactions. But it is very minimal (around 1-3% of the total amount). Every transaction you make with our service you will receive detailed information on the fees. So you know exactly what you're paying for and why.</strong>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><strong>Can I use other&nbsp; gift cards outside of debit?</strong></Accordion.Header>
                <Accordion.Body>
                  <strong>At this time, we are unable to process transfers from types of gift cards other than debit cards. This limitation is due to legal restrictions and the specific financial structures set up by gift card issuing companies. These companies design their gift cards to be used exclusively for purchases within their own networks or platforms. As a result, the funds loaded onto these cards cannot be transferred or converted into a different form of currency for use outside of their intended ecosystem. We understand this may cause inconvenience and appreciate your understanding as these policies are beyond our control.</strong>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><strong>Can I cancel a transfer after initiating it?&nbsp;</strong></Accordion.Header>
                <Accordion.Body>
                  <strong>Transfers cannot be canceled once initiated due to the automated nature of our processing system. Please ensure the accuracy of your transfer details before submitting.</strong>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><strong>Can I transfer partial amounts from my gift card?</strong></Accordion.Header>
                <Accordion.Body>
                  <strong>Yes, you can choose to transfer either the full balance or a partial amount from your debit gift card to your bank account.</strong>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header><strong>What happens if a transfer fails?</strong></Accordion.Header>
                <Accordion.Body>
                  <strong>In the rare event of a transfer failure, any deducted fees will be refunded.&nbsp;</strong>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header><strong>How long does it take for the money to transfer to my bank account?</strong></Accordion.Header>
                <Accordion.Body>
                  <strong>Transfers typically take between 1-3 business days to complete, depending on your bank's processing times and the day of the week you initiate the transfer.</strong>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
    </>
      );
    };


export default Home;
