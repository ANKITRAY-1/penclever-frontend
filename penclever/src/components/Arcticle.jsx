import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import P19 from "../img/19.png";
import P20 from "../img/20.jpg";
import P21 from "../img/21.jpg";
import P22 from "../img/22.jpg";
import { Profilecard } from "./Profilecard";

export const Arcticle = () => {
  return (
    <div>
      <Container fluid="true">
        <div style={{ padding: "10px" }}>
          <Row>
            <Col xl="3" md="12">
              <Profilecard />
            </Col>
            <Col xl="7">
              <div
                className="card"
                style={{ boxShadow: "none", border: "none" }}
              >
                <Row>
                  <Col>
                    <div className="catgirise"> Science </div>
                  </Col>
                  <Col>
                    <div className="date">
                      {" "}
                      october 13<sup>th</sup>,2020
                    </div>
                  </Col>
                </Row>
                <p className="arcticlename">
                  <b>Indian Space Station : Importance and Challenges</b>
                </p>
                <hr style={{ color: "red" }} />
                <br />
                <center>
                  {" "}
                  <img src={P19} alt="img" width="100%" />
                </center>
                <br />
                <ul className="li">
                  <li>
                    <p>
                      The Indian Space Station is an artificial satellite
                      planned by Indian space Research Organization (ISRO) for
                      its manned operations.
                    </p>
                  </li>
                  <li>
                    <p>It will be used to conduct Microgravity experiments.</p>
                  </li>
                  <li>
                    <p>
                      It will be a small space station of approximately 20 ton
                      weight.
                    </p>
                  </li>
                </ul>
                <div className="parastyle">
                  <p>
                    The Indian Space Research Organization (ISRO), which is the
                    government body for space research and related activities in
                    India, has seen many successful missions in recent times.
                    Inspired by its accomplishments ISRO is planning to launch
                    its own Space Station to the space by the end of this
                    decade. The Gaganyaan mission which is set to take Indian
                    astronauts to the space in the year 2022 is an important
                    step towards the Indian Space Station. ISRO believes that it
                    has ability to develop all the technologies needed for the
                    mission without foreign help, if it is provided with the
                    necessary funding.{" "}
                  </p>
                  <p className="headstyle">What is a Space Station? </p>
                  <p>
                    Space station, also known as orbital station is a spacecraft
                    capable of supporting a human crew in the orbit for extended
                    periods of time. It doesn’t have landing or propulsion
                    systems. It does have a docking station to dock other
                    spacecraft for exchange of crew and supplies. The reasons
                    for maintaining a orbital station are many and depend on the
                    aim of program. Usually they are used for scientific
                    purpose, but they had also been used for military purposes.
                    As in a orbital space station there is no gravity it is used
                    to conduct microgravity experiments. The effect of long-term
                    spaceflights can be understood by such space stations.
                  </p>
                  <p>
                    Currently the only active space station in earth’s orbit is
                    the International Space Station (ISS), which is a joint
                    program between five different space agencies namely NASA
                    (United States), ROSCOSMOS (Russia), CSA (Canada), JAXA
                    (Japan) and ESA (Europe). It was launched in the year 1998.
                    It is situated in the low earth orbit at a height of 400 Km
                    from earth. By this time only two countries, United States
                    and Russia have individually assembled there space station
                    in the space. China is ready to launch its own orbit station
                    in 2020,and thus set to become third country in the world to
                    touch this feet.
                  </p>
                  <center>
                    <figure>
                      {" "}
                      <img src={P20} alt="img" width="100%" />
                      <figcaption>The International Space Station</figcaption>
                    </figure>
                  </center>
                  <p className="headstyle">The Indian Space Station</p>
                  <p>
                    The Indian Space Station would be similar to the ISS, but
                    will be smaller in size. It is proposed to be of 20 ton
                    weight, for comparison the ISS weigh’s 400 ton. It will be
                    stationed in low earth orbit at a height of 400 Km from
                    earth’s surface and will be certainly used to conduct
                    microgravity experiments. It will designed to accommodate
                    three astronauts for 15-20 days in the space. Very limited
                    details about it are in public domain and more details are
                    expected to be released after the success of Gaganyaan
                    mission. The success of Gaganyaan mission is very crucial
                    for the Indian Space Station as ISRO needs to develop human
                    spaceflight technology to carry the astronauts and supplies
                    back & forth to the station.
                  </p>
                  <p>
                    Since making a space station is a very complex task and it
                    needs to develop various state of the art technologies, it
                    is expected to take at least 5-7 years in development and
                    more years in testing. According to ISRO, they will not
                    collaborate with any other space agency for this mission.
                    Also knowing the budget constraints and funding delays it
                    will be very optimistic to think the mission to be completed
                    in the given time frame. So at least a span of 10 years
                    could be expected to make this dream a reality.{" "}
                  </p>
                  <center>
                    <figure>
                      {" "}
                      <img src={P21} alt="img" width="100%" />
                      <figcaption>An astronaut in the ISS</figcaption>
                    </figure>
                  </center>
                  <p className="headstyle">Does India need it?</p>
                  <p>
                    Although we can expect many direct and indirect benefits
                    from this mission, many people are also criticizing the
                    project for various reasons. Let us see what are the
                    criticism and supporting points about this mission.
                  </p>
                  <p>
                    <b>Criticism-</b> Many people argue that such expensive
                    projects cannot be sustained by a developing country like
                    India where a quarter of population is below poverty line.
                    They see the proposal of this mission as tool for political
                    gain by the ruling party of India. Such claims do have some
                    ground on the basic of the cost which we will discuss
                    further in the article.{" "}
                  </p>
                  <p>
                    <b>Supporting points-</b>People in the support of the
                    mission believes that this will bring technological
                    advancements to the country and will impart a sense of
                    interest in the field of science in the young people of
                    India and drive them towards education. This will have a
                    major indirect effect on the economy which will be much more
                    than the direct cost of the mission.{" "}
                  </p>
                  <p className="headstyle">Challenges</p>
                  <p>
                    It is uncertain that would government give such massive
                    capital to ISRO. NASA alone spends Rs 20,000 crore yearly on
                    the ISS and had spend more than Rs 6,50,000 crore on
                    assembling it. Although the Indian Space Station will be
                    very smaller than the ISS, still the cost of the mission
                    will be significant. Finances of such magnitude are
                    difficult for the Indian Space Station. Another challenge
                    which will be faced by ISRO will be to upgrade its launch
                    vehicles for such tasks beside many other technological
                    challenges.
                  </p>
                  <center>
                    <figure>
                      {" "}
                      <img src={P22} alt="img" width="100%" />
                      <figcaption>GSLV launch vehicle</figcaption>
                    </figure>
                  </center>
                  <p className="headstyle">Benifits</p>
                  <p>
                    Working such a complex mission will not only provide us the
                    benefit which other space stations have but will also give
                    us many essential technologies as byproducts. This will also
                    help us to improve our satellite launching capability which
                    will be commercially very important. Success of this mission
                    will also drive the country towards science and education
                    which will have very positive effect on not only nation’s
                    economy but also in the social culture of the country.
                  </p>
                  <p style={{ color: "red" }}>
                    {" "}
                    To conclude, India was not allowed to be part of the ISS at
                    time of its assembly due to nation’s nuclear policy. Though
                    India has a option to join the ISS program now, it will not
                    be any significance to us as the ISS could soon be retired.
                    This mission will be a matter of proud for every Indian and
                    it will hopefully be a successful investment and help the
                    nation in multiple ways. It will also provide our Scientific
                    Community a wide range of topics for research. Only time can
                    tell how this dream can turn into a reality.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
