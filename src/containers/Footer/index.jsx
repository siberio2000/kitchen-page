import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import insta from "../../images/insta.png";

const Footer = () => {
  return (
    <Row>
      <Col>
        <Container className={styles.footerContainer}>
          <Row>
            <Col xs={12} sm={6} md={3}>
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

            <Col xs={12} sm={6} md={3}>
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

            <Col xs={12} sm={6} md={3}>
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

            <Col xs={12} sm={6} md={3}>
              <Row>
                <h5 className="">Follow</h5>
                <span className="social-footer2 d-flex justify-content-around">
                  <a title="youtube" href="https://bit.ly/3m9avif">
                    <img alt="youtube" width="30" height="30" src={facebook} />
                  </a>
                  <a href="https://www.facebook.com/" title="Facebook">
                    <img alt="Facebook" width="30" height="30" src={twitter} />
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
          <Row>
            <Col md={12} className="text-center">
              <p>Copyright Company Name © 2021. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Footer;
