import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

const Right = props => <div className="right">{props.children}</div>;

const Left = props => <div className="left bold">{props.children}</div>;

const Navi = props => (
  <nav className="flex-bar">
    <Left><Link to='/'>Xemono</Link></Left>

  </nav>
);

export default Navi;
