import React from "react";
import { Container } from "react-bootstrap";


function Keyboard() {
  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td >6</td>
          </tr>
          <tr>
            <td >7</td>
            <td >8</td>
            <td >9</td>
          </tr>
          <tr>
            <td >CLR</td>
            <td >0</td>
            <td >ENT</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}


export default Keyboard;
