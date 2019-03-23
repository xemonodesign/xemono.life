import React from "react";
import "./../App.css";

const Heading = props => (
  <h1 className="main-heading" id={props.number}>
    <span className="bun">
      <span className="number">{props.number}</span>
      {props.children}
    </span>
  </h1>
);

export default Heading;
