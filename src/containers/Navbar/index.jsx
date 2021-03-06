import React from "react";
import { Row, Col, Container, Navbar, Nav, Button } from "react-bootstrap";
import styles from "./index.module.css";

import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import insta from "../../images/insta.png";

const Navigation = () => {
  return (
    <Row>
      <Col md={12}>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className={styles.navigation}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Container>
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-around"
            >
              <Nav>
                <Col
                  xs={12} md={12} lg={4}
                  className="d-flex align-items-center justify-content-start socials"
                >
                  <img src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={insta} alt="insta" />
                </Col>
                <Col
                  xs={12} md={12} lg={12}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Nav.Link href="#features">SHOP</Nav.Link>
                  <Nav.Link href="#pricing">PLAN MY KITCHEN</Nav.Link>
                </Col>
              </Nav>
              <Navbar.Brand href="#home">
                <Col
                  xs={12} md={12} lg={12}
                  className="d-flex align-items-center justify-content-center"
                >
                  <img className="logo" src={logo} alt="Logo" />
                </Col>
              </Navbar.Brand>
              <Nav>
                <Col
                  xs={12} md={12} lg={10}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Nav.Link href="#deets">ABOUT US</Nav.Link>
                  <Nav.Link href="#deets">GALLERY</Nav.Link>
                </Col>

                <Col
                  xs={12} md={12} lg={5}
                  className="d-flex align-items-center justify-content-end flex-row"
                >
                  <Button
                    variant="primary"
                    className="d-flex flex-row align-items-center justify-content-center"
                  >
                    <Col>MY ORDER</Col>
                    <img
                      className="align-items-center justify-content-center"
                      src={cart}
                      alt="Cart"
                    />
                  </Button>
                </Col>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Navigation;
