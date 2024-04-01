
import React from 'react';
import { Container, Navbar, Nav, Button} from 'react-bootstrap';
import '../css/bootstrap.min.css';
import '../css/bs-theme-overrides.css';
import '../css/Navbar-Centered-Links-icons.css';
import '../fonts/fontawesome-all.min.css';
import '../css/aos.min.css';
import '../css/animate.min.css';
import '../css/accordion-faq-list.css';
import '../css/Hero-Clean-images.css';




const MyNavbar = ({ changeComponent }) => {
  // State to manage the collapse
  
    return (

        <Navbar collapseOnSelect expand="md" className="py-3">
          <Container>
            <Navbar.Brand onClick={() => changeComponent('Home')}>
              <div className="d-flex align-items-center">
                <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-credit-card-2-back-fill">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z"></path>
                  </svg>
                </div>
                <strong>Card Casher</strong>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="d-xxl-flex">
              <Nav className="me-auto my-2 my-lg-0 m-auto d-flex justify-content-center align-items-center" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link className="active" onClick={() => changeComponent('Home')}><strong>Home</strong></Nav.Link>
                <Nav.Link onClick={() => changeComponent('AboutMe')}><strong>About</strong></Nav.Link>
              </Nav>
              <Nav>
                <Button variant="primary" className="d-flex justify-content-center"><strong>Try Now</strong></Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );

  
};

export default MyNavbar;
