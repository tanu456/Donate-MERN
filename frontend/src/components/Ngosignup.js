/* eslint-disable no-useless-escape */
/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Ngosignup() {
  const [item, setItem] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    registerationNumber: "",
    address: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    error: {
      name: "",
      email: "",
      phoneNumber: "",
      registerationNumber: "",
      address: "",
      pincode: "",
      password: "",
      confirmPassword: "",
    },
  });

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setItem((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    switch (name) {
      case "name":
        item.error.name =
          value.length < 5
            ? "Your name must be atleast 5 letters capital."
            : "";
        break;
      case "email":
        item.error.email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid";
        break;
      case "phoneNumber":
        item.error.phoneNumber =
          value.length < 10 ? "Phone number should contain ten digits." : "";
        break;
      case "registerationNumber":
        item.error.registerationNumber =
          value.length < 10 ? "Invalid registeration number" : "";
        break;
      case "address":
        item.error.address = value.length < 10 ? "Invalid Address!!" : "";
        break;
      case "pincode":
        item.error.pincode = value.length != 6 ? "Invalid Pincode!!" : "";
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
        break;
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-7 col-sm-5 mt-5 mx-auto login-container">
            <h1 className="mt-3 font-weight-bold text-center">Register</h1>
            <form className="mt-4" onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="" class="form-label">
                  NGO Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter the Organisation Name"
                  name="name"
                  value={item.name}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">{item.error.name}</h6>
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Enter your Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="phNumber"
                  placeholder="Enter your Phone Number"
                  name="phoneNumber"
                  value={item.phoneNumber}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">
                  {item.error.phoneNumber}
                </h6>
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Address
                </label>
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

              <div class="mb-3">
                <label for="" class="form-label">
                  Pincode
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="pincode"
                  placeholder="Enter Pincode"
                  name="pincode"
                  value={item.pincode}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">{item.error.pincode}</h6>
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
                <label for="" class="form-label">
                  NGO Registeration Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="regName"
                  placeholder="Enter your NGO Registeration Number"
                  name="registerationNumber"
                  value={item.registerationNumber}
                  onChange={inputEvent}
                />
                <h6 className="validation-text mt-2">
                  {item.error.registerationNumber}
                </h6>
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Email address
                </label>
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
                <label for="" class="form-label">
                  Password
                </label>
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
                <label for="" class="form-label">
                  Confirm Password
                </label>
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
              <div className="mb-3">
                <label class="form-label">What you accept?</label>
                <div class="form-check form-check-inline ms-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Clothes
                  </label>
                </div>
                <div class="form-check form-check-inline ms-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    Books
                  </label>
                </div>
              </div>
              <div class="d-grid gap-2 mx-auto">
                <button
                  class="btn btn-dark btn-lg mt-3"
                  type="button"
                  // onClick={registerClicked}
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

export default Ngosignup;
