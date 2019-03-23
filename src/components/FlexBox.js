import React from "react";
import "./../App.css";

const FlexBox = props => (
  <div className={`vertical-center flex-row`}>
      {props.children}
  </div>
);

export default FlexBox;
