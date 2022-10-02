import React from "react"
import { Carousel } from "react-bootstrap";

function BootstrapCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={50}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1774303/pexels-photo-1774303.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1446624/pexels-photo-1446624.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={50}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2350518/pexels-photo-2350518.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;