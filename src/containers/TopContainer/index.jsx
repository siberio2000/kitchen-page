import React from "react";
import { Row, Col, Carousel, Card, Button } from "react-bootstrap";
import styles from "./index.module.css";

import topBanner from "../../images/topbanner.png";

const TopContainer = () => {
  return (
    <Row className={styles.topContainer}>
      <Col className="g-0">
        <Carousel fade interval={100000}>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={topBanner}
              alt="First slide"
            />
            <Carousel.Caption className="d-flex justify-content-around">
              <Card>
                <Card.Body>
                  <p>Design and order your new kitchen online today</p>
                  <p>Bespoke & made to measure handmade kitchen design</p>
                  <Button variant="primary">ORDER NOW</Button>
                </Card.Body>
              </Card>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={topBanner}
              alt="First slide"
            />
            <Carousel.Caption className="d-flex justify-content-around">
              <Card>
                <Card.Body>
                  <p>Design and order your new kitchen online today</p>
                  <p>Bespoke & made to measure handmade kitchen design</p>
                  <Button variant="primary">ORDER NOW</Button>
                </Card.Body>
              </Card>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={topBanner}
              alt="First slide"
            />
            <Carousel.Caption className="d-flex justify-content-around">
              <Card>
                <Card.Body>
                  <p>Design and order your new kitchen online today</p>
                  <p>Bespoke & made to measure handmade kitchen design</p>
                  <Button variant="primary">ORDER NOW</Button>
                </Card.Body>
              </Card>
            </Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
      </Col>
    </Row>
  );
};

export default TopContainer;
