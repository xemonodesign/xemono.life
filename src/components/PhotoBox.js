import React from "react";
import "./../App.css";

const PhotoBox = props => (
  <div className={`vertical-center grid`}
  style={{columnCount: props.columnNum}}>
      {props.children}
  </div>
);

export default PhotoBox;
