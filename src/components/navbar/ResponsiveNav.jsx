
import React from "react";
import { navbarData } from "./data";

const ResponsiveList = ({isOpen}) => {

  return (
    <div className= {`slide-menu ${isOpen ? "open" : ""}`}>
      <div className="nav-link-container">
        {navbarData.map((item, index) => (
          <div className="nav-link" key={index} id={index}>
            {item.label}
          </div>
        ))}
      </div>
      <div className="slide-nav-button">
        <a href="" className="free-trial free-trial-btn">
          Start free 14-day trial
        </a>
        <a href="" className="schedule product-tour-btn">
          Schedule demo
        </a>
      </div>
    </div>
  );
};

export default ResponsiveList;
