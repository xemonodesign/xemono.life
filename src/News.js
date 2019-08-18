import React from "react";
import { Link } from "react-router-dom";
import ContentBox from "./components/ContentBox";
import Navi from "./components/Navi";
import BackNavi from "./components/BackNavi";
import Helmet from "react-helmet";

import "./App.css";
import Slide from "./components/Slide";
const NEWS = [
  {
    type: "entry",
    id: "20190801",
    date: "2019.08.01",
    title:
      "株式会社白泉社様から、「ニラメッコ」EXITコラボネタ動画が三本公開されました",
    content: (
      <>
        株式会社白泉社様から、「ニラメッコ」EXITコラボネタ動画が三本公開されました。
        <br />
        <br />{" "}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wPRFCzbp2oQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <br />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zANtCZFowP8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zK8cS_FY4n8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <a href="https://www.younganimal.com/niramekko_exit/">
          「ニラメッコ」特設サイトはこちら
        </a>
      </>
    )
  },
  {
    type: "entry",
    id: "20190723",
    date: "2019.07.23",
    title:
      "株式会社白泉社様から、「ニラメッコ」EXITコラボ紹介動画が二本公開されました",
    content: (
      <>
        株式会社白泉社様から、「ニラメッコ」EXITコラボ紹介動画が二本公開されました。
        <br />
        <br />{" "}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pBp22l2ICkw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <br />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Cuu744F4IuQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <a href="https://www.younganimal.com/niramekko_exit/">
          「ニラメッコ」特設サイトはこちら
        </a>
      </>
    )
  },
  {
    type: "entry",
    id: "20190708",
    date: "2019.07.08",
    title:
      "日鉄ソリューションズ株式会社様にて、デザイン基礎講座・スライド添削ワークショップを行いました",
    content: (
      <>
        <p>
          日鉄ソリューションズ株式会社様のNSSOLアカデミーのUIデザインセミナー企画にて、弊社代表の鳥居が30人を前に3時間にわたってデザイン基礎講座とスライド添削ワークショップを行いました。
        </p>
        <br />
        使用したスライドはこちら
        <Slide dataID="f3dcbd9c455740c6a630870105217d0a" />
        <br />
        「単なる技術の習得だけではなく、自身のデザインに対する距離感が縮まったように思います。」
        <br />
        「認知負荷を下げる、世界観を合わせる、使う色も同じ仲間でなど、すぐに活用できる。」
        <br />
        「受講者のスライド添削は実例がもとになっているので、ものすごく勉強になりました。」
        <br />
        <br />
        などの反響がありました。
        <br />
      </>
    ),
    image: require("./images/P1010027.JPG")
  },
  {
    type: "entry",
    id: "20190706",
    date: "2019.07.06",
    title:
      "株式会社白泉社様から、「不祥事アイドル」のPR動画二本が公開されました",
    content: (
      <>
        株式会社白泉社様から、「不祥事アイドル」のPR動画二本が公開されました。
        <br />
        <br />{" "}
        <a href="https://twitter.com/fushoji_idol/status/1152887750342823936">
          「不祥事アイドル」キャラクター紹介PV①きよし＆いっくん編
        </a>
        <br />
        <br />
        <a href="https://twitter.com/fushoji_idol/status/1154721549334671362">
          「不祥事アイドル」キャラクター紹介PV②瑠衣＆保編
        </a>
      </>
    ),
    image: require("./images/news20190706.png")
  },
  {
    type: "entry",
    id: "20190508",
    date: "2019.05.08",
    title:
      "株式会社gumi様にて第三回デザインの基礎講座（UX編・最終回）をデザイン未経験のプログラマーのために行いました",
    content: (
      <>
        株式会社gumi様にてデザイン未経験のプログラマー向けに講座の第三回を行いました。
        <br />
        <br />
        使用したスライドは{" "}
        <a href="https://speakerdeck.com/kinakobooster/jin-ri-karadekiruuxdezain">
          こちら
        </a>
        <br />
        <br />
        講義とスライドへの反響は
        <a href="https://togetter.com/li/1353111">こちら(togetter)</a>
      </>
    ),
    image: require("./images/news20190508.png")
  },
  {
    type: "entry",
    id: "20190423",
    date: "2019.04.23",
    title:
      "株式会社gumi様にて第二回デザインの基礎講座（UI編）をデザイン未経験のプログラマーのために行いました",
    content: (
      <>
        株式会社gumi様にてデザイン未経験のプログラマー向けに講座の第二回を行いました。
        <br />
        <br />
        使用したスライドは{" "}
        <a href="https://speakerdeck.com/kinakobooster/uidezainwohazimeyou">
          こちら
        </a>
        <br />
        <br />
        講義とスライドへの反響は
        <a href="https://togetter.com/li/1341016">こちら(togetter)</a>
      </>
    ),
    image: require("./images/news20190423.png")
  },
  {
    type: "entry",
    id: "20190418",
    date: "2019.04.18",
    title:
      "株式会社gumi様にて第一回デザインの基礎講座をデザイン未経験のプログラマーのために行いました",
    content: (
      <>
        株式会社gumi様にてデザイン未経験のプログラマー向けに講座の第一回を行いました。
        <br />
        <br />
        使用した
        <a href="https://speakerdeck.com/kinakobooster/koredakeshou-rebajian-yasukunarudezainfalseji-chu">
          スライド
        </a>
        が「分かりやすい」とかなりバズりました。
        <br />
        <br />
        はてなブックマークでは
        <a href="http://b.hatena.ne.jp/entry/s/speakerdeck.com/kinakobooster/koredakeshou-rebajian-yasukunarudezainfalseji-chu">
          ブクマ数2000突破
        </a>
        <br />
        <br />
        講義とスライドへの反響は
        <a href="https://togetter.com/li/1339322">こちら(togetter)</a>
      </>
    ),
    image: require("./images/news20190418.png")
  },
  {
    type: "link",
    id: "20190411",
    date: "2019.04.11",
    title:
      "代表のブログ記事「UIデザイナーがアイコン一種完成させるまでに考えること」が公開されました",
    link: "https://note.mu/xemono/n/nd7b696b78702",
    image: require("./images/news20190411.png")
  },
  {
    type: "link",
    id: "20190406",
    date: "2019.04.06",
    title:
      "代表のブログ記事「社会はマジでヤバイと思ってるけど会社作ります」が公開されました",
    link: "http://noubrain.hateblo.jp/entry/2019/04/05/171255",
    image: require("./images/news20190406.png")
  },
  {
    type: "entry",
    id: "20190401",
    date: "2019.04.01",
    title: "会社が生えました",
    content: (
      <>
        Xemono社は創立0周年を迎えました。これからもよろしくお願いします。
        <br />
        <br />
        カバーイラストとその他6枚のイラスト（聴診器やキーボードなど）は、絵師のTKさんに書いていただきました。
      </>
    ),
    image: require("./images/news20190401.png")
  }
];

