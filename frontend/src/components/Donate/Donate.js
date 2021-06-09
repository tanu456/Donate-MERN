import React, {useState} from "react";

import "./Donate.css";
import { CATEGORIES } from "../../assets/category.assets";

const Donate = (props) => {
  const [input, setInput] = useState({
    address: "",
    city: "",
    pincode: "",
    category: CATEGORIES[0],
    count: 0,
  });

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    const url = "http://localhost:5000/api/v1/request";
    e.preventDefault();
    
    const { address, city, pincode, category, count } = input;
    const ngoId = props.ngoId;
    const location = {
      address, city, pincode,
    };
    const items = {
      category,
      item_count: count,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        ngoId, location, items,
      })
    });
    if(res.status === 500 || !res){
      alert("Some error occurred");
    }
    else{
      alert("Request Submitted Successfully!!!");
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="form-group form-field">
        <label htmlFor="inputAddress">Your current address</label>
        <input onChange={handleInput} name="address" type="text" className="form-control" id="inputAddress" aria-describedby="addressHelp" placeholder="Address" />
        <small id="addressHelp" className="form-text text-muted">We'll never share your address with anyone else.</small>
      </div>
      <div className="form-group form-field">
        <label htmlFor="inputCity">City</label>
        <input onChange={handleInput} name="city" type="text" className="form-control" id="inputCity" placeholder="City" />
      </div>
      <div className="form-group form-field">
        <label htmlFor="inputPincode">Pincode</label>
        <input onChange={handleInput} name="pincode" type="text" className="form-control" id="inputPincode" placeholder="Pincode" />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend select-label">
          <label className="input-group-text" htmlFor="inputCategory">Category</label>
        </div>
        <select onChange={handleInput} name="category" className="custom-select" id="inputCategory">
          {CATEGORIES.map(category => {
            return (
              <option value={category.toLowerCase()} key={category.toLowerCase()}>{category}</option>
            )
          })}
        </select>
      </div>
      <div className="form-group form-field">
        <label htmlFor="inputCount">Count</label>
        <input onChange={handleInput} name="count" type="number" className="form-control" id="inputCount" placeholder="Count" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default Donate;
