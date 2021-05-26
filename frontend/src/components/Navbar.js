import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col pe-0 ps-0">
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
                  className="collapse navbar-collapse navigations"
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
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Signup
                      </NavLink>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink
                            className="dropdown-item dropdown-link"
                            to="/signup"
                          >
                            User Signup
                          </NavLink>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item dropdown-link"
                            to="/ngosignup"
                          >
                            NGO Signup
                          </NavLink>
                        </li>
                      </ul>
                    </li>
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
