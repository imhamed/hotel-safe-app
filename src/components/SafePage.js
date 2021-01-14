import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Indicator from "./Indicator";
import { toast } from "react-toastify";
import "./SafePage.css";

function SafePage() {
  const [pin, setPin] = useState("");
  const [correctPin, setCorrectPin] = useState("");
  const [unlock, setUnlock] = useState(true);

  function handleNum(e) {
    const num = pin;
    if (pin.length < 4) {
      setPin(num + e.target.id);
    }
  }

  function handleCLR() {
    setPin("");
  }

  function handleENT() {
    if (unlock) {
      lockSafe();
    } else {
      unlockSafe();
    }
    setPin("");
  }

  function lockSafe() {
    if (pin.length === 4) {
      setCorrectPin(pin);
      setUnlock(false);
      toast.info("Safe is locked!");
    } else {
      toast.warning("PIN has to be 4 digit!");
    }
  }

  function unlockSafe() {
    if (pin.length === 4) {
      if (pin === correctPin) {
        setUnlock(true);
        toast.success("Safe is Unlock!");
      } else {
        toast.error("invalid PIN!");
      }
    } else {
      toast.warning("PIN has to be 4 digit!");
    }
  }

  return (
    <Container className="main-container">
      <Row>
        <Col>
          <Keyboard
            handleNum={handleNum}
            handleCLR={handleCLR}
            handleENT={handleENT}
          />
        </Col>
        <Col>
          <Row>
            <Display pin={pin} />
          </Row>
          <Row className="justify-content-center">
            <Indicator unlock={unlock} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SafePage;
