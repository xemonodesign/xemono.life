import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

const Right = props => <div className="right">{props.children}</div>;

const Left = props => <div className="left bold">{props.children}</div>;

const Navi = props => (
  <nav className="flex-bar">
    <Left><Link to='/'>Xemono</Link></Left>
    <Right>
      <a href="#01">projects</a>
      <a href="#02">introduction</a>
      <a href="#04">member</a>
      <a href="#05">about</a>
      <a href="#06">news</a>
    </Right>
  </nav>
);

export default Navi;
