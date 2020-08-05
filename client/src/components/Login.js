import React, { Component } from "react";
import { Link } from "react-router-dom";
import riotLogo from "../images/riot-games-logo.png";

class Login extends Component {
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
              <legend>Login</legend>
            </p>

            <input
              name="email"
              className="register__input"
              placeholder="Username"
              type="text"
            />

            <input
              name="password"
              className="register__input"
              placeholder="Password"
              type="password"
            />

            <p>
              <input
                name="subscribe"
                className="register__checkbox"
                type="checkbox"
                value="subscribe"
              />
              <label className="register__checkbox-label" htmlFor="subscribe">
                Stay signed in
              </label>
            </p>

            <button type="submit" className="register__submit">
              <i className="fas fa-arrow-right"></i>
            </button>
            <Link to="/">
              <label className="register__label" htmlFor="subscribe">
                CANT' SIGN IN?
              </label>
            </Link>
            <Link to="/register">
              <label className="register__label" htmlFor="subscribe">
                CREATE ACCOUNT
              </label>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
