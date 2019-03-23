import React from "react";
import "./../App.css";

const RoundBox = props => (
  <div className={`vertical-center grid`}
  style={{columnCount: props.columnNum}}>
      {props.children}
  </div>
);

export default RoundBox