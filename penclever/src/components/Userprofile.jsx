import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import P19 from "../img/19.png";
import { Facebook, Linkedin, Twitter, Youtube } from "react-bootstrap-icons";

export const Userprofile = () => {
  return (
    <div>
      <Container fluid="true" style={{ padding: "10px" }}>
        <Row>
          <Col xl="3">
            <div className="card">
              <center>
                {" "}
                <img src={P19} alt="img" width="100%" />
              </center>
              <h3>Aditya Ray</h3>
              <p>
                I write on topics that affect me. I Follow Science, Technology &
                Nature related activities.
              </p>
              <center>
                <a href="/" className="icon">
                  <Facebook size={30} />
                </a>
                <a href="/" className="icon">
                  <Linkedin color="#2564b3" size={30} />
                </a>
                <a href="/" className="icon">
                  <Twitter size={30} />
                </a>
                <a href="/" className="icon">
                  <Youtube color="red" size={30} />
                </a>
              </center>
              <hr style={{ opacity: "0.7" }} />
              <button id="myBtn">Follow</button>
            </div>
          </Col>
          <Col xl="9">
            <div className="card" style={{ textAlign: "left" }}>
              <Container>
                <Row>
                  <Col xl="5">
                    <div className="card" style={{ textAlign: "left" }}>
                      <ph>
                        <p>
                          <b>Name</b> Adtiya Ray
                        </p>
                        <p>
                          <b>Email</b> aditya90005@gmail.com
                        </p>
                        <p>
                          <b>Country</b> India
                        </p>
                        <p>
                          <b>State</b> Chhattisgarh
                        </p>
                        <p>
                          <b>City</b> Bhilai
                        </p>
                        <p>
                          <b>Profestion</b> Student
                        </p>
                      </ph>
                    </div>
                  </Col>
                </Row>
              </Container>
              <hr style={{ opacity: "0.7" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
