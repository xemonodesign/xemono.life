import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import ContentBox from "./components/ContentBox";
import FlexBox from "./components/FlexBox";
import PhotoBox from "./components/PhotoBox";
import RoundBox from "./components/RoundBox";

import Heading from "./components/Heading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./images/logoIcon.png";

import News, { NewsList, NewsBoxes } from "./News";
import Skills from "./Skills";
import WorkWith from "./WorkWith";
import Projects, { ProjectsBoxes } from "./Projects";
import Privacy from "./Privacy";

import ScrollToTop from "./components/ScrollToTop";

import Icon1 from "./images/xemono_icon_1.png";
import Icon2 from "./images/xemono_icon_2.png";
import Icon3 from "./images/xemono_icon_3.png";
import Icon4 from "./images/xemono_icon_4.png";
import Icon5 from "./images/xemono_icon_5.png";
import Icon6 from "./images/xemono_icon_6.png";

import "./App.css";

const App = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news/:id" component={News} />
        <Route path="/skills/:id" component={Skills} />
        <Route path="/workwith/:id" component={WorkWith} />
        <Route path="/projects/:id" component={Projects} />
        <Route path="/privacy/" component={Privacy} />
      </Switch>
      <Footer />
    </ScrollToTop>
  </Router>
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
      <ProjectsBoxes />
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
          url="consulting"
          body="デザインのかかりつけ医"
        />
        <RoundBox
          img={Icon5}
          title="新規案件のデザイン"
          url="new"
          body="UXデザイナーと企画を立てる"
        />
        <RoundBox
          img={Icon6}
          title="既存案件の改善"
          url="kaizen"
          body="改善が速い"
        />
      </FlexBox>
    </ContentBox>
    <ContentBox theme="gray">
      <Heading number="04">Xemonoと仕事する</Heading>
      <FlexBox>
        <div style={{ flex: 1 }}>
          <h2 className="text-large text-black">代表　とりいめぐみ</h2>
          <p style={{ textAlign: "left" }}>1991年生。デザイナー、歌人。</p>
          <p style={{ textAlign: "left" }}>
            話し相手が欲しくてbotを自作したことがある。
          </p>
          <p style={{ textAlign: "left" }}>
            東京大学理科一類入学、文学部宗教学宗教史学卒業。大学では「人間が狂気に陥ることを回避しながら安全にものを考えるため、必要な前提とは何か？」ということを考えていた。
          </p>
          <p style={{ textAlign: "left" }}>
            新卒で入社した株式会社花まるラボでは幼児向けパズルアプリ「Think!
            Think!」（Google Play「ベスト オブ 2017」アプリ
            ファミリー部門入賞）のデザイナーとして、複雑そうに見えるパズルを子どもたちにわかりやすく、また親しみやすい感じにする仕事をしていた。
          </p>
          <p style={{ textAlign: "left" }}>
            ウェブメディア「電ファミニコゲーマー」で編集アシスタントとして記事を作りながら、インターネットでの文章の見せ方を身に着けたりもした。
          </p>
          <p style={{ textAlign: "left" }}>
            その後はフリーでUXデザイナーをして「シンプルだけどテプラを貼られないデザイン」を研究しつつ、2019年に株式会社Xemonoを立ち上げる。
          </p>
          <p style={{ textAlign: "left" }}>性格はとてもいい。</p>
          <h3>副社長からの紹介</h3>
          <blockquote className="twitter-tweet" data-lang="ja">
            <p lang="ja" dir="ltr">
              鳥居の才能の一番稀有なものは面白がる才能。
              <br />
              機嫌よく生きる努力を惜しまず、わくわくするためのアンテナを決して下ろさないので、
              <br />
              このひとの作ったものはきっとあなたがわくわくしながら機嫌よく生きるための手助けになってくれるはず。
              <br />
              性格はとてもいい。
            </p>
            紹介者：かわの
          </blockquote>
        </div>
      </FlexBox>
      <FlexBox>
        <div style={{ flex: 2 }}>
          <h2 className="text-large text-black">副社長　かわの</h2>
          <p style={{ textAlign: "left" }}>1991年生。歌人、小説家。</p>
          <p style={{ textAlign: "left" }}>
            ものごころついたときから小説を書き始めた。文章を読むことと書くこと以外何もしたことがない。
          </p>
          <p style={{ textAlign: "left" }}>
            東京大学大学院（博士課程）でファンタジーの研究などをしている。主な論文は「瀬田貞二訳『指輪物語』における地名の訳し分け――中つ国・イングランド・日本――」、『比較文学』第59号（2016年4月）。
          </p>
          <p style={{ textAlign: "left" }}>
            九年ほど前から短歌を作り始めた。2018年、短歌の新人賞である歌壇賞を受賞。雑誌『現代短歌』にて「歌壇時評」連載中。ほか、短歌、書評、エッセイなどを短歌雑誌や新聞などに書いている。
          </p>
          <p style={{ textAlign: "left" }}>
            最近はウィリアム・モリスのことを考えている。トールキンの『指輪物語』やC・Ｓ・ルイスの『ナルニア国物語』に大きな影響を与えたファンタジー（という言葉を本人は使わなかったが）作家としてモリスに行き着いたのだけど、この人はデザイナー兼社会主義者としての方がよく知られている。インテリア会社を経営しながら、お金のある人にしか美しいものを届けられないことに苦悩して社会主義者になった人。
          </p>
          <p style={{ textAlign: "left" }}>
            私はデザインについても資本主義についても門外漢だから、この人について理解が及ばないことがたくさんあるんだろうな、と思っていたときに、デザイン会社の副社長をやらないかと藪から棒に誘われてうっかり承諾してしまった。
          </p>
          <p style={{ textAlign: "left" }}>この会社での役割は判断力担当。</p>
          <p style={{ textAlign: "left" }}>
            好きなものは言葉。得意なことは人が何を言おうとしているのか理解すること。好きな映画は「大いなる沈黙へ」。好きな作家はトールキン、ダンセイニ、タニス・リー、シャーリィ・ジャクスン、ルルフォ、山尾悠子、皆川博子など。苦手なものは自己紹介。
          </p>
          <h3>社長からの紹介</h3>
          <blockquote className="twitter-tweet" data-lang="ja">
            <p lang="ja" dir="ltr">
              人と言葉が対立する時ってあるんですよ。
              <br />
              で、常人は大体人間の側についちゃう。そりゃそうだ！ 人間だからな。
              <br />
              でもかわの氏は言葉の側につきます。ついてきたのを見てきたし、これからもそうだろうと思う。その場その場の人間関係のためではなく、言葉と文化のこの先のため、真摯に考え真摯に喋り、真摯に書く。何が言葉にとって良いことかをよく考えているし、それを知るために言葉を研ぎ澄ますことに余念がない。
              <br />
              私はそんなかわの氏を信頼しているし、この人の判断は未来に恥じることのないものだと思っています。
            </p>
            紹介者: とりい
          </blockquote>
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
