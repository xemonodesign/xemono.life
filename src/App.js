import React from "react";
import ContentBox from "./components/ContentBox";
import FlexBox from "./components/FlexBox";
import PhotoBox from "./components/PhotoBox";
import RoundBox from "./components/RoundBox";
import NewsBox from "./components/NewsBox";


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
            <div style={{ flex: 1, flexBasis: "320px" }}>
              <img style={{ width: "100%" }} src={logo} alt="logo" />
            </div>
            <article style={{ flex: 3, flexBasis: "320px" }}>
              ウェブサイトやアプリの企画・ライティング・UI/UXを含めたデザイン・フロントエンドの実装を請け負います。
              <br />
              お前のアプリを最高にしてやる。
            </article>
          </FlexBox>
          <h2>news</h2>
          <ul className="news">
            <li>
              <span className="date bold">2019.4.1</span>
              <span className="title">会社が生えました</span>
            </li>
          </ul>
        </ContentBox>
        <ContentBox theme="white">
          <Heading number="01">Xemonoの仕事</Heading>
          <p>見た目がかっこいいけど伝わらなくてテプラを貼りたくなっちゃうデザインと、<br />
        見た目は普通だけど嫌でも伝わるデザイン、どっちが欲しいですか。<br />

        かっこよくて伝わるデザインが最強ですよね。くせものたちが目指すのはそっちです。</p>
        <div className="gray-box">Coming soon</div>
        </ContentBox>
        <ContentBox theme="black">
          <Heading number="02">Xemonoができること</Heading>
          <PhotoBox 
            img='blank'
            title='Design'
            body='くせものたちが話を聞きに来るぞ'
           />
          <PhotoBox 
            img='blank'
            title='Design'
            body='くせものたちが話を聞きに来るぞ'
           />
          <PhotoBox 
            img='blank'
            title='Design'
            body='くせものたちが話を聞きに来るぞ'
           />
        </ContentBox>
        <ContentBox theme="white">
          <Heading number="03">Xemonoに頼めること</Heading>
          <RoundBox 
            img='blank'
            title='コンサルティング'
            body='デザインのかかりつけ医になります'
           />
          <RoundBox 
            img='blank'
            title='コンサルティング'
            body='デザインのかかりつけ医になります'
           />
          <RoundBox 
            img='blank'
            title='コンサルティング'
            body='デザインのかかりつけ医になります'
           />
        </ContentBox>
        <ContentBox theme="gray">
          <Heading number="04">Xemonoと仕事する</Heading>
          <div></div>
          <div>
            <h2>代表　鳥居萌</h2>
            <p>1991年生。デザイナー、歌人。話し相手が欲しくてbotを自作したことがある。東京大学理科一類に入学、文学部宗教学宗教史学卒業。大学では「人間が狂気に陥ることを回避しながら安全にものを考えるため、必要な前提とは何か？」ということを考えていた。新卒では株式会社花まるラボで幼児向けパズルアプリ「Think! Think!」（Google Play「ベスト オブ 2017」アプリ ファミリー部門入賞）のデザイナーとして、複雑そうに見えるパズルを子どもたちにわかりやすく、また親しみやすい感じにする仕事をしていた。ウェブメディア「電ファミニコゲーマー」で編集アシスタントとして記事を作りながら、インターネットでの文章の見せ方を身に着けたりもした。その後はフリーでUXデザイナーをして「シンプルだけどテプラを貼られないデザイン」を研究しつつ、2019年に株式会社Xemonoを立ち上げる。性格はとてもいい。          
            <br />http://megumitorii.tk</p>
          </div>
        </ContentBox>
        <ContentBox theme="black">
          <Heading number="05">会社概要</Heading>
          <div>
            株式会社 Xemono 
            かぶしきがいしゃ くせもの

            設立：2019年4月1日
            代表取締役：鳥居 萌
　　　　　　  とりいめぐみ
          </div>
          <div>
            Contact：
            東京都八王子市別所1-41-1-6-2201
            contact@xemono.life
            080-6586-2216
          </div>
        </ContentBox>
        <ContentBox theme="gray">
          <Heading number="06">最近のXemono</Heading>
          <NewsBox />
        </ContentBox>
        <Footer />
      </div>
    );
  }
}

export default App;
