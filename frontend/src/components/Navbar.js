import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Signup from "./Signup";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                {/* LOGO */}
                <NavLink className="navbar-brand" to="/">
                  NGO<span className="logo">:)</span>Donation
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {/* NAVITEMS */}
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        activeClassName="active-link"
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active-link"
                        exact
                        to="/cases"
                      >
                        Cases
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active-link"
                        exact
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active-link"
                        exact
                        to="/ngo"
                      >
                        NGOs
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active-link"
                        exact
                        to="/contact"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <NavLink
                      exact
                      to="/signup"
                      className="btn btn-md sign-button"
                    >
                      Sign up
                    </NavLink>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
