import React from "react";
import "./footer.scss";

const Footer = ({ nextPage }) => {
  return (
    <div className="footer">
      <button className="button" onClick={nextPage}>
        Load More
      </button>
    </div>
  );
};

export default Footer;
