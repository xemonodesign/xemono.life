import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Navi from "./components/Navi";
import ContentBox from "./components/ContentBox";
import FlexBox from "./components/FlexBox";
import PhotoBox from "./components/PhotoBox";
import RoundBox from "./components/RoundBox";
import NewsBox from "./components/NewsBox";

import Heading from "./components/Heading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./images/logoIcon.png";

import News, { NewsList, NewsBoxes } from "./News";
import Skills from "./Skills";

import Icon1 from "./images/xemono_icon_1.png";
import Icon2 from "./images/xemono_icon_2.png";
import Icon3 from "./images/xemono_icon_3.png";
import Icon4 from "./images/xemono_icon_4.png";
import Icon5 from "./images/xemono_icon_5.png";
import Icon6 from "./images/xemono_icon_6.png";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/news/:id" component={News} />
      <Route path="/skills/:id" component={Skills} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

const Home = () => (
  <div className="App">
    <Header />
    <ContentBox theme="white">
      <FlexBox>
        <div style={{ flex: 1, flexBasis: "280px" }}>
          <img style={{ width: "100%" }} src={logo} alt="logo" />
        </div>
        <article style={{ flex: 3, flexBasis: "320px" }}>
          <span className="bold">請負：</span>
          <br />
          ウェブサイトやアプリの企画、
          <br />
          ライティング、
          <br />
          UI/UXを含めたデザイン、
          <br />
          フロントエンドの実装。
          <br />
          お前のアプリを最高にしてやる。
        </article>
      </FlexBox>
      <NewsList />
    </ContentBox>
    <ContentBox theme="white">
      <Heading number="01">Xemonoの仕事</Heading>
      <p style={{ textAlign: "left" }}>
        見た目がかっこいいけど伝わらなくてテプラを貼りたくなっちゃうデザインと、
        <br />
        見た目は普通だけど嫌でも伝わるデザイン、どっちが欲しいですか。
        <br />
        かっこよくて伝わるデザインが最強ですよね。くせものたちが目指すのはそっちです。
      </p>
      <div className="gray-box">Coming soon</div>
    </ContentBox>
    <ContentBox theme="black">
      <Heading number="02">Xemonoができること</Heading>
      <PhotoBox
        img={Icon1}
        title="Design"
        body="くせものたちが話を聞きに来るぞ"
      />
      <PhotoBox img={Icon2} title="Coding" body="絵に描いた餅を本物の餅に" />
      <PhotoBox
        img={Icon3}
        title="Writing"
        body="伝えたいことを、伝わる文章に"
      />
    </ContentBox>
    <ContentBox theme="white">
      <Heading number="03">Xemonoに頼めること</Heading>
      <FlexBox>
        <RoundBox
          img={Icon4}
          title="コンサルティング"
          body="デザインのかかりつけ医"
        />
        <RoundBox
          img={Icon5}
          title="新規案件"
          body="UXデザイナーと企画を立てる"
        />
        <RoundBox
          img={Icon6}
          title="既存案件"
          body="ユーザーの気持ちを考える"
        />
      </FlexBox>
    </ContentBox>
    <ContentBox theme="gray">
      <Heading number="04">Xemonoと仕事する</Heading>
      <FlexBox>
        <div style={{ flex: "1 0 320px" }} className="gray-box">
          アー写が入る
        </div>
        <div style={{ flex: 1 }}>
          <h2 className="text-large text-black">代表　とりいめぐみ</h2>
          <p style={{ textAlign: "left" }}>
            1991年生。デザイナー、歌人。話し相手が欲しくてbotを自作したことがある。東京大学理科一類に入学、文学部宗教学宗教史学卒業。大学では「人間が狂気に陥ることを回避しながら安全にものを考えるため、必要な前提とは何か？」ということを考えていた。新卒では株式会社花まるラボで幼児向けパズルアプリ「Think!
            Think!」（Google Play「ベスト オブ 2017」アプリ
            ファミリー部門入賞）のデザイナーとして、複雑そうに見えるパズルを子どもたちにわかりやすく、また親しみやすい感じにする仕事をしていた。ウェブメディア「電ファミニコゲーマー」で編集アシスタントとして記事を作りながら、インターネットでの文章の見せ方を身に着けたりもした。その後はフリーでUXデザイナーをして「シンプルだけどテプラを貼られないデザイン」を研究しつつ、2019年に株式会社Xemonoを立ち上げる。性格はとてもいい。
            <br />
            http://megumitorii.tk
          </p>
        </div>
      </FlexBox>
    </ContentBox>
    <ContentBox theme="black">
      <Heading number="05">会社概要</Heading>
      <FlexBox>
        <dl style={{ flex: 1, textAlign: "left" }}>
          <dt>株式会社 Xemono</dt>
          <dd>かぶしきがいしゃ くせもの</dd>
          <dt>設立：</dt>
          <dd>2019年4月1日</dd>

          <dt>代表取締役：</dt>
          <dd>
            鳥居 萌<br />
            とりいめぐみ
          </dd>
        </dl>
        <dl style={{ flex: 1, alignSelf: "flex-start", textAlign: "left" }}>
          <dt>Contact：</dt>
          <dd>
            東京都八王子市別所1-41-1-6-2201
            <br />
            contact@xemono.life
            <br />
            080-6586-2216
          </dd>
        </dl>
      </FlexBox>
    </ContentBox>
    <ContentBox theme="gray">
      <Heading number="06">最近のXemono</Heading>
      <NewsBoxes />
    </ContentBox>
  </div>
);

export default App;
