import React, { useState } from "react";

import { uploadImage } from "../api/upload-api";
function ExampleImageUpload() {
  const [file, setFile] = useState(null);

  const formSubmit = (e) => {
    e.preventDefault();
    uploadImage(file)
      .then((url) => {
        //store url in varible
        console.log("returned url is " + url);
      })
      .catch((err) => console.log(err));
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
  const fileChangedHandler = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 mt-5 mx-auto login-container">
            <h1 className="text-center mt-3">Log in</h1>

            <form className="mt-4 mb-4" onSubmit={formSubmit}>
              <div class="mb-3">
                <input type="file" onChange={fileChangedHandler} />
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

export default ExampleImageUpload;
