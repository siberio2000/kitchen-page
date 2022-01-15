import React from "react";
import { Card } from "react-bootstrap";

const GalleryCard = ({ data }) => {
  const { imageUrl } = data;

  return (
    <>
      <Card> 
        <Card.Img variant="top" src={imageUrl} />
      </Card>
    </>
  );
};

export default GalleryCard;
