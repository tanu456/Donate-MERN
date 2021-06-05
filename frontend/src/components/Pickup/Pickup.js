import React from "react";
import Modal from "../Modal/Modal";

class Pickup extends React.Component {
  constructor (props) {
    super(props);
    this.addressElement = React.createRef();
    this.cityElement = React.createRef();
    this.pincodeElement = React.createRef();
    this.categoryElement = React.createRef();
    this.countElement = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <Modal
            title="Create New Event"
            canCancel
            canConfirm
            confirmText="Confirm"
            cancelText="Cancel"
            onCancel={this.cancelHandler}
            onConfirm={this.confirmHandler}
          >
            <form>
              <div className="form-input">
                <label htmlFor="address">address</label>
                <input type="address" id="address" ref={this.addressElement} />
              </div>
              <div className="form-input">
                <label htmlFor="city">city</label>
                <input type="city" id="city" ref={this.cityElement} />
              </div>
              <div className="form-input">
                <label htmlFor="pincode">pincode</label>
                <input type="pincode" id="pincode" ref={this.pincodeElement} />
              </div>
              <div className="form-input">
                <label htmlFor="category">category</label>
                <input type="category" id="category" ref={this.categoryElement} />
              </div>
              <div className="form-input">
                <label htmlFor="count">count</label>
                <input type="count" id="count" ref={this.countElement} />
              </div>
            </form>
          </Modal>
      </React.Fragment>
    );
  }
};

export default Pickup;
