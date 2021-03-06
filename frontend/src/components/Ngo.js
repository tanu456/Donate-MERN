import React from "react";
import Card from "./Card";
import Ngodata from "./Ngodata";
import Search from "./Search/Search";

import { INDIAN_DISTRICTS } from "../assets/districts.assets";
import { CATEGORIES } from "../assets/category.assets";

function Ngo() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-11 col-md-7 col-sm-4 cardPage">
            <h1 className="text-center">Our NGOs</h1>
          </div>
          <div className="search">
            <Search
              searchHeader="City"
              dataset={INDIAN_DISTRICTS}
              defaultValue="India"
            />
            <Search
              searchHeader="Category"
              dataset={CATEGORIES}
              defaultValue="All"
            />
          </div>
          <div className="row justify-content-around mt-4 g-lg-3">
            {Ngodata.map((value, index) => {
              return (
                <Card
                  key={index}
                  imgsrc={value.imgsrc}
                  ngoName={value.ngoName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ngo;
