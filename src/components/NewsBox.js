import React from "react";
import "./../App.css";

const NewsBox = props => (
  <div className={`vertical-center grid`}
  style={{columnCount: props.columnNum}}>
      {props.children}
  </div>
);

export default NewsBox