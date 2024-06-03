import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container fluid>
    <Nav className="nav nav-underline">
      <Nav.Item className="nav-item">
        <Nav.Link as={Link} to='/Home' className="home" aria-current="page">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link as={Link} to='/AboutMe'>
          About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link as={Link} to='/Projects'>
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link as={Link} to='/Contact'>
          Contact Me
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    </Navbar>
  );
};


export default NavBar;

