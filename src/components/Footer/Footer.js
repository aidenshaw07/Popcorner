import React from "react";
import "./footer.scss";

const Footer = (props) => {
  return (
    <div className="footer">
      <button className="button" onClick={props.nextPage}>
        Load More
      </button>
    </div>
  );
};

export default Footer;
