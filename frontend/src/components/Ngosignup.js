import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Ngosignup() {
  const [item, setItem] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    registerationNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const registerClicked = (e) => {
    const [name, value] = e.target;
    setItem((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
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
                  value={item}
                />
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
                  value={item}
                />
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
                  value={item}
                />
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
                  value={item}
                />
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
                  value={item}
                />
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
                  value={item}
                />
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
                  value={item}
                />
              </div>
              <div class="d-grid gap-2 mx-auto">
                <button
                  class="btn btn-dark btn-lg mt-3"
                  type="button"
                  onClick={registerClicked}
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
