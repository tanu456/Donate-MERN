import React from "react";

import "./Donate.css";
import { CATEGORIES } from "../../assets/category.assets";

const Donate = () => {
  return (
    <form>
      <div className="form-group form-field">
        <label for="inputAddress">Your current address</label>
        <input type="text" class="form-control" id="inputAddress" aria-describedby="addressHelp" placeholder="Address" />
        <small id="addressHelp" class="form-text text-muted">We'll never share your address with anyone else.</small>
      </div>
      <div class="form-group form-field">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity" placeholder="City" />
      </div>
      <div class="form-group form-field">
        <label for="inputPincode">Pincode</label>
        <input type="text" class="form-control" id="inputPincode" placeholder="Pincode" />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend select-label">
          <label class="input-group-text" for="inputCategory">Category</label>
        </div>
        <select class="custom-select" id="inputCategory">
          {CATEGORIES.map(category => {
            return (
              <option value={category.toLowerCase()}>{category}</option>
            )
          })}
        </select>
      </div>
      <div class="form-group form-field">
        <label for="inputCount">Count</label>
        <input type="number" class="form-control" id="inputCount" placeholder="Count" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
};

export default Donate;
