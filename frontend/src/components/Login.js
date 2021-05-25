import React, { useState } from "react";

function Login() {
  const [item, setItem] = useState({
    email: "",
    password: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setItem((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 mt-5 mx-auto login-container">
            <h1 className="text-center mt-3">Log in</h1>

            <form className="mt-4 mb-4" onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={item.email}
                  onChange={InputEvent}
                />
                <div id="emailHelp" class="form-text">
                  yourname@gmail.com
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={item.password}
                  onChange={InputEvent}
                />
              </div>
              <div class="d-grid gap-2 mx-auto">
                <button
                  class="btn btn-dark btn-lg mt-3"
                  type="button"
                  // onClick={loginClick}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
