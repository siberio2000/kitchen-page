import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

import logo from "../../images/logo.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import insta from "../../images/insta.png";

const Footer = () => {
  return (
    <Row className={styles.footerContainer}>
      <Col className={styles.footerInner}>
        <Row className="justify-content-around">
          <Col md={12} className="d-flex justify-content-around logo-block g-0">
            <img className="logo" src={logo} alt="Logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className="g-0">
              <Row>
                <Col xs={6} sm={6} md={3}>
                  <Row>
                    <h5>About</h5>
                    <div>
                      <a href="#.">Shop</a>
                    </div>

                    <div>
                      <a href="#.">Plan My Kitchen</a>
                    </div>

                    <div>
                      <a href="#.">About Us</a>
                    </div>

                    <div>
                      <a href="#.">Gallery</a>
                    </div>
                  </Row>
                </Col>

                <Col xs={6} sm={6} md={3}>
                  <Row>
                    <h5>Service</h5>

                    <div>
                      <a href="#.">FAQ</a>
                    </div>

                    <div>
                      <a href="#.">Contact</a>
                    </div>

                    <div>
                      <a href="#.">How to Buy</a>
                    </div>

                    <div>
                      <a href="#.">Downloads</a>
                    </div>
                  </Row>
                </Col>

                <Col xs={6} sm={6} md={3}>
                  <Row>
                    <h5>Info</h5>

                    <div>
                      <a href="#.">Delivery</a>
                    </div>

                    <div>
                      <a href="#.">Terms</a>
                    </div>

                    <div>
                      <a href="#.">Privacy</a>
                    </div>
                  </Row>
                </Col>

                <Col xs={6} sm={6} md={3}>
                  <Row>
                    <h5>Follow</h5>
                    <span className="social-icons d-flex justify-content-around">
                      <a title="youtube" href="#sd">
                        <img
                          alt="youtube"
                          width="30"
                          height="30"
                          src={facebook}
                        />
                      </a>
                      <a href="https://www.facebook.com/" title="Facebook">
                        <img
                          alt="Facebook"
                          width="30"
                          height="30"
                          src={twitter}
                        />
                      </a>
                      <a href="https://twitter.com" title="Twitter">
                        <img alt="Twitter" width="30" height="30" src={insta} />
                      </a>
                    </span>
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row className="justify-content-around text-center copyright g-0">
                <Col xs={12} md={8}>
                  <p>
                    Copyright Online MTC Home Kitchens 2018 - All rights
                    reserved.
                    <br /> Responsive website design, Development & Hosting by
                    mtc.
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