const NewsById = id => NEWS.find(news => news.id === id);

const newNews = NEWS.filter((news, index) => index < 3);

export const NewsList = () => (
  <>
    <h2>news</h2>
    <ul className="news">
      {newNews.map(news => (
        <li key={news.id}>
          {news.type === "entry" ? (
            <Link to={`/news/${news.id}`}>
              <span className="date bold">{news.date}</span>
              <span className="title">{news.title}</span>
            </Link>
          ) : (
            <a href={news.link}>
              <span className="date bold">{news.date}</span>
              <span className="title">{news.title}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  </>
);

export const NewsBoxes = () => (
  <>
    <div className="flex-row">
      {NEWS.map(news => (
        <div className="news-box">
          {news.type === "entry" ? (
            <Link key={news.id} to={`/news/${news.id}`}>
              <div className="flex-column">
                <span className="date bold right">{news.date}</span>
                <img alt="" src={news.image} />
                <span className="title">{news.title}</span>
              </div>
            </Link>
          ) : (
            <a href={news.link}>
              <div className="flex-column">
                <span className="date bold right">{news.date}</span>
                <img alt="" src={news.image} />
                <span className="title">{news.title}</span>
              </div>
            </a>
          )}
        </div>
      ))}
    </div>
  </>
);

const News = props => {
  const { id } = props.match.params;
  const news = NewsById(id);

  if (typeof news === "undefined") {
    return (
      <>
        <ContentBox theme="black">
          <Navi />

          <h1>News</h1>
        </ContentBox>
        <ContentBox theme="white">
          <p>
            {id}のニュースはありません。
            <br />
            Xemonoの近況は
            <a href="https://twitter.com/kinakobooster">@kinakobooster</a>
            を見るとわかるときがあります。
          </p>
        </ContentBox>
        <BackNavi />
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>Xemono - {news.title}</title>
      </Helmet>
      <ContentBox theme="black">
        <Navi />

        <h1>News</h1>
      </ContentBox>
      <ContentBox theme="white">
        <h1>{news.title}</h1>
        <h2>{news.date}</h2>
        <p>{news.content}</p>
      </ContentBox>
      <BackNavi />
    </>
  );
};

export default News;
