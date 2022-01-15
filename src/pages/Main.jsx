import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Navbar from "../containers/Navbar";
import TopContainer from "../containers/TopContainer";
import CardContainer from "../containers/CardContainer";
import CarouselContainer from "../containers/CarouselContainer";
import GalleryContainer from "../containers/GalleryContainer";
import Footer from "../containers/Footer";

const Main = () => {
  return (
    <>
      <Container style={{maxWidth: '2000px'}}>
        <Navbar />
        <TopContainer />
        {/* <CardContainer /> */}
        <CarouselContainer />
        <GalleryContainer />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
