import React from "react";
import { XCircle,List, Search } from "react-bootstrap-icons";
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
          <List size={30} color="red" />
        </a>
        <a href="javascriptvoid(0)" className="closenav" onClick={Topnavclose}>
          <XCircle size={30} color="blue" />
        </a>
        <div className="headerright">
          <a href="/"> <Search/><input type="text" name="search" placeholder="Search.." style={{border:"none"}} /></a>
          <a href="/signin">Signin</a>
          <a href="/">Home</a>
        </div>

        <div className="topnavx" id="myTopnavx">
        <div className="search">
          <p style={{padding:"10px 16px", fontSize:"20px"}}>Quick Links</p>
          <a href="/">Home</a>
          <a href="/signin">Signin</a>
          <p style={{padding:"10px 16px", fontSize:"20px"}}>Quick Links</p>
        </div>
          <a href="/scince">SCIENCE</a>
          <a href="/technology">TECHNOLOGY</a>
          <a href="/nature">NATURE</a>
          <a href="/people">PEOPLE</a>
          <a href="/history">HISTORY</a>
          <a href="/defence">DEFENCE</a>
          <a href="/politics">POLITICS</a>
          <a href="/sports">SPORTS</a>
          <a href="/miscellaneous">MISCELLANEOUS</a>

          <div className="dropdownx">
            <button className="dropbtnx">MORE</button>
            <div className="dropdownx-contentx">
              <a href="/userprofile">Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};