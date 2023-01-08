import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
        Tugas D5 React Router
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/form">
              Form
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              Todo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
