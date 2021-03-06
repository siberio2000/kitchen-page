import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import styles from "./index.module.css";
import cx from "classnames";

// import blankbg from "../../images/blankbg.png";

const CarouselContainer = () => {
  return (
    <Row>
      <Col style={{backgroundColor: '#eeeeee', width: '2000px'}} className="g-0">
        <Container>
          <Row className={cx(styles.carouselContainer, "text-center" )}>
            <Col>
              <Carousel fade interval={10000}>
                <Carousel.Item className="d-flex align-items-center justify-content-center">
                  <Card>
                    <Card.Body>
                      <p>What Our Customers Say</p>
                      <p>
                        Over 35 years experience designing handmade kitchens
                      </p>
                      <p>
                        Since my first contact I have received a very high level
                        of customer service and advice with my kitchen plans.
                        Ben responded very quickly to all of my emails and
                        delivery of the kitchen was as planned.
                      </p>
                      <p>Jane, Dundee</p>
                      <Button variant="primary">
                        Frequently Asked Questions
                      </Button>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item className="d-flex align-items-center justify-content-center">
                  <Card>
                    <Card.Body>
                      <p>What Our Customers Say</p>
                      <p>
                        Over 35 years experience designing handmade kitchens
                      </p>
                      <p>
                        Since my first contact I have received a very high level
                        of customer service and advice with my kitchen plans.
                        Ben responded very quickly to all of my emails and
                        delivery of the kitchen was as planned.
                      </p>
                      <p>Jane, Dundee</p>
                      <Button variant="primary">
                        Frequently Asked Questions
                      </Button>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item className="d-flex align-items-center justify-content-center">
                  <Card>
                    <Card.Body>
                      <p>What Our Customers Say</p>
                      <p>
                        Over 35 years experience designing handmade kitchens
                      </p>
                      <p>
                        Since my first contact I have received a very high level
                        of customer service and advice with my kitchen plans.
                        Ben responded very quickly to all of my emails and
                        delivery of the kitchen was as planned.
                      </p>
                      <p>Jane, Dundee</p>
                      <Button variant="primary">
                        Frequently Asked Questions
                      </Button>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default CarouselContainer;
