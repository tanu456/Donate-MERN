import React from "react";

const Aboutcard = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-8 mt-4">
        <div className="service-section mb-3 text-center">
          <div className="sercive-icon mb-3">{props.imgsrc}</div>
          <div className="service-text mt-2">
            <h5>{props.heading}</h5>
            <p>{props.detail}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutcard;
