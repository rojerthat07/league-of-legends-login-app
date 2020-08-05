import React, { Component } from "react";
import lolLogo from "../images/lol-logo.png";
import riotLogo from "../images/riot-games-logo.png";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="register__brand-logo">
          <img src={riotLogo} alt="riot-logo" />
        </div>
        <div className="register">
          <form
            method="get"
            action="/successfulregistration"
            className="register__form"
          >
            <p>
              {" "}
              <legend>Create Account:</legend>
              <img src={lolLogo} alt="lol-logo" />
            </p>

            <input
              name="username"
              className="register__input"
              placeholder="Username"
              type="text"
              required
            />

            <input
              name="email"
              className="register__input"
              placeholder="Email"
              type="text"
              required
            />

            <input
              name="password"
              className="register__input"
              placeholder="Password"
              type="password"
              required
            />

            <input
              name="confirm-password"
              className="register__input"
              placeholder="Confirm Password"
              type="password"
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
