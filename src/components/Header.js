import React from "react";
import "./../App.css";
import Navi from "./Navi";
import LBImage from "./LBImage";

const Right = props => <div className="right">{props.children}</div>;

const BottomLeft = props => <div className="bottom-left">{props.children}</div>;

const Header = props => (
  <header className={`theme-black layout-box flex-column`}>
    <Navi />
    <p className="text-large bold">
      使いやすくてかっこいい道具を作る
      <br />
      Design Studio Xemono
    </p>
    <BottomLeft>
      <LBImage />
    </BottomLeft>
  </header>
);

export default Header;
