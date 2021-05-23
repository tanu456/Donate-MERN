/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id="footer" className="mt-5 text-center p-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-3 col-sm-8 footer-col p-3">
            <h3>Follow Us On</h3>
            <div className="d-flex flex-column justify-content-center">
              <div>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="instagram"
                >
                  <i className="fab fa-instagram fa-2x p-2 social-icon"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="facebook"
                >
                  <i className="fab fa-facebook-f fa-2x p-2 social-icon"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  aria-label="twitter"
                >
                  <i className="fab fa-twitter fa-2x p-2 social-icon"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  aria-label="linkedin"
                >
                  <i className="fab fa-linkedin-in fa-2x p-2 social-icon"></i>
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-3 col-sm-8 footer-col p-3">
            <h3>Navigation</h3>
            <div className="d-flex flex-column justify-content-center">
              <div>
                <NavLink className="footer-nav m-5" to="/">
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

          <div className="col-lg-3 col-md-3 col-sm-8 footer-col p-3">
            <h3>Contact Us</h3>
            <div className="d-flex flex-column justify-content-center">
              <div>Logo</div>
              <h6 className="text-muted">Email- xxxx@gmail.com</h6>
              <h6 className="text-muted"> Phone no- +91 XXXXXXXXXX</h6>
              <h6 className="text-muted">
                Address- lorem vkshfgksfv fhshfgsk hgsbgsb
              </h6>
            </div>
          </div>
          {/*  */}
        </div>
        {/* {----------------------COPYRIGHT AREA--------------------------------} */}
        <div className="row">
          <div className="col mx-auto">
            <h5 className="text-muted">Copyright ©2020 All rights reserved</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
