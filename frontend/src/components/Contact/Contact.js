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

  const submitHandler = async (e) => {
    const url = "http://localhost:5000/api/v1/contact";
    e.preventDefault();
    const { fullName, phoneNo, email, query } = input;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        phoneNo,
        email,
        query,
      }),
    });
    if (res.status === 500 || !res) {
      alert("Some error occurred");
    } else {
      alert("Form Submitted Successfully!!!");
    }
  };

  return (
    <>
      <div className="mt-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-8 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={input.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Name Please"
                />
                <h6 className="validation-text mt-2">{input.error.fullName}</h6>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  PhoneNo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phoneNo"
                  value={input.phoneNo}
                  onChange={InputEvent}
                  placeholder="Phone Number"
                />
                <h6 className="validation-text mt-2">{input.error.phoneNo}</h6>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={input.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
                <h6 className="validation-text mt-2">{input.error.email}</h6>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Your Query
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="query"
                  value={input.query}
                  onChange={InputEvent}
                  placeholder="Enter your query"
                ></textarea>
                <h6 className="validation-text mt-2">{input.error.query}</h6>
              </div>

              <div className="col-12">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={submitHandler}
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
