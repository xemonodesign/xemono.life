import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ContentBox from "./components/ContentBox";
import Navi from "./components/Navi";
import BackNavi from "./components/BackNavi";

import "./App.css";

const WORKWITH = [
  {
    id: "consulting",
    title: "コンサルティング",
    content: (
      <p>
        <ul>
          <li>せっかくアプリを作ったのに、なぜだか使いづらく、改善したい</li>
          <li>UXを考えられる社員を育てたいので講座を開いてほしい</li>
          <li>
            何かがわかりづらくてユーザーが途中で離脱してしまっているように思える
          </li>
          <li>プロダクトを改善するプロの手を借りたい</li>
        </ul>
        などのお悩み、相談に乗ります。
      </p>
    )
  },
  {
    id: "new",
    title: "新規案件のデザイン",
    content: (
      <p>
        新規案件立ち上げで一番大切なのは、
        <br />
        「この新しいプロダクトは何をするプロダクトなのか」を決めること。
        <br />
        何を大事にするかがはっきり固まれば、建設的な議論をしながらプロダクトを前に進めることができます。
        <br />
        くせものはご依頼次第で立ち上げからサポートをします。
        <br />
        もちろん、アプリやウェブデザインの画面遷移図を書くなど、企画が進み始めてからのサポートも。
        <br />
      </p>
    )
  },
  {
    id: "kaizen",
    title: "既存案件の改善",
    content: (
      <p>
        アプリやウェブサイトが動き出したはいいものの、なんだか伸びがあんまりよくない、というお悩みを抱えてはいませんか。
        <br />
        くせものでは数値を分析しつつ、どこがユーザーにとってストレスになっているかを見極めます。
        <br />
        また、作文や作図も請け負うため、すばやく改善案を出し、どんどこ試行錯誤をすることができます。
        <br />
      </p>
    )
  }
];

const WorkWithById = id => WORKWITH.find(workwith => workwith.id === id);

const WorkWith = props => {
  const { id } = props.match.params;
  const workwith = WorkWithById(id);

  if (typeof workwith === "undefined") {
    return (
      <>
        <ContentBox theme="black">
          <Navi />

          <h1>できること</h1>
        </ContentBox>
        <ContentBox theme="white">
          <p>
            {id}はまだできないかもしれませんが、とりあえず
            contact[at]xemono.life に相談してみましょう。
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
        <h1>{workwith.title}</h1>
      </ContentBox>
      <ContentBox theme="white">
        <p>{workwith.content}</p>
      </ContentBox>
      <BackNavi />
    </>
  );
};

export default WorkWith;
