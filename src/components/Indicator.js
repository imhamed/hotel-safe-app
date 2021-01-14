import React from "react";

const Indicator = ({ unlock }) => {
  return <div className={unlock ? "green-light" : "red-light"}></div>;
};


export default Indicator;
