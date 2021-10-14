import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Sidegraph } from "./Sidegraph";
import { Maingraph } from "./Maingraph";
import { Profilecard } from "./Profilecard";
import { Profile } from "./Profile";

export const Userprofile = () => {
  return (
    <div>
      <Container fluid="true" style={{ padding: "10px" }}>
        <Row>
          <Col md="6" xl="3">
            <Profilecard/>
          </Col>
          <Col md="6" xl="5">
            <Profile/>
          </Col>
        </Row>
      </Container>

      <Container fluid="true" style={{ padding: "10px" }}>
        <Row>
          <Col md="6" xl="7">
            <Maingraph />
          </Col>
          <Col md="6" xl="5">
            <Sidegraph />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
