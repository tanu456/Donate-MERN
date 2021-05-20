import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id="footer" className="mt-5 text-center p-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-8 footer-col p-3">
            <h3>Follow Us On</h3>
            <div className="d-flex flex-column justify-content-center">
              <div>
                <NavLink to="www.instagram.com">
                  <i className="fab fa-instagram fa-2x p-2 social-icon"></i>
                </NavLink>
              </div>
              <div>
                <NavLink to="www.instagram.com">
                  <i className="fab fa-facebook-f fa-2x p-2 social-icon"></i>
                </NavLink>
              </div>
              <div>
                <NavLink to="www.instagram.com">
                  <i className="fab fa-twitter fa-2x p-2 social-icon"></i>
                </NavLink>
              </div>
              <div>
                <NavLink to="www.instagram.com">
                  <i className="fab fa-linkedin-in fa-2x p-2 social-icon"></i>
                </NavLink>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-8 footer-col p-3">
            <h3>Navigation</h3>
            <div className="d-flex flex-column justify-content-center">
              <div>
                <NavLink className="footer-nav p-2" to="/">
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink className="footer-nav m-5" to="/case">
                  Case
                </NavLink>
              </div>
              <div>
                <NavLink className="footer-nav m-5" to="/about">
                  About
                </NavLink>
              </div>
              <div>
                <NavLink className="footer-nav m-5" to="/ngo">
                  NGOs
                </NavLink>
              </div>
              <div>
                <NavLink className="footer-nav m-5" to="/contact">
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="col-lg-3 col-md-6 col-sm-8 footer-col p-3">
            <h3>Contact Us</h3>
          </div>
          {/*  */}
        </div>
      </section>
    </>
  );
};

export default Footer;
