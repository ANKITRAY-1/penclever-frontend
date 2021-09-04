import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import axios from "axios";
//import Nav from "./Nav";

export class Combine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: "",
      logged_in: localStorage.getItem("token") ? true : false,
      username: "",
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      const url = "http://localhost:8000/core/current_user/";
      let JWTToken = localStorage.getItem("token");
      axios
        .get(url, { headers: { Authorization: `Bearer ${JWTToken}` } })
        .then((res) => {
          this.setState({ username: localStorage.getItem("username") });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    const url = "http://localhost:8000/token-auth/";
    const payload = data;
    axios
      .post(url, payload)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("logged_in", true);
        // alert(localStorage.setItem("logged_in"));
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: data.username,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Username or password incorrect!");
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    const url = "http://localhost:8000/core/users/";
    const payload = data;
    axios
      .post(url, payload)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", data.token);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: data.username,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Username already taken!");
      });
  };

  handle_logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.setItem("logged_in", false);
    this.setState({ logged_in: false, username: "" });
  };

  display_form = (form) => {
    this.setState({
      displayed_form: form,
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case "login":
        form = (
          <LoginForm
            handle_login={this.handle_login}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
          />
        );
        break;
      case "signup":
        form = (
          <SignupForm
            handle_signup={this.handle_signup}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
          />
        );
        break;
      default:
        form = (
          <SignupForm
            handle_signup={this.handle_signup}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
          />
        );
    }
    return (
      <div className="App" style={{ backgroundColor: "white" }}>
        {form}
      </div>
    );
  }
}

export default Combine;
