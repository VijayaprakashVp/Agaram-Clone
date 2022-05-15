import React from "react";
import { Carousel } from "react-bootstrap";

import image1 from "./../Assets/Screenshot_23.png";
import image2 from "./../Assets/Screenshot_24.png";

export const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image2} alt="Third slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        /> */}
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
