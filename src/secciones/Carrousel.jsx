import React from "react";
import car1 from "./../imagenes/Carousel/car14.webp";
import car2 from "./../imagenes/Carousel/car12.webp";
import car3 from "./../imagenes/Carousel/car10.webp";
import car4 from "./../imagenes/Carousel/car11.jpg";
import Carousel from "react-bootstrap/Carousel";

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="imgCarousel" src={car1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src={car2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src={car3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src={car4} alt="Four slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
