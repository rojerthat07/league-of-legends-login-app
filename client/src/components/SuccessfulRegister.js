import React from "react";
import { Link } from "react-router-dom";

const SuccessfulRegister = () => {
  return (
    <div className="successful-register">
      <div className="successful-register__message">
        Registration Complete you can now
        <span>
          <Link
            to="/login"
            style={{ color: "#F4DE93", margin: ".3em", textDecoration: "none" }}
          >
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SuccessfulRegister;
