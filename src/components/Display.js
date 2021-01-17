import React from "react";
import PropTypes from "prop-types";

function Display({ pin }) {
  return (
    <>
      <div className="display">
        <h1 className="number-display" data-testid="pin-display">{pin}</h1>
      </div>
    </>
  );
}

Display.propTypes = {
  pin: PropTypes.string.isRequired,
};

export default Display;
