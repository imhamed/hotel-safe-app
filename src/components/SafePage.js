import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Indicator from "./Indicator";
import "./SafePage.css";

function SafePage() {
    
  const [pin, setPin] = useState("");

  function handleNum(e) {
    const num = pin;
    if (pin.length < 4) {
      setPin(num + e.target.id);
    }
  }

  return (
    <Container className="main-container">
      <Row>
        <Col>
          <Keyboard handleNum={handleNum} />
        </Col>
        <Col>
          <Row>
            <Display />
          </Row>
          <Row className="justify-content-center">
            <Indicator />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SafePage;
