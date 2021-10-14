import React from "react";
import P19 from "../img/19.png";
import { Facebook, Linkedin, Twitter, Youtube } from "react-bootstrap-icons";

export const Profilecard = () => {
  return (
    <div>
      <div className="card2">
        <center>
          {" "}
          <a href="/userprofile">
            <img src={P19} alt="img" width="100%" />
          </a>
        </center>
        <h3>Aditya Ray</h3>I write on topics that affect me. I Follow Science,
        Technology & Nature related activities.
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
    </div>
  );
};
