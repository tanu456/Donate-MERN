import React from "react";

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
              <button className="btn btn-primary" onClick={this.props.handler}>Donate Now</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
