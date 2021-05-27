/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Aboutcard from "./Aboutcard";
import Aboutdata from "./Aboutdata";
import about_image from "./images/about-image.png";

function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-4">
          <div className="col-6 text-center">
            <h1 className="heading-border">About Us</h1>
          </div>
        </div>

        <div className="row justify-content-center p-3 m-4">
          <div className="col-lg-6 col-md-8 col-sm-8 mx-auto">
            <img className="about-image" src={about_image} alt="about-image" />
          </div>
          <div className="col-lg-6 col-md-8 col-sm-8 p-5">
            <div>
              <h2>Who we are?</h2>
              <p>
                Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis
                aliquet pulvinar ante tempor etiam lacus eros The legal
                definition of a charitable organization (and of charity) varies
                between countries and in some instances regions of the country.
                The regulation, the tax treatment, and the way in which charity
                law affects charitable organizations also vary.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center m-4">
          <div className="col-11 mb-4">
            <div className="section text-center">
              <h2>We Serve for People.</h2>
              <p>
                Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis
                aliquet pulvinar ante.
              </p>
            </div>
          </div>
          {Aboutdata.map((value, index) => {
            return (
              <Aboutcard
                key={index}
                imgsrc={value.imgsrc}
                heading={value.heading}
                detail={value.detail}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default About;
