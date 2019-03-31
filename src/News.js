import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ContentBox from "./components/ContentBox";
import Navi from "./components/Navi";
import BackNavi from "./components/BackNavi";

import "./App.css";

const NEWS = [
  {
    id: "20190401",
    date: "2019.04.01",
    title: "会社が生えました",
    content:
      <>Xemono社は創立0周年を迎えました。これからもよろしくお願いします。<br /><br />
      カバーイラストとその他6枚の聴診器やキーボードなどは、絵師のTKさんに書いていただきました。
      </>,
    image: require("./images/news20190401.png")
  }
];

const NewsById = id => NEWS.find(news => news.id === id);

export const NewsList = () => (
  <>
    <h2>news</h2>
    <ul className="news">
      {NEWS.map(news => (
        <li key={news.id}>
          <Link to={`/news/${news.id}`}>
            <span className="date bold">{news.date}</span>
            <span className="title">{news.title}</span>
          </Link>
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
          <Link key={news.id} to={`/news/${news.id}`}>
            <div className="flex-column">
              <span className="date bold right">{news.date}</span>
              <img src={news.image} />
              <span className="title">{news.title}</span>
            </div>
          </Link>
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
