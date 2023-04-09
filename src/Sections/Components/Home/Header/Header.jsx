import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Logo from '../../../../IMG/Red-Vet-Logo.png';
import  './Header.css'


const Header = () => {
  return (
    <Navbar expand="lg" fixed="top" variant="dark" className="nav-bg">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
              >
                Service
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img src={Logo} alt="" className="logo" />
      </Container> 
    </Navbar>
  );
};

export default Header;
