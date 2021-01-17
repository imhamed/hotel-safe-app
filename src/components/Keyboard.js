import React from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";


function Keyboard({handleNum, handleCLR, handleENT}) {
  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <td id="1" onClick={handleNum}>1</td>
            <td id="2" onClick={handleNum}>2</td>
            <td id="3" data-testid="btn-3" onClick={handleNum}>3</td>
          </tr>
          <tr>
            <td id="4" onClick={handleNum}>4</td>
            <td id="5" data-testid="btn-5" onClick={handleNum}>5</td>
            <td id="6" onClick={handleNum}>6</td>
          </tr>
          <tr>
            <td id="7" onClick={handleNum}>7</td>
            <td id="8" onClick={handleNum}>8</td>
            <td id="9" onClick={handleNum}>9</td>
          </tr>
          <tr>
            <td id="CLR" data-testid="btn-clr" onClick={handleCLR}>CLR</td>
            <td id="0" onClick={handleNum}>0</td>
            <td id="ENT" onClick={handleENT}>ENT</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

Keyboard.propTypes = {
  handleNum: PropTypes.func.isRequired,
  handleCLR: PropTypes.func.isRequired,
  handleENT: PropTypes.func.isRequired,

};

export default Keyboard;
