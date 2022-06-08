import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
      <h1>Movie App</h1>
      </Link>
        
    </div>
  );
};

export default Header;
