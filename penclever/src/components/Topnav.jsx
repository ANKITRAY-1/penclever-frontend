import React from "react";
import { XCircle,List } from "react-bootstrap-icons";
import logo from "../img/logo1.png";

export const Topnav = () => {
  window.addEventListener("load", function () {
    document.getElementsByClassName("closenav")[0].style.display = "none";
});
  function Topnav(e) {
    e.preventDefault();
    var x = document.getElementById("myTopnavx");
    if (x.className === "topnavx") {
      document.getElementsByClassName("topnavx")[0].style.right = "0";
      document.getElementsByClassName("closenav")[0].style.zIndex = "101";
      document.getElementsByClassName("closenav")[0].style.display = "block";
    }
  }
  function Topnavclose(e) {
    e.preventDefault();
    var x = document.getElementById("myTopnavx");
    if (x.className === "topnavx") {
      x.className = "topnavx";
      document.getElementsByClassName("topnavx")[0].style.right = "-80%";
      document.getElementsByClassName("closenav")[0].style.display = "none";
    }
  }
  return (
    <div>
      <div className="header">
        <img
          src={logo}
          alt="logo"
          style={{ width: "300px", height: "60px", padding: "0px" }}
        />
        <a href="javascriptvoid(0)" className="iconnav" onClick={Topnav}>
          <List size={30} />
        </a>
        <a href="javascriptvoid(0)" className="closenav" onClick={Topnavclose}>
          <XCircle size={30} />
        </a>
        <div className="headerright">
          <a href="/signin">Contribute a article today!</a>
        </div>

        <div className="topnavx" id="myTopnavx">
          <a href="/">Home</a>
          <a href="/scince">SCIENCE</a>
          <a href="/technology">TECHNOLOGY</a>
          <a href="/nature">NATURE</a>
          <a href="/people">PEOPLE</a>
          <a href="/history">HISTORY</a>
          <a href="/defence">DEFENCE</a>
          <a href="/politics">POLITICS</a>
          <a href="/sports">SPORTS</a>

          <div className="dropdownx">
            <button className="dropbtnx">MORE</button>
            <div className="dropdownx-contentx">
              <a href="/Miscellaneous.html">MORE</a>
              <a href="/userprofile">Profile</a>
              <a href="/signin">Signin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};