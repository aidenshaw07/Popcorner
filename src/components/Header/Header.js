import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import header from "./header.png";

const Header = () => {
  const hideButton = window.location.href === "https://popcorner.netlify.app/";

  const redirectToHomePage = () => {
    window.location.href = "https://popcorner.netlify.app/";
  };

  return (
    <div className="header">
      <div className="button-container">
        {!hideButton && (
          <button className="back-button" onClick={redirectToHomePage}>
            <span>&#8678;</span>
          </button>
        )}
      </div>
      <div className="logo-container">
        <Link to="/">
          <img className="header-img" src={header} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
