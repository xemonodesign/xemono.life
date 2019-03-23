import React, { Component } from "react";
import logo from "./logo.svg";
import ContentBox from "./ContentBox";
import Heading from "./Heading";
import Header from "./Header";
import Footer from "./Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentBox theme="white">
          ウェブサイトやアプリの企画・ライティング・UI/UXを含めたデザイン・フロントエンドの実装を請け負います。お前のアプリを最高にしてやる。
        </ContentBox>
        <ContentBox theme="white">
          <Heading number="01">Xemonoの仕事</Heading>
        </ContentBox>
        <ContentBox theme="black">
          <Heading number="02">Xemonoができること</Heading>
        </ContentBox>
        <ContentBox theme="white">
          <Heading number="03">Xemonoに頼めること</Heading>
        </ContentBox>
        <ContentBox theme="gray">
          <Heading number="04">Xemonoと仕事する</Heading>
        </ContentBox>
        <ContentBox theme="black">
          <Heading number="05">会社概要</Heading>
        </ContentBox>
        <ContentBox theme="gray">
          <Heading number="06">最近のXemono</Heading>
        </ContentBox>
        <Footer />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
