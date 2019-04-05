import React from "react";
import ContentBox from "./components/ContentBox";
import Navi from "./components/Navi";
import BackNavi from "./components/BackNavi";

import "./App.css";

const SKILLS = [
  {
    id: "design",
    title: "Design",
    sub: "くせものたちが話を聞きに来るぞ。",
    content: (
      <p>
        あなたの要望、要件、困りごとをまずお伺いします。
        <br />
        聞いたことをもとに画面遷移やデザインを提案します。ご依頼があれば企画段階からの提案も。
        <br />
        完成後もユーザーからのフィードバックを確認しつつ最適なデザインを探していきます
        <br />
        <br />
        ウェブの場合 <br />
        1ページの企画サイトからウェブメディアまで
        <br />
        拡張性のある長く使えるデザインを考えます。 <br />
        まずはお気軽に相談を！ <br />
        <br />
        アプリの場合
        <br /> UI/UXスタジオとして、
        <br />
        見た目のデザインから最適な画面遷移まで、
        <br />
        使いやすさ重視で設計し、ご提案します。
        <br />
        <br />
        その他の場合
        <br />
        MRのUIとかやりたい。 案件お待ちしております。
        <br />
      </p>
    ),
    image: "blank"
  },
  {
    id: "coding",
    title: "Coding",
    sub: "絵に描いた餅を本物の餅に",
    content: (
      <>
        <p>
          どれだけ良いデザインを作っても、意図通りに動いてくれなければ良いUIとは言えません。
          <br />
          デザインが快適なのも大事だけど、それを動くものにするのはプログラムです。
          <br />
          Xemonoではフロントエンドのコーディングも請け負います。
          <br />
        </p>
        <p>
          <br />
          <strong>主な使える言語:</strong>
          <br />
          HTML/CSS/Javascript <br />
          <strong>Javascript</strong> react, react native, p5.js
          <br />
          <strong>Python</strong> django <br />
          <strong>php</strong> wordpress
          <br />
        </p>
      </>
    ),
    image: "blank"
  },
  {
    id: "writing",
    title: "writing",
    sub: "伝えたいことを、伝わる文章に",
    content: (
      <p>
        誰もウェブサイトやアプリの文章なんて読まない？ いやいや。
        <br />
        あなたのプロダクトに興味を持った人は、意外と文章読んでます。
        <br />
        あなたがしたいことは何ですか？　あなたが伝えたい話は何ですか？
        <br />
        どんなに素晴らしいアイデアを持っていても、言葉にしないと伝わりません。
        <br />
        文章を書くのが苦手でも大丈夫。
        <br />
        くせものたちがあなたの話を聞き出して、「伝わる」言葉を見つけ出します。
        <br />
      </p>
    ),
    image: "blank"
  }
];

const SkillsById = id => SKILLS.find(skill => skill.id === id);

const Skills = props => {
  const { id } = props.match.params;
  const skill = SkillsById(id);

  if (typeof skill === "undefined") {
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
        <h1>{skill.title}</h1>
      </ContentBox>
      <ContentBox theme="white">
        <h2>{skill.sub}</h2>
        <p>{skill.content}</p>
      </ContentBox>
      <BackNavi />
    </>
  );
};

export default Skills;
