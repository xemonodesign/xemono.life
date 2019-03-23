import React from "react";
import ContentBox from "./components/ContentBox";
import FlexBox from "./components/FlexBox";
import Heading from "./components/Heading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./images/logoIcon.png";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentBox theme="white">
          <FlexBox>
          <div style={{flex:1 , flexBasis: '320px'}}>
            <img style={{width: '100%' }} src={logo} alt='logo' />
          </div>
          <article style={{flex:3 ,flexBasis: '320px'}}>ウェブサイトやアプリの企画・ライティング・UI/UXを含めたデザイン・フロントエンドの実装を請け負います。<br />お前のアプリを最高にしてやる。
          </article>
          </FlexBox>
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
        </div>
    );
  }
}

export default App;
