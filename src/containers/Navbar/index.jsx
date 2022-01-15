import React from "react";
import { Row, Col, Container, Navbar, Nav, Button } from "react-bootstrap";
import styles from "./index.module.css";

import logo from "../../images/logo.png";

const Navigation = () => {
  return (
    <Row>
      <Col>
        <Navbar collapseOnSelect expand="lg"  variant="dark" className={styles.navigation}>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Shop</Nav.Link>
                <Nav.Link href="#pricing">Plan My Kitchen</Nav.Link>
              </Nav>
              <Navbar.Brand href="#home"><img className="d-block w-100 img-fluid" src={logo} alt="Logo" /></Navbar.Brand>
              <Nav>
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link href="#deets">Gallery</Nav.Link>
                <Button variant="primary">Order Now</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Navigation;
