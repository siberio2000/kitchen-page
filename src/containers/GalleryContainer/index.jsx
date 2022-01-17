import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import GalleryCard from "../../components/GalleryCard";
import styles from "./index.module.css";


const galleryContent = [
  {
    id: 1,
    imageUrl: require("../../images/gallery-1.png"),
    link: "",
  },
  {
    id: 2,
    imageUrl: require("../../images/gallery-2.png"),
    link: "",
  },
  {
    id: 3,
    imageUrl: require("../../images/gallery-3.png"),
    link: "",
  },
  {
    id: 4,
    imageUrl: require("../../images/gallery-4.png"),
    link: "",
  },
];

const GalleryContainer = () => {
    const [cards] = useState(galleryContent);

  return (
    <>
      <Row className={styles.galleryContainer}>
        <Col md={12} className="text-center">
          <p>Customer Gallery</p>
        </Col>
        <Col md={12} className="d-flex justify-content-around pt-0 g-3">
          <Row className="d-flex justify-content-around">
            {cards.map((card) => (
              <Col key={card.id} xs={6} md={3}>
                <GalleryCard data={card} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={12} className="d-flex justify-content-around g-0">
        <Button variant="primary">VIEW MORE</Button>
        </Col>
      </Row>
    </>
  );
};

export default GalleryContainer;
