import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Indicator from "./Indicator";
import "./SafePage.css";


function SafePage() {
  return (
<Container className="main-container">
      <Row>
        <Col>
          <Keyboard
          />
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
