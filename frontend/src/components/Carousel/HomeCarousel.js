import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel_img1 from "../images/carousel_img1.jpg";
import carousel_img2 from "../images/carousel_img2.jpg";
import carousel_img3 from "../images/carousel_img3.jpg";
const HomeCarousel = () => {
  const mystyle = {
    height: "460px",
    opacity: "0.8",
    
  };
  const text ={
    fontWeight: 'bold',
    color: "white",
  }
  return (
    <>
     
      <Carousel>
        <Carousel.Item interval={5000}>
          <img style={mystyle} className="d-inline-block w-100 " src={carousel_img1} alt="First slide" />
          <Carousel.Caption>
            <h1 style={text} >Do small thing with great love.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img style={mystyle} className="d-block w-100" src={carousel_img2} alt="Second slide" />
          <Carousel.Caption>
            <h1 style={text} >No one has ever become poor by giving</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img style={mystyle} className="d-block w-100" src={carousel_img3} alt="Third slide" />
          <Carousel.Caption>
            <h1 style={text} >Be the change you want to see in the world</h1>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default HomeCarousel;
