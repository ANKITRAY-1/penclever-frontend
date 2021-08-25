import React from 'react'
import p from '../img/19.png'
import p1 from '../img/15.jpg'
import p2 from '../img/25.jpg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export const Viewone = () => {
    return (

        <div>

            <Container fluid="true">
                <div style={{ padding: "10px", }}>
                    <Row>

                        <Col md={6}>
                            <div className="card">
                                <Row>
                                    <Col><div style={{ backgroundColor: "red", color: "white", width: "auto", opacity: "0.5", paddingLeft: "2px", float: "left", }}> Science  </div></Col>
                                    <Col><div style={{ backgroundColor: "white", width: "150px", opacity: "0.5", paddingLeft: "2px", float: "right", }}> october 13<sup>th</sup>,2020</div></Col>
                                </Row>
                                <br />
                                <a href="indianspacestation.html" style={{ textDecoration: "none", color: "black", }}> <img src={p} width="100%" />
                                    <center><ph ><h3 style={{ padding: "10px", }}>Indian space station:importance and challenges </h3></ph></center></a>
                                <p style={{ opacity: "0.7", fontSize: "17px", textAlign: "justify", textJustify: "inter-word", lineHeight: "1.2", }}>The Indian Space Research Organization (ISRO), which is the government body for space research and related activities in India, has seen many successful missions in recent times. Inspired by its accomplishments ISRO is planning to launch its own Space Station to the space by the end of this decade. The Gaganyaan mission which is set to take Indian astronauts to the space in the year 2022 is an important step towards the Indian Space Station.</p>

                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <Row>
                                    <Col><div style={{ backgroundColor: "red", color: "white", width: "auto", opacity: "0.5", paddingLeft: "2px", float: "left", }}>nature</div></Col>
                                    <Col>  <div style={{ backgroundColor: "white", width: "150px", opacity: "0.5", paddingLeft: "2px", float: "right", }}> November 4<sup>th</sup>,2020</div></Col><br/>
                                </Row>
                                <a href="firecrackkers.html" style={{ textDecoration: "none", color: "black", }}> <img src={p2} width="100%" />
                                    <center><p3><b>Understanding The Harmful Effects of Fireworks</b></p3></center></a>
                            </div>
                            <div className="card">
                                <Row>
                                    <Col>  <div style={{ backgroundColor: "red", color: "white", width: "auto", opacity: "0.5", paddingLeft: "2px", float: "left", }}>Technology</div></Col>
                                    <Col>  <div style={{ backgroundColor: "white", width: "150px", opacity: "0.5", paddingLeft: "2px", float: "right", }}>october 17<sup>th</sup>,2020</div></Col><br/>
                                </Row>
                                <a href="firecrackker.html" style={{ textDecoration: "none", color: "black", }}><img src={p1} width="100%" />
                                    <center><p3><b>A look into Nasa's mars 2020 preseverance rover mission.</b></p3> </center></a>
                            </div>
                        </Col>
                        <Col>3 of 3</Col>
                    </Row>
                    
                </div>
            </Container>

        </div >
    )
}
