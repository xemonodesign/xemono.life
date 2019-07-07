import React from "react";
import { Link } from "react-router-dom";
import ContentBox from "./components/ContentBox";
import Navi from "./components/Navi";
import BackNavi from "./components/BackNavi";
import Helmet from "react-helmet";

import "./App.css";

const PROJECTS = [
  {
    id: "scandal_idol",
    title: "web連載漫画「不祥事アイドル」PR動画",
    image: require("./images/scandal_idol/main.png"),
    excerpt: (
      <>
        <p>
          株式会社白泉社様から、「不祥事アイドル」のPR動画の作成を請け負いました。
        </p>
        <p>
          キャラクターの魅力が伝わるよう意識しながら、TikTokやマンガPark、YouTubeなどへと多面的に展開できるよう、15秒の動画を作成しました。
        </p>
      </>
    ),
    content: (
      <>
        <p>
          協力期間：2018年6月 ~ <br />
          カテゴリ：動画
          <br />
          クライアント：
          <a href="http://www.hakusensha.co.jp/">株式会社白泉社</a>
          <br />
          ディレクション： とりいめぐみ
          <br />
          制作： 庭石
        </p>
        <p>
          株式会社白泉社様から、{" "}
          <a
            href="https://manga-park.com/title/9350"
            target="_blank"
            rel="noopener noreferrer"
          >
            「不祥事アイドル」
          </a>
          のPR動画の作成を請け負いました。
        </p>
        <p>
          各ユニットの雰囲気の違いを表現し、キャラクターの魅力が存分に伝わるよう意識しながら、TikTokやマンガPark、YouTubeなどへと多面的に展開できるよう、15秒の動画を作成しました。
        </p>
        <p>
          原作のギャグシーンや見せゴマの良さを活かし、15秒という短い時間ならではの緩急をつけています。あえてテンポはかなり速めにして、多くの情報が流れるタイムラインにも埋もれず、繰り返し見てもらえるような動画にしました。
        </p>
        <p>
          『不祥事アイドル』は、挫折を味わいながら新たな一歩を踏み出そうとするアイドル達を、応援したくなると同時に読み手も励まされるような漫画です。
          <br />
          なので明るく元気な存在感と、前向きなキラキラとした姿をアピールするため、色調を明るくしました。また原作の掛け合いの楽しさを活かすため、台詞はとにかくテンポよく、BGMとタイミングを合わせて読んでもらえるようにしました。
        </p>
        <p>
          ツイッター連載（
          <a href="https://twitter.com/fushoji_idol">@fushoji_idol</a>
          ）の前日譚では、4人グループ結成前の、東雲きよしと蕪木一世、橘瑠衣と花笠保のコンビに焦点が絞られているのも見どころです。
          <br />
          活動が順調であればきっと組むことのなかったきよしと一世の出会いは劇的なもので、原作の縦長のコマをそのまま使い、時間を長めにとりました。
        </p>
        <img alt="出会い" src={require("./images/scandal_idol/deai.gif")} />
        <p>
          一世がきよしに「失敗は成功のもとだと証明するんだ」と言うシーンは絵と台詞の力強さをそのまま見せるために演出はあえて控えめにし、一瞬光を散らして印象が鮮烈になるようにしました。
        </p>
        <img
          alt="証明するんだ"
          src={require("./images/scandal_idol/shoumei.gif")}
        />
        <p>
          一方瑠衣と保は気心が知れており、自宅謹慎中なので少し落ち着いた日常的な雰囲気にしました。仲が良いのか悪いのか分からないような会話を繰り広げる二人に合わせて演出を変え、保のふんわりした空気に飲まれそうになってからのオチと、なにやらバタバタしそうな楽しい予感を印象づけて終わるようにしました。
        </p>
        掛け合いとギャグシーンの楽しい漫画なので、ぜひ本編の方も楽しんでいただければと思います。
        <h2>白泉社 井手様のコメント</h2>
        <blockquote>
          <p>
            マンガは、読み手それぞれのスピードで読めるものなので、動画で見せるのはとても難しいと感じていました。
          </p>

          <p>
            今回「不祥事アイドル」の動画を作成いただくにあたり、
            マンガの内容がわかりつつテンポよく、というリクエストをしましたが、
            内容を理解してくださったうえで緩急をつけた見せ方をしていただき、
            とても満足いくものができました。
          </p>

          <p>
            作品の持ち味である、面白くて楽しくてイケメンで応援したい！要素も
            汲み取っていただき、ありがとうございました！
          </p>
        </blockquote>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LMWhVmjr9T0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tW1JejgltuI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <a
          className="button"
          href="https://twitter.com/fushoji_idol"
          target="_blank"
          rel="noopener noreferrer"
        >
          ツイッター連載（@fushoji_idol）
        </a>
        <a
          className="button"
          href="https://manga-park.com/title/9350"
          target="_blank"
          rel="noopener noreferrer"
        >
          マンガPARK 「不祥事アイドル」
        </a>
      </>
    )
  },
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
        <p>
          協力期間：2015年4月 ~
          2017年11月（代表鳥居による、株式会社花まるラボ所属時の仕事）
        </p>
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
          とりいはパズルデザイナーから上がってきた原案をもとに、子どもたちが直感的にルールを理解できるよう、デザインを当て、プログラマーの方に動きの実装をお願いしていました。
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
          alt="ラッキーバルーンの原案（再現）"
          src={require("./images/thinkthink_luckyballoon_draft.gif")}
        />
        <img
          alt="ラッキーバルーンの実装"
          src={require("./images/thinkthink_luckyballoon.gif")}
        />
        <p>
          ※とりいは風船や矢の絵を用意しました。矢の動きや風船が割れる小気味よいアニメーションをつけたのは花まるラボのプログラミングチームの方々です。
        </p>
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
          ただ割れたときにショッキングな感じになると良くないので、間違えても笑える感じになることが重要。
          <br />
          風船にはオーバーリアクションしてもらいました。
          <br />
          <br />
          子どもたちはそれを見て顔真似するほど喜んでいました。
          <br />
        </p>

        <h2>ひとふででんきゅう</h2>
        <img
          alt="ひとふででんきゅうの原案（再現）"
          src={require("./images/thinkthink_hitohude_draft.gif")}
        />
        <img
          alt="ひとふででんきゅうの実装"
          src={require("./images/thinkthink_hitohude.gif")}
        />
        <p>
          ※ひとふででんきゅうはThink!
          Think!の数あるコンテンツの中でもかなり人気のパズルです。
          <br />
          花まるラボのプログラミングチームの方々が、直観的な操作UIを実装してくれました。
        </p>
        <p>
          <strong>要件：</strong>
          <br />
          すべてのマスを一筆書きで踏んでいくパズル
        </p>
        <p>
          <strong>考えたこと：</strong>
          <br />
          このパズルには不正解がないため、
          （一筆で通れなければ戻れるようにプログラムされていました）
          正解したときのめでたい感じをいかに演出するかが重要でした。 <br />
          各マスのアイテムを全部拾う方式にするか何かを繋ぐ方式にするか迷ったけれど、
          後戻りできそうという点を優先して繋ぐ方式に。 <br />
          電球を線で繋いで全部繋ぐことができるとぱっと光るという設定になりました。
          <br />
          また、斜めに通れなさを表現するため、各マスの端にさりげなく壁を置いてあります。
          <br />
        </p>
        <h2>レーザービーム</h2>
        <div className="flex-row">
          <img
            alt="レーザービームの原案（再現）"
            src={require("./images/thinkthink_laser_draft.gif")}
          />
          <img
            alt="レーザービームの実装"
            src={require("./images/thinkthink_laser.gif")}
          />
        </div>
        <p>
          ※とりいは画面の画像素材のみを制作し、実際のアプリ上の動きは花まるラボのプログラミングチームの方が実装してくれました。
          <br />
        </p>
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
          軸と歯車のイメージを利用しています
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
          <img src={projects.image} alt={projects.title} />
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
      <Helmet>
        <title>Xemono - {Projects.title}</title>
      </Helmet>
      <ContentBox theme="black">
        <Navi />
        <h1>Projects</h1>
      </ContentBox>
      <ContentBox theme="white">
        <h1>{Projects.title}</h1>
        <img src={Projects.image} alt={Projects.titleya} />
        <p>{Projects.content}</p>
      </ContentBox>
      <BackNavi />
    </>
  );
};

export default Projects;
