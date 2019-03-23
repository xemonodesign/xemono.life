import React from "react";
import "./../App.css";

const GridBox = props => (
  <div className={`vertical-center grid`}
  style={{columnCount: props.columnNum}}>
      {props.children}
  </div>
);

export default GridBox;
