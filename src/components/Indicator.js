import React from "react";
import PropTypes from "prop-types";

const Indicator = ({ unlock }) => {
  return <div data-testid="indicator" className={unlock ? "green-light" : "red-light"}></div>;
};

Indicator.propTypes = {
  unlock: PropTypes.bool.isRequired,
};

export default Indicator;
