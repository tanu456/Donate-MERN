import React from "react";
import { NavLink } from "react-router-dom";

class Card extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-4 col-md-6 col-sm-8 card-deck">
          <div class="card shadow p-1 mb-5 bg-body rounded">
            <img src={this.props.imgsrc} class="card-img-top card-image" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title"> {this.props.ngoName} </h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <NavLink
                to= {{
                  pathname:"/donate",
                  aboutProps:{
                    ngoName: this.props.ngoName
                  }
                }}
                className="btn btn-outline-success btn-get-started"
              >Donate Now</NavLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
