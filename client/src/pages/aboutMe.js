import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PictureOfMe from '../img/pfp.jpg';

const AboutMe = () => {
  return (
    <>
      <header className="bg-primary-gradient">
        <Container className="py-5">
          <Row className="py-5">
            <Col md={6} className="text-center text-md-start d-flex justify-content-center align-items-center justify-content-md-start mb-4" style={{maxWidth: "450px"}}>
              <div>
                <p className="fw-bold text-success mb-2" style={{color: "rgb(249, 221, 22)"}}>About Me&nbsp;</p>
                <h2 className="fw-bold">Hey I'm Zander</h2>
                <p className="text-center my-3"><strong>I'm a student at UNC Charlotte studying computer science.</strong></p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="p-5 mx-lg-5" style={{background: `url("blob.svg") center / contain no-repeat`}}>
                <Image src={PictureOfMe} rounded fluid style={{minHeight: "300px"}} />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col md={8} xl={6} className="text-center mx-auto">
              <h2 className="fw-bold">How you can reach me</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={4} xl={4} className="d-flex justify-content-center">
              <div className="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
                <div className="d-flex align-items-center p-3">
                  {/* Icon should be replaced with an appropriate React component or image */}
                  <div className="shadow d-flex justify-content-center align-items-center">
                    {/* SVG icon can be placed here */}
                  </div>
                  <div className="px-2">
                    <h6 className="fw-bold mb-0">Email</h6>
                    <p className="text-muted mb-0"><strong>zandercowan01@gmail.com</strong></p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutMe;
