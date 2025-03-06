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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#fff"
            >
              <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
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
