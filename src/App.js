import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Me from "./components/me/me";
import Info from "./components/info/info";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Container>
        <Row align="center">
          <Col sm={4}>
            <Me></Me>
          </Col>
          <Col sm={8} align="left">
            <Info name="Ib Quezada"></Info>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
