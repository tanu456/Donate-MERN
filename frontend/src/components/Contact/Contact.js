/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
import React, { useState } from "react";

function Contact() {
  const [input, setInput] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    query: "",
    error: {
      fullName: "",
      phoneNo: "",
      email: "",
      query: "",
    },
  });

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const InputEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let error = input.error;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    switch (name) {
      case "fullName":
        error.fullName =
          value.length < 5
            ? "Your name must be atleast 5 letters capital."
            : "";
        break;
      case "phoneNo":
        error.phoneNo =
          value.length < 10 ? "Phone number should contain ten digits." : "";
        break;
      case "email":
        error.email = validEmailRegex.test(value) ? "" : "Email is not valid";
        break;
      case "query":
        error.query = value.length === 0 ? "Your query cannot be empty." : "";
        break;
    }
  };

  const showMessage = () => {
    alert("Form Submitted Successfully!!!");
  };

  return (
    <>
      <div className="mt-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={input.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Name Please"
                />
                <h6 className="validation-text mt-2">{input.error.fullName}</h6>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  PhoneNo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phoneNo"
                  value={input.phoneNo}
                  onChange={InputEvent}
                  placeholder="Phone Number"
                />
                <h6 className="validation-text mt-2">{input.error.phoneNo}</h6>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={input.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
                <h6 className="validation-text mt-2">{input.error.email}</h6>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Your Query
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="query"
                  value={input.query}
                  onChange={InputEvent}
                  placeholder="Enter your query"
                ></textarea>
                <h6 className="validation-text mt-2">{input.error.query}</h6>
              </div>

              <div class="col-12">
                <button
                  class="btn btn-primary"
                  type="submit"
                  onClick={showMessage}
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
