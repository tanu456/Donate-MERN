import React from "react";
import Card from "./Card";
import Ngodata from "./Ngodata";
import Search from "./Search/Search";

import { INDIAN_DISTRICTS } from "../assets/districts.assets";
import { CATEGORIES } from "../assets/category.assets";
// import Pickup from "./Pickup/Pickup";
import Modal from "./Modal/Modal";
import Backdrop from "./Backdrop/Backdrop";

class Ngo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      viewForm: false,
    };

    this.formHandler = this.formHandler.bind(this);
  }

  formHandler = () => {
    this.setState({
      viewForm: true,
    });
  }

  cancelHandler = () => {
    this.setState({
      viewForm: false,
    });
  }

  confirmHandler = () => {
    this.setState({
      viewForm: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.viewForm ?
          <div>
            <Backdrop />
            <Modal
              title="Request pickup"
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
          </div>
          :
          <div className="container-fluid">
            <div className="row justify-content-center mt-5">
              <div className="col-lg-11 col-md-7 col-sm-4 cardPage">
                <h1 className="text-center">Our NGOs</h1>
              </div>
              <div className="search">
                <Search searchHeader="City" dataset={INDIAN_DISTRICTS} defaultValue="India" />
                <Search searchHeader="Category" dataset={CATEGORIES} defaultValue="All" />
              </div>
              <div className="row justify-content-around mt-4 g-lg-3">
                {Ngodata.map((value, index) => {
                  return <Card imgsrc={value.imgsrc} ngoName={value.ngoName} handler={this.formHandler} />;
                })}
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    );
  };
};

export default Ngo;
