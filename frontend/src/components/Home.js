/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import homeImg from "./images/Homeimage.png";
import { NavLink } from "react-router-dom";
import Aboutcard from "./Aboutcard";
import Aboutdata from "./Aboutdata";
import education from "./images/education.jpg";

import smiling from "./images/smiling.jpg";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column align-items-center justify-content-center align-items-center">
                  <h1 className="home-main-line">
                    Support a causes you care about
                  </h1>
                  <div className="mt-3">
                    <NavLink
                      to="/ngo"
                      className="btn btn-outline-success btn-get-started"
                    >
                      Donate Now
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <img
                    src={homeImg}
                    className="image-fluid animated header-image mt-5"
                    alt="Home Image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CAROUSAL */}

          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade m-5"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner p-3">
              <div class="carousel-item car-image active">
                <img
                  src={education}
                  class="d-block w-100"
                  alt="Education Image"
                />
              </div>
              <div class="carousel-item car-image">
                <img
                  src={smiling}
                  class="d-block w-100"
                  alt="Education Image"
                />
              </div>
              <div class="carousel-item car-image">
                <img
                  src={education}
                  class="d-block w-100"
                  alt="Education Image"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          {/* SERVICES */}

          <div className="row justify-content-center mt-5">
            <div className="col-11 mb-4">
              <div className="section text-center">
                <h2>We Serve People.</h2>
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
      </section>
    </>
  );
};

export default Home;
