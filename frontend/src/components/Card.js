import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-8 card-deck ">
        <div class="card shadow p-1 mb-5 bg-body rounded">
          <img src={props.imgsrc} class="card-img-top card-image" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title"> {props.ngoName} </h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/" class="btn btn-block btn-outline-dark">
              Donate Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
