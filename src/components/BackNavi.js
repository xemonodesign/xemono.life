import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

const Left = props => <div className="left">{props.children}</div>;

const BackNavi = props => (
  <footer className={`theme-gray flex-bar layout-box`}>
    <Link to="/"><Left>←<br />戻る</Left></Link>
  </footer>
);

export default BackNavi;
