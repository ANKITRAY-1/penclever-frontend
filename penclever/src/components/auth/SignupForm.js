import React from "react";
import PropTypes from "prop-types";

class SignupForm extends React.Component {
  state = {
    username: "",
    name: "",
    password: "",
    email: "",
  };

  handle_change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div>
        <div className="login-box">
          <h2>Signup</h2>
          <form onSubmit={(e) => this.props.handle_signup(e, this.state)}>
            <div className="user-box">
              <input
                type="text"
                id="inputUserame"
                className="form-control"
                required
                autofocus
                name="username"
                value={this.state.username}
                onChange={this.handle_change}
              />
              <label>Username</label>
            </div>

            <div className="user-box">
              <input
                type=""
                id="inputEmail"
                className="form-control"
                required
                autofocus
                name="email"
                value={this.state.email}
                onChange={this.handle_change}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="name"
                className="form-control"
                required
                autofocus
                name="name"
                value={this.state.name}
                onChange={this.handle_change}
              />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                required
                autofocus
                name="password"
                value={this.state.password}
                onChange={this.handle_change}
              />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                id="inputconfirmpassword"
                className="form-control"
                required
                autofocus
                name="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.handle_change}
              />
              <label>Confirm Password</label>
            </div>
            <button
              type="submit"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
          <span
            className="d-block text-center mt-2 small"
            onClick={(e) => this.props.display_form("login")}
          >
            Alredly have an account? Login
          </span>
        </div>
        {/* <div className="signinwrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card card-signin flex-row my-5">
                  <div className="card-img-left d-none d-md-flex"></div>
                  <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    <form
                      onSubmit={(e) => this.props.handle_signup(e, this.state)}
                    >
                      <div className="form-label-group">
                        <input
                          type="text"
                          id="inputUserame"
                          className="form-control"
                          placeholder="Username"
                          required
                          autofocus
                          name="username"
                          value={this.state.username}
                          onChange={this.handle_change}
                        />
                        <label htmlFor="username" for="inputUserame">
                          Username
                        </label>
                      </div>

                      <div className="form-label-group">
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                          autofocus
                          name="email"
                          value={this.state.email}
                          onChange={this.handle_change}
                        />
                        <label htmlFor="email" for="inputEmail">
                          Email address
                        </label>
                      </div>

                      <hr />

                      <div className="form-label-group">
                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password"
                          required
                          name="password"
                          value={this.state.password}
                          onChange={this.handle_change}
                        />
                        <label htmlFor="password" for="inputPassword">
                          Password
                        </label>
                      </div>

                      <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="submit"
                      >
                        register
                      </button>
                      <button
                        className="d-block text-center mt-2 small"
                        onClick={(e) => this.props.display_form("login")}
                      >
                        login
                      </button>
                      <hr className="my-4" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired,
};
