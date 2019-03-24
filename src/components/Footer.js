import React from "react";
import "./../App.css";
import twitter from "./../images/twitterlogo.png";
import instagram from "./../images/instagramlogo.png";
import facebook from "./../images/facebooklogo.png";

const Right = props => <div className="right">{props.children}</div>;

const Left = props => <div className="Left">{props.children}</div>;

const TweetButton = () => (
  <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fxemomo.life%2F&button_hashtag=xemono&ref_src=twsrc%5Etfw">
    <img src={twitter} alt="twitter" />
  </a>
);

const InstagramButton = () => (
  <a href="https://www.instagram.com/xemonodesign/?hl=ja">
    <img src={instagram} alt="instagram" />
  </a>
);

const Footer = props => (
  <footer className={`theme-black flex-bar layout-box`}>
    <Left>Xemono &copy; {new Date().getFullYear()}</Left>
    <Right>
      <TweetButton />
      <InstagramButton />
    </Right>
  </footer>
);

export default Footer;
