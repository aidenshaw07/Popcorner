import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import header from "./header.png";


const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header" src={header} alt="logo" />
      </Link>
        
    </div>
  );
};

export default Header;
