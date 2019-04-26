import React from "react";
import ContentBox from "./components/ContentBox";
import Navi from "./components/Navi";
import BackNavi from "./components/BackNavi";
import Slide from "./components/Slide";
import Helmet from "react-helmet";

import "./App.css";

const WORKWITH = [
  {
    id: "consulting",
    title: "コンサルティング",
    sub: "デザイン講座やります",
    content: (
      <>
        <h3>講義パックのご案内</h3>
        <h4>デザイン初心者のための基礎/UI/UX（全三回）</h4>
        <ul>
          <li>
            <strong>所要時間</strong>：
            1回3時間（喋り1時間+休憩30分+相談会1時間半）
          </li>
          <li>
            <strong>人数</strong>:20人程度（それ以上はご相談）
          </li>
          <li>
            <strong>料金</strong>: 一回20万(三回セットで50万)
          </li>
          <li>
            <strong>備考</strong>:突っ込めば突っ込むほど良い話ボロボロ喋るよ
          </li>
        </ul>
        <h5>講義内容</h5>
        <ul>
          <li>
            第一回　デザインの基礎（スライドは
            <a href="https://speakerdeck.com/kinakobooster/koredakeshou-rebajian-yasukunarudezainfalseji-chu">
              こちら
            </a>
            ）
          </li>
          <li>第二回　UIデザインをはじめよう(スライドは<a href="https://speakerdeck.com/kinakobooster/uidezainwohazimeyou">こちら</a>)</li>
          <li>第三回　UX講座</li>
        </ul>
        <Slide />
        <h2>その他、デザインのかかりつけ医やります</h2>
        <ul>
          <li>せっかくアプリを作ったのに、なぜだか使いづらく、改善したい</li>
          <li>UXを考えられる社員を育てたいので講座を開いてほしい</li>
          <li>
            何かがわかりづらくてユーザーが途中で離脱してしまっているように思える
          </li>
          <li>プロダクトを改善するプロの手を借りたい</li>
        </ul>
        <p>などのお悩み、相談に乗ります。</p>
      </>
    )
  },
  {
    id: "new",
    title: "新規案件のデザイン",
    sub: "UXデザイナーと企画を立てる",
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
    sub: "改善が速い",
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
      <Helmet>
        <title>Xemono - {workwith.title}</title>
      </Helmet>
      <ContentBox theme="black">
        <Navi />
        <h1>{workwith.title}</h1>
      </ContentBox>
      <ContentBox theme="white">
        <h2>{workwith.sub}</h2>
        <p>{workwith.content}</p>
      </ContentBox>
      <BackNavi />
    </>
  );
};

export default WorkWith;
