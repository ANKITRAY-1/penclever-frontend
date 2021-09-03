import React from "react";
import p from "../img/19.png";
import p3 from "../img/13.jpg";
import p4 from "../img/14.jpg";
import p1 from "../img/15.jpg";
import p2 from "../img/25.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { HandThumbsUp } from "react-bootstrap-icons";
import { Chat } from "react-bootstrap-icons";
import { Share } from "react-bootstrap-icons";

export const Viewone = () => {
  return (
    <div>
      <Container fluid="true">
        <div style={{ padding: "10px" }}>
          <Row>
            <Col md={12} lg={6} xl={6}>
              <div className="card">
                <Row>
                  <Col>
                    <div className="catgirise"> Science </div>
                  </Col>
                  <Col>
                    <div className="date">
                      october 13<sup>th</sup>,2020
                    </div>
                  </Col>
                </Row>
                <br />
                <a
                  href="/indianspacestation"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={p} alt="img" width="100%" />
                  <center>
                    <ph>
                      <h3 style={{ padding: "10px" }}>
                        Indian space station : Importance and challenges
                      </h3>
                    </ph>
                  </center>
                </a>
                <p
                  style={{
                    opacity: "0.7",
                    fontSize: "17px",
                    textAlign: "justify",
                    textJustify: "inter-word",
                    lineHeight: "1.2",
                  }}
                >
                  The Indian Space Research Organization (ISRO), which is the
                  government body for space research and related activities in
                  India, has seen many successful missions in recent times.
                  Inspired by its accomplishments ISRO is planning to launch its
                  own Space Station to...
                </p>
                <Container>
                  <Row>
                    <Col md={6} style={{ textAlign: "left" }}>
                      <span style={{ padding: "10px" }}>
                        <HandThumbsUp
                          color="grey"
                          size={20}
                          style={{ padding: "2px " }}
                        />
                        100
                      </span>
                      <span style={{ padding: "10px" }}>
                        <Chat color="grey" size={20} /> 5
                      </span>
                      <span style={{ padding: "10px" }}>
                        <Share color="grey" size={20} /> 10
                      </span>
                    </Col>
                    <Col style={{ textAlign: "right" }}>By Aditya Ray</Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col md={6} lg={3} xl={3}>
              <div className="card">
                <Row>
                  <Col>
                    <div className="catgirise"> Nature</div>
                  </Col>
                  <Col>
                    <div className="date">
                      November 4<sup>th</sup>,2020
                    </div>
                  </Col>
                </Row>
                <br />
                <a
                  href="firecrackkers.html"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={p2} alt="img" width="100%" />
                  <center>
                    <ph>
                      <h3 style={{ padding: "10px" }}>Understanding The Harmful Effects of Fireworks</h3>
                    </ph>
                  </center>
                </a>
              </div>
              <div className="card">
                <Row>
                  <Col>
                    <div className="catgirise"> Technology </div>
                  </Col>
                  <Col>
                    <div className="date">
                      october 17<sup>th</sup>,2020
                    </div>
                  </Col>
                </Row>
                <br />
                <a
                  href="firecrackker.html"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={p1} alt="img" width="100%" />
                  <center>
                  <ph>
                      <h3 style={{ padding: "10px" }}>
                        A look into Nasa's mars 2020 preseverance rover mission.
                      </h3>
                    </ph>
                  </center>
                </a>
              </div>
            </Col>
            <Col>
              <div className="card">
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "100%",
                    opacity: "0.6",
                    paddingLeft: "2px",
                    float: "none",
                    textAlign: "center",
                    fontSize: "25px",
                  }}
                >
                  Popular
                </div>

                <div className="cardnext">
                  <a className="abadab" href=".html">
                    <img
                      src={p}
                      alt="img"
                      height="50px"
                      width="25%px"
                      align="left"
                      hspace="5px"
                    />
                    Indian space station : importance and challenges
                  </a>
                </div>
                <div className="cardnext">
                  <a className="abadab" href="#.html">
                    <img
                      src={p2}
                      alt="img"
                      height="50px"
                      width="25%"
                      align="left"
                      hspace="5px"
                    />
                    Understanding The Harmful Effects of Fireworks
                  </a>
                </div>
                <div className="cardnext">
                  <a className="abadab" href="#.html">
                    <img
                      src={p1}
                      alt="img"
                      height="50px"
                      width="25%"
                      align="left"
                      hspace="5px"
                    />
                    A look into Nasa's mars 2020 preseverance rover mission.
                  </a>
                </div>
                <div className="cardnext">
                  <a className="abadab" href="#.html">
                    <img
                      src={p3}
                      alt="img"
                      height="50px"
                      width="25%"
                      align="left"
                      hspace="5px"
                    />
                    How has forest cover in India changed since independence?
                  </a>
                </div>
                <div className="cardnext">
                  <a className="abadab" href="#.html">
                    <img
                      src={p4}
                      alt="img"
                      height="50px"
                      width="25%"
                      align="left"
                      hspace="5px"
                    />
                    How could be New Delhi's air quality improved?
                  </a>
                </div>
                <div className="cardnext">
                  <a className="abadab" href="#.html">
                    <img
                      src={p1}
                      alt="img"
                      height="50px"
                      width="25%"
                      align="left"
                      hspace="5px"
                    />
                    A look into Nasa's mars 2020 preseverance rover mission.
                  </a>
                </div>
                <div className="cardnext">
                  <a className="abadab" href="#.html">
                    <img
                      src={p3}
                      alt="img"
                      height="50px"
                      width="25%"
                      align="left"
                      hspace="5px"
                    />
                    How has forest cover in India changed since independence?
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
