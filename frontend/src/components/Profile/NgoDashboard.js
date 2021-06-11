/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import ngoImage from "../images/ngoImage.png";

const NgoDashboard = () => {
  {
    /**---------------------------------------------------------- */
  }
  const ngoLeftSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header cardHeading">NGO Information</h4>
        <ul className="list-group">
          <li className="list-group-item d-flex imgList">
            <img src={ngoImage} className="ngoImg" alt="NGO Image" />
          </li>
          <li className="list-group-item">
            <span className="badge bg-secondary mr-2">Name:</span>
            <span className="mr-4">abc xyz</span>
          </li>
          <li className="list-group-item">
            <span className="badge bg-secondary mr-2">User Name:</span>
            <span className="mr-4">User Name</span>
          </li>
          <li className="list-group-item">
            <span className="badge bg-secondary mr-2">E-mail:</span>
            <span className="mr-4">abc@gmail.com</span>
          </li>
          <li className="list-group-item">
            <span className="badge bg-secondary mr-2">Phone No:</span>
            <span className="mr-4">+91 1234567890</span>
          </li>
          <li className="list-group-item">
            <span className="badge bg-secondary mr-2">City:</span>
            <span className="mr-4">City</span>
          </li>
          <li className="list-group-item">
            <span className="badge bg-secondary mr-2">
              Registeration Number:
            </span>
            <span className="mr-4"> 123456789012</span>
          </li>
          <li className="list-group-item d-flex btnList">
            <button className="btn btn-success">Update</button>
            <Link className="btn btn-danger" to="/">
              <span className="">Home</span>
            </Link>
          </li>
          {/* <li className="list-group-item">
            
          </li> */}
        </ul>
      </div>
    );
  };

  const ngoRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header cardHeading">NGO Information</h4>
        {/* DONATIONS DATA */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Item</th>
              <th scope="col">date</th>
              <th scope="col">Donated By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-center mt-3 ngoHeading">NGO Dashboard Page!!!</h1>
      <div className="row m-5">
        <div className="col-lg-4 col-md-10 col-sm-10">{ngoLeftSide()}</div>
        <div className="col-lg-8 col-md-10 col-sm-10">{ngoRightSide()}</div>
      </div>
    </>
  );
};

export default NgoDashboard;
