import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Rstechsolutionsmeco</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Github-Projects</Nav.Link>
            <Nav.Link href="#about">M.I.T-2023-FULLSTACK DEVELOPER PROGRAM</Nav.Link>
            <Nav.Link href="#contact">Auto-Mechanic:Custom systems</Nav.Link>
            <Nav.Link href="#home">Space Advocacy: Planetary Society</Nav.Link>
            <Nav.Link href="#about">Machine-Learning: ADAS Vehicle Detection System</Nav.Link>
            <Nav.Link href="#contact">Contact information</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
