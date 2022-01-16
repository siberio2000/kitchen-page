import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
import styles from "./index.module.css";

import cardImage from "../../images/cardImage.png";

const CardContainer = () => {
  return (
    <Row className={styles.cardContainer}>
      <Col className="g-0">
        <Card className="d-flex flex-row">
          <Card.Img variant="top" src={cardImage} />
          <Card.Body className="d-flex flex-column align-items-start justify-content-center">
            <p>Quality Craftmanship from build to delivery</p>
            <p>Discover the beauty of a handmade kitchen</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
            </p>
            <Button variant="primary">ABOUT US</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardContainer;
