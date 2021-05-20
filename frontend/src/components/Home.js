/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import homeImg from "./images/—Pngtree—cute cartoon charity dedication_4975019.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center">
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
        </div>
      </section>
    </>
  );
};

export default Home;
