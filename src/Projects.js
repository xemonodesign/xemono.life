import React from "react";
import { Link } from "react-router-dom";
import ContentBox from "./components/ContentBox";
import Navi from "./components/Navi";
import BackNavi from "./components/BackNavi";

import "./App.css";

const PROJECTS = [
  {
    id: "thinkthink",
    title: "Think! Think!",
    image: require("./images/thinkthink1.png"),
    excerpt: (
      <>
        <p>Think! Think! はパズルを使って「思考力」を育てる教材アプリです。</p>
        <p>
          代表のとりいはデザイナーとして、パズルデザイナーから上がってきた原案をもとに子どもが直感的にルールを理解できるようデザインを考えていました。
        </p>
      </>
    ),
    content: (
      <>
        <p>協力期間：2015年4月 ~ 2017年11月（代表鳥居による、株式会社花まるラボ所属時の仕事）</p>
        <p>担当：Adobe Illustratorを使用したパズルやキャラクターのデザイン</p>

        <p>
          <a href="https://www.hanamarulab.com/">株式会社花まるラボ</a>
          にて、小学生向け教材アプリThink!
          Think!のパズルの見た目のデザインを担当しました。
        </p>
        <p>
          Think! Think!
          はある特定の教科の対策をするのではなく、自分で考えることを楽しむための「思考力」を育てるためのものとして設計されています。
          <ul>
            <li>立体問題から迷路までバリエーション豊かなパズル</li>
            <li>3分という時間制限中で正答数に応じたハイスコアを競う</li>
            <li>正答率に応じた難易度の自動調整</li>
          </ul>
          などが売りとなっています。
        </p>
        <p>
          とりいはパズルデザイナーから上がってきた原案をもとに、子どもたちが直感的にルールを理解できるよう、デザインを当てていました。
          <br />
          具体的にはキャラクターを用意したり、ボタンのデザインや配置を考えていました。
        </p>
        <p>
          子どもたちは文字を覚えたばかりで、説明文が書いてあってもまず読まないものとして考えます。
          <br />
          そのため、ちゃんと問題を解いてもらうには、画面を見た瞬間に何をすればよいのか分かる必要があります。
          <br />
          だからこそ、最初の1問の見た目がかなり重要になってきます。
          <br />
        </p>
        <p>
          花まるラボでは子ども向けの授業を持っていたため、作ったばかりのパズルをユーザー（子ども）にすぐに触ってもらって、その様子を観察しつつ改善を繰り返すことができました。
        </p>
        <p>原案の再現と実際のデザインの例は以下の通りです。</p>
        <h2>ラッキーバルーン</h2>
        <img
          alt='ラッキーバルーンの原案（再現）'
         src={require("./images/thinkthink_luckyballoon_draft.gif")} />
        <img
        alt='ラッキーバルーンの実装'
         src={require("./images/thinkthink_luckyballoon.gif")} />
        <p>
          <strong>要件：</strong>
          <br />
          真っ直ぐ飛ぶ矢と風船が配置されていて、割れずに生き残る風船を選ぶ。
        </p>
        <p>
          <strong>考えたこと：</strong>
          <br />
          選んだ風船が丸で囲われるだけでも良かったのだけど、
          <br />
          回答者は選択した風船が生き残るかどうかに興味が移るので、
          <br />
          タップした瞬間顔がでてきてキャラっぽくすることで親しみやすさを演出。
          <br />
          <br />
          ただ間違えてショッキングな感じになると良くないので、間違えても笑える感じになることが重要。
          <br />
          風船にはオーバーリアクションしてもらいました。
          <br />
          <br />
          子どもたちはそれを見て顔真似するほど喜んでいました。
          <br />
        </p>

        <h2>ひとふででんきゅう</h2>
        <img
         alt='ひとふででんきゅうの原案（再現）'
         src={require("./images/thinkthink_hitohude_draft.gif")} />
        <img 
        alt='ひとふででんきゅうの実装'
        src={require("./images/thinkthink_hitohude.gif")} />
        <p>
          <strong>要件：</strong>
          <br />
          すべてのマスを一筆書きで踏んでいくパズル
        </p>
        <p>
          <strong>考えたこと：</strong>
          <br />
          このパズルには不正解がない（一筆で通れなければ戻るだけなので）ため、
          正解したときのめでたい感じをいかに演出するかが重要でした。 <br />
          各マスのアイテムを全部拾う方式にするか何かを繋ぐ方式にするか迷ったけれど、
          後戻りできそうという点を優先して繋ぐ方式に。 <br />
          電球を線で繋いで全部繋ぐことができるとぱっと光るという設定になりました。{" "}
          <br />
          また、斜めに通れなさを表現するため、各マスの端にさりげなく壁を置いてあります。{" "}
          <br />
        </p>
        <h2>レーザービーム</h2>
        <div className="flex-row">
          <img
            alt='レーザービームの原案（再現）'
            src={require("./images/thinkthink_laser_draft.gif")}
          />
          <img
            alt='レーザービームの実装'
            src={require("./images/thinkthink_laser.gif")}
          />
        </div>
        <p>
          <strong>要件：</strong>
          <br />
          壁を回して、まっすぐ飛ぶ何かを反射させてゴールに当てる
        </p>
        <p>
          <strong>考えたこと：</strong>
          <br />
          原案はサッカーと壁だったのですが、ボールはそんなにまっすぐ飛んでくれないので、
          ここは光でいこうと考えレーザー実験のイメージでデザインを作りました。
          <br />
          光を目立たせるためには画面を暗くする必要がありましたが、
          そのせいで怖い感じにならないよう、キラキラ感に気を遣いました。
          <br />
          床パネルには中点をつけて、軌跡をイメージしやすいようにしています。
          <br />
          鏡の壁は、固定されていて回すことしかできない印象を与えるため、
          軸と歯車っぽくしています
          <br />
        </p>
        <a
          className="button"
          href="https://think2app.hanamarulab.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Think! Think! 公式サイトはこちら
        </a>
      </>
    )
  }
];

const ProjectsById = id => PROJECTS.find(Projects => Projects.id === id);

export const ProjectsList = () => (
  <>
    <h2>Projects</h2>
    <ul className="Projects">
      {Projects.map(Projects => (
        <li key={Projects.id}>
          <Link to={`/Projects/${Projects.id}`}>
            <span className="title">{Projects.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export const ProjectsBoxes = () => (
  <>
    <div className="flex-row">
      {PROJECTS.map(projects => (
        <div className="projects-box flex-row" key={projects.id}>
          <img
            src={projects.image}
            alt={projects.title}
          />
          <div style={{ flex: "1 0 40vw" }}>
            <h2 className="title">{projects.title}</h2>
            <div>{projects.excerpt}</div>
            <Link to={`/projects/${projects.id}`} className="button center">
              詳しく見る
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
);

const Projects = props => {
  const { id } = props.match.params;
  const Projects = ProjectsById(id);

  if (typeof Projects === "undefined") {
    return (
      <>
        <ContentBox theme="black">
          <Navi />

          <h1>Projects</h1>
        </ContentBox>
        <ContentBox theme="white">
          <p>
            {id}のプロジェクトはありません。
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
        <h1>Projects</h1>
      </ContentBox>
      <ContentBox theme="white">
        <h1>{Projects.title}</h1>
        <img src={Projects.image}
        alt={Projects.titleya} />
        <p>{Projects.content}</p>
      </ContentBox>
      <BackNavi />
    </>
  );
};

export default Projects;
