/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  const [item, setItem] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    error: {
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: "",
    },
  });

  const showMessage = () => {
    alert("logged in...");
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  const inputEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setItem((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    // console.log([item.password]);
    switch (name) {
      case "fName":
        item.error.fName =
          value.length < 3 ? "Your first name is too small." : "";
        break;

      case "lName":
        item.error.lName =
          value.length < 2 ? "Your last name is too small." : "";
        break;

      case "email":
        item.error.email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid";
        break;

      case "address":
        item.error.address = value.length < 10 ? "Invalid Address!!" : "";
        break;

      case "phone":
        item.error.phone =
          value.length < 10 ? "Phone number should contain ten digits." : "";
        break;

      case "password":
        item.error.password =
          value.length < 10 ? "Password should contain ten letters." : "";
        break;

      case "confirmPassword":
        item.error.confirmPassword =
          value === item.password
            ? ""
            : "Confirm Password dosen't match with your Password.";
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 mt-5 mx-auto login-container">
            <h1 className="mt-3 font-weight-bold text-center">Register</h1>
            <form className="mt-4" onSubmit={formSubmit}>
              <div class="mb-3">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Enter your First Name"
                  name="fName"
                  value={item.fName}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">{item.error.fName}</h6>
              </div>

              <div class="mb-3">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Enter your Last Name"
                  name="lName"
                  value={item.lName}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">{item.error.lName}</h6>
              </div>

              <div class="mb-3">
                <label class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Enter your Address"
                  name="address"
                  value={item.address}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">{item.error.address}</h6>
              </div>

              <div className="mb-3">
                <label class="form-label">Location</label>
                <button
                  className="btn btn-outline-dark btn-md ms-4"
                  onClick={getLocation}
                >
                  Your Location
                </button>
              </div>

              <div class="mb-3">
                <label class="form-label">Enter your Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="phoneNumber"
                  placeholder="Enter your Phone Number"
                  name="phone"
                  value={item.phone}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">{item.error.phone}</h6>
              </div>

              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Email"
                  name="email"
                  value={item.email}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">{item.error.email}</h6>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                  name="password"
                  value={item.password}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">{item.error.password}</h6>
              </div>

              <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  placeholder="Enter your confirm password"
                  name="confirmPassword"
                  value={item.confirmPassword}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">
                  {item.error.confirmPassword}
                </h6>
              </div>

              <div class="d-grid gap-2 mx-auto">
                <button
                  class="btn btn-dark btn-lg mt-3"
                  type="button"
                  onClick={showMessage}
                >
                  Register
                </button>
              </div>
              <p className="forgot-password text-center mt-3 text-muted">
                Already registered <NavLink to="/login">log in</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
