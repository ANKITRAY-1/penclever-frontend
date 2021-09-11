import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Profilecard } from "./Profilecard";
import { Userinfo } from "./Userinfo";
import { Stats } from "./Stats";

export const Userprofile = () => {
  return (
    <div>
      <Container fluid="true" style={{ padding: "10px" }}>
        <Row>
          <Col md="6" xl="3">
            <Profilecard />
          </Col>

          <Col md="6"  xl="3">
          <Stats/>
          </Col>
          <Col md="6"  xl="3">
          <Userinfo/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
