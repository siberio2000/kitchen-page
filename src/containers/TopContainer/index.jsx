import React from "react";
import { Row, Col, Carousel, Card, Button } from "react-bootstrap";
import styles from "./index.module.css";

import topBanner from "../../images/topbanner.png";

const TopContainer = () => {
  return (
    <Row className={styles.topContainer}>
      <Col>
        <Carousel fade interval={100000}>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid" src={topBanner} alt="First slide" />
            <Carousel.Caption>
            <Card>
              <Card.Body>
                <p>Design and order your new kitchen online today 1</p>
                <p>
                Bespoke & made to measure handmade kitchen design
                </p>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid" src={topBanner} alt="Second slide" />

            <Carousel.Caption>
            <Card>
              <Card.Body>
                <p>Design and order your new kitchen online today 2</p>
                <p>
                Bespoke & made to measure handmade kitchen design
                </p>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid" src={topBanner} alt="Third slide" />

            <Carousel.Caption>
            <Card>
              <Card.Body>
                <p>Design and order your new kitchen online today 3</p>
                <p>
                Bespoke & made to measure handmade kitchen design
                </p>
                <Button variant="primary">Order Now</Button>
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
