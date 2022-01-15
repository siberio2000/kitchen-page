import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";

import cardImage from "../../images/cardImage.png";

const CardContainer = () => {
  return (
    <Row>
      <Col>
        <Card className="d-flex flex-row flex-sm-nowrap" >
          <Card.Img variant="top" src={cardImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardContainer;
