import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Indicator from "./Indicator";
import { toast } from "react-toastify";

function SafePage() {
  const [pin, setPin] = useState("");
  const [correctPin, setCorrectPin] = useState("");
  const [unlock, setUnlock] = useState(true);

  function handleNum(e) {
    if (pin.length < 4) {
      setPin((prevState) => {
        return prevState + e.target.id;
      });
    }
  }

  function handleCLR() {
    setPin((prevState) => {
      return "";
    });
  }

  function handleENT() {
    if (unlock) {
      lockSafe();
    } else {
      unlockSafe();
    }
    setPin((prevState) => {
      return "";
    });
  }

  function lockSafe() {
    if (pin.length === 4) {
      setCorrectPin(pin);
      setUnlock(false);
      toast.info("Safe is locked!");
    } else {
      toast.warning("PIN has to be 4 digit! Try again!");
    }
  }

  function unlockSafe() {
    if (pin.length === 4) {
      if (pin === correctPin) {
        setUnlock(true);
        toast.success("Safe is Unlocked!");
      } else {
        toast.error("invalid PIN! Try again!");
      }
    } else {
      toast.warning("PIN has to be 4 digit! Try again!");
    }
  }

  return (
    <Container className="safe-container">
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
