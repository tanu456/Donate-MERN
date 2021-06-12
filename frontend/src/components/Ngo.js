import React, { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search/Search";

import { INDIAN_DISTRICTS } from "../assets/districts.assets";
import { CATEGORIES } from "../assets/category.assets";

// import getAllNgos from '../api/ngo-api';
import { getAllNgos } from "../api/ngo-api";
function Ngo() {
  const [Ngos, setNgos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* run once when page loads */
  useEffect(() => {
    setIsLoading(true);
    getAllNgos()
      .then((data) => {
        setNgos(data.ngos);
      })
      .catch((err) => {
        alert(err.message);
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    /*  replace with loading componenet */
    return <p>Loading...</p>;
  } else {
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
              {Ngos
                ? Ngos.map((value, index) => {
                    return (
                      <Card
                        key={index}
                        imgsrc={value.imgsrc}
                        ngoName={value.ngoName}
                      />
                    );
                  })
                : "Ngo Not found"}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Ngo;
