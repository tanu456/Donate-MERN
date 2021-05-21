import React, { useState } from "react";

function Contact() {
  const [input, setInput] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    query: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const showMessage = () => {
    alert("Form sucessfully submitted..");
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
                  Full name
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
