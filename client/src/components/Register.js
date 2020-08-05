import React, { Component } from "react";
import lolLogo from "../images/lol-logo.png";
import riotLogo from "../images/riot-games-logo.png";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="register__brand-logo">
          <img src={riotLogo} alt="riot-logo" />
        </div>
        <div className="register">
          <form method="post" className="register__form">
            <p>
              {" "}
              <legend>Create Account:</legend>
              <img src={lolLogo} alt="lol-logo" />
            </p>

            <input
              name="username"
              value={this.state.username}
              className="register__input"
              placeholder="Username"
              type="text"
              onChange={this.changeHandler}
              required
            />

            <input
              name="email"
              value={this.state.email}
              className="register__input"
              placeholder="Email"
              type="text"
              onChange={this.changeHandler}
              required
            />

            <input
              name="password"
              value={this.state.password}
              className="register__input"
              placeholder="Password"
              type="password"
              onChange={this.changeHandler}
              required
            />

            <input
              name="confirmPassword"
              value={this.state.confirmPassword}
              className="register__input"
              placeholder="Confirm Password"
              type="password"
              onChange={this.changeHandler}
              required
            />

            <p>
              <input
                name="subscribe"
                className="register__checkbox"
                type="checkbox"
                value="subscribe"
              />
              <label className="register__label" htmlFor="subscribe">
                Subscribe for newsletter
              </label>
            </p>

            <button type="submit" className="register__submit">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
