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
      <Col style={{height: '320px', borderBottom: '1px solid #8B8988'}}>
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
                    <h5 className="">About</h5>

                    <div className="">
                      <a href="#.">Shop</a>
                    </div>

                    <div className="">
                      <a href="#.">Plan My Kitchen</a>
                    </div>

                    <div className="">
                      <a href="#.">About Us</a>
                    </div>

                    <div className="">
                      <a href="#.">Gallery</a>
                    </div>
                  </Row>
                </Col>

                <Col xs={6} sm={6} md={3}>
                  <Row>
                    <h5 className="">Service</h5>

                    <div className="">
                      <a href="#.">FAQ</a>
                    </div>

                    <div className="">
                      <a href="#.">Contact</a>
                    </div>

                    <div className="">
                      <a href="#.">How to Buy</a>
                    </div>

                    <div className="">
                      <a href="#.">Downloads</a>
                    </div>
                  </Row>
                </Col>

                <Col xs={6} sm={6} md={3}>
                  <Row>
                    <h5 className="">Info</h5>

                    <div className="">
                      <a href="#.">Delivery</a>
                    </div>

                    <div className="">
                      <a href="#.">Terms</a>
                    </div>

                    <div className="">
                      <a href="#.">Privacy</a>
                    </div>
                  </Row>
                </Col>

                <Col xs={6} sm={6} md={3}>
                  <Row>
                    <h5 className="">Follow</h5>
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
