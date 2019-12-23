import React from "react";
import { Link } from "react-router-dom";
import ContentBox from "./components/ContentBox";
import Navi from "./components/Navi";
import BackNavi from "./components/BackNavi";
import Helmet from "react-helmet";

import "./App.css";

const PROJECTS = [
  {
    id: "feminist",
    title: "フェミニストバッジ＆Tシャツ",
    image: require("./images/feminist/badge_cover.png"),
    excerpt: (
      <>
        <p>
          フェミニストのためのグッズとして、バッジ二種とTシャツ一種のデザインを請け負いました。
        </p>
      </>
    ),
    content: (
      <>
        <div className="feminist">
          <ul>
            <li>協力期間:2019年8月 ~</li>
            <li>カテゴリ:グッズデザイン</li>
            <li>ディレクション:とりいめぐみ</li>
            <li>デザイン:庭石</li>
          </ul>
          <p>
            フェミニストのためのグッズとして、バッジ二種とTシャツ一種のデザインを請け負いました。
          </p>
          <h2>ご依頼内容</h2>
          <p>
            ご依頼は、“steady as she goes”および”I am a
            breadwinner“という標語を掲げたバッジを作ってほしいとのことでした。
            <br />
            “steady as she
            goes”の方はスタートレックのようなレトロSF風の雰囲気で、スピード感のある影をつけてほしいというご指定、”I
            am a breadwinner“の方はデザイン指定なしでした。
            <br />
            結果的に、”I am a
            breadwinner“のバッジのデザイン案としてご提案したもののうちから二種類を気に入ってくださり、そちらはTシャツにしたいと言っていただきました。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/badge.jpeg")}
              alt="バッジ."
            />
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/shirt.jpeg")}
              alt="シャツ."
            />
          </div>
          <h2>①“steady as she goes”バッジ</h2>
          <p>
            この標語は本来航海用語で、「針路を保て」「そのまま直進」という意味です。船を指す”she”をここでは女性にかけ、女性たちに自分の望む道を進むよう呼びかける標語です。
            <br />
            ご依頼者にとってそれがどういう言葉なのか、そのメッセージ内容とビジュアルイメージがご本人の中でどう繋がっているのかを考え、具体化することを意識しました。
            <br />
            レトロSF風のものだけでなく、宇宙をイメージさせるより現代的な雰囲気のものや、船をモチーフとしたものなどを取り混ぜていくつかご提案しました。
            <br />
            何パターンかヴァリエーションを揃えてご提案し、その中からお選びになる傾向を見て、ご希望の方向性を絞り込み、更にご提案をしていきました。
            <br />
            その中で、スケールの大きいもの、堂々としたもの、スピード感のあるものというお好みがあることが見えてきたので、それを具体化することを心がけて作っています。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={require("./images/feminist/SHEbadge_plan_1.jpeg")}
              alt="steady as she goesバッジの案1."
            />
          </div>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/SHEbadge_plan_2.jpeg")}
              alt="steady as she goesバッジの案2."
            />
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/SHEbadge_plan_3.jpeg")}
              alt="steady as she goesバッジの案3."
            />
          </div>

          <h2>②”I am a breadwinner“バッジ</h2>
          <p>
            “breadwinner”とは稼ぎ手、大黒柱のことです。一家の大黒柱と言えば男性がイメージされがちですが、女性が自らの食い扶持を稼いでいることを称揚する標語です。
            <br />
            こちらもメッセージ内容への理解を深め、それを具体化することに努めました。
            <br />
            デザインは自由にとのことだったので、文字だけのもの、（“bread”なので）パンをモチーフにしたもの、（パンのかわいらしいイメージから）かわいいもの、自分自身が稼ぎ手であるという誇りが表せるように勲章風にしたもの、小麦をモチーフにした装飾のあるもの、（“winner”=「勝者」のイメージから）古代風のものなど幅広い案をお出ししました。
            <br />
            かわいいデザインのものが選ばれたので、かわいくてゆるい雰囲気を出せるよう、文字を手書きにして色もシンプルにしています。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/breadbadge_plan_1.jpeg")}
              alt="I am a breadwinner バッジの案1."
            />
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/breadbadge_plan_2.png")}
              alt="I am a breadwinner バッジの案2."
            />{" "}
          </div>
          <h2>③”I am a breadwinner“Tシャツ</h2>
          <p>
            ”I am a
            breadwinner“バッジのデザイン案のひとつとして、旗を掲げた女神を出したところ、その柄でTシャツを作ることが決まりました。
            <br />
            誇り高い雰囲気と格調が出せるよう、フォント選びにも心を配りました。
            <br />
            また、計三種類のグッズができることになるので、買い手の方々がその中からご自分のお好みに合ったものを選べるよう、雰囲気にヴァリエーションをつけることを意識しています。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/shirt_plan_1.png")}
              alt="Tシャツの案1."
            />
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/shirt_plan_2.png")}
              alt="Tシャツの案2."
            />
          </div>
          <p>
            いずれのデザインも、絵柄と文字が決まってからは多彩なカラーリングの選択肢をご用意し、そこから選んでいただきました。
            <br />
            デザインのステップを進めるごとに様々なパターンをご提案することで、ご希望に沿ったものができたと思っていただけるよう心がけています。
            <br />
            データを見ていただくだけでなく、実際に印刷してバッジのサンプルに貼り付けたものを制作し、実物になった時のイメージを持てるようにして見ていただきました。
          </p>
          <p>
            いずれのグッズも、メッセージ内容を考えて、ご依頼者の方が楽しんで堂々と着けられるよう心がけて作りました。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/badge.jpeg")}
              alt="バッジ."
            />
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/feminist/shirt.jpeg")}
              alt="シャツ."
            />
          </div>
          <h2>発注者からのコメント</h2>
          <blockquote>
            <p>
              ほぼ丸投げの発注を素敵な作品にしていただきありがとうございました。スローガンの意図をしっかりと考えてくださり大変嬉しいです。図案を多数出していただいたほか背景・色味等のパターン要望にも対応していただき、コミュニケーションをとりながら納得がいくまでデザインを練ることができました。またスローガン思いついたら発注します！
            </p>
          </blockquote>
        </div>
      </>
    )
  },
  {
    id: "touhou",
    title: "東方我楽多叢誌",
    image: require("./images/touhou/main.png"),
    excerpt: (
      <>
        <p>
          ウェブメディア「東方我楽多叢誌」のプラットフォーム作成を請け負いました。
        </p>
        <p>
          「東方Projectらしさ」を全力で表現するとともに、高機能かつ爆速のサイトと管理のしやすさを両立させました。
        </p>
      </>
    ),
    content: (
      <>
        <div className="touhou">
          <ul>
            <li>協力期間:2019年7月 ~</li>
            <li>カテゴリ:ウェブメディア+CMS</li>
            <li>ディレクション:とりいめぐみ</li>
            <li>デザイン:とりいめぐみ、いいづかやまと</li>
            <li>
              イラスト:津倉冴（
              <a href="https://twitter.com/saetsukura">@saetsukura</a>）
            </li>
            <li>
              コーディング:やなぎ（
              <a href="https://twitter.com/to4_yanagi">@to4_yanagi</a>、
              <a href="https://laughcraft.dev">Portfolio</a>）、かねこ（
              <a href="https://twitter.com/tronperidot">@tronperidot</a>）、るか
            </li>
            <li>ロゴはんこ作成:庭石</li>
            <li>メディア運営:株式会社ワイソーシリアス</li>
          </ul>
          <p>
            ウェブメディア「東方我楽多叢誌」のプラットフォーム作成を請け負いました。
            <br />
            「東方Projectらしさ」を全力で表現するとともに、高機能かつ爆速のサイトと管理のしやすさを両立させました。
            <br />
          </p>
          <p>
            管理者が見慣れた画面で快適に記事を投稿・管理できるよう、基本的なシステムはWordPressを用いつつ、高機能かつ爆速のサイトを実現するためにシステムを大幅に換骨奪胎。
          </p>
          <p>
            東方Projectは「青春を捧げた」ファンも多いとても力のあるIPですが、そんなファンの皆様に楽しんでいただけるよう、隅々まで「東方らしさ」にこだわったデザインを施しました。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={require("./images/touhou/bar.png")}
              alt="津倉冴さんのイラスト集."
            />
          </div>
          <h2>システムの特長</h2>
          <h3>速さにこだわったウェブサイト構成</h3>
          <p>遅い回線でもすぐに記事が表示されます。</p>
          <h3>多言語化対応</h3>
          <p>
            中国語版サイト、英語版サイトなど、言語ごとにサイトを複数同時に立てられ、一括に管理できる仕組みを作りました。
            <br />
            言語ごとに違うサイトを一から作る必要がなく、簡単に多言語に対応できます。
            <br />
            例1:記事の翻訳を他言語版に載せる際、写真は同じものを使いたい
            <br />
            例2:特定の記事を中国語サイトにだけ表示させたい
            <br />
            といったことが簡単にできます。
          </p>
          <h3>カスタム投稿タイプ</h3>
          <p>
            WordPressはデフォルトでは投稿できる記事の種類が少ないため、大幅な拡張を行い、要望に合わせて様々な欄を設けました。
            <br />
            小説、インタビュー、漫画、キャラ紹介ページなどを作成しました。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/touhou/custom_1.png")}
              alt="妖世刃弔華."
            />
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/touhou/custom_2.png")}
              alt="東方智霊奇伝."
            />{" "}
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/touhou/custom_3.png")}
              alt="ZUN氏のインタビュー1."
            />{" "}
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/touhou/custom_4.png")}
              alt="ZUN氏のインタビュー2"
            />
          </div>
          <h3>下書きプレビュー機能</h3>
          <p>
            このカスタマイズに合わせて、下書きプレビュー機能を改善しました。
            <br />
            記事を公開する前に、本番サイトでの見え方を確認できます。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={require("./images/touhou/draft.png")}
              alt="下書きプレビュー."
            />
          </div>
          <h3>広告表示</h3>
          <p>
            広告を設定できるようにしました。
            <br />
            差し込み型広告や全面広告など、自由な型の広告を表示できます。
          </p>
          <h3>アナリティクス</h3>
          <p>
            サイトへの集客やページビュー、広告クリックなどの情報を収集して分析できます。
          </p>
          <h3>SEO</h3>
          <p>SEOの知見を活かし、検索で上位に出てくるページを作りました。</p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={require("./images/touhou/seo.png")}
              alt="下書きプレビュー."
            />
          </div>
          <h3>OGP設定</h3>
          <p>
            OGP(記事をSNS等でシェアした際のタイトルや画像、説明文)を記事の筆者が個別に設定できるようにしました。
          </p>
          {/* ここに画像1枚おく */}
          <h3>動画プレーヤーの差し込み</h3>
          <p>
            サイト上にYouTubeプレイヤーを表示できます。
            <br />
            イベント時にその生放送を流すなどの使い方ができます。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={require("./images/touhou/movie_player.gif")}
              alt="動画プレーヤー."
            />
          </div>
          <h3>Twitter等の埋め込み</h3>
          <p>記事内にTwitterやニコニコ動画、Youtubeの埋め込みができます。</p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={require("./images/touhou/widget.png")}
              alt="コンテンツの埋め込み."
            />
          </div>
          <h3>イラストギャラリー</h3>
          <p>
            小説のページにイラストを挿入した場合、自動でイラストギャラリーを生成します。
          </p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/touhou/illust_gallery_1.png")}
              alt="イラストギャラリー."
            />
            <img
              style={{ maxWidth: "49%" }}
              src={require("./images/touhou/custom_2.png")}
              alt="共有の様子."
            />
          </div>
          <h3>高いデザイン性</h3>
          <p>弊社のデザイナーの力で、美しいデザインを実現しました。</p>
          <div style={{ flexDirection: "row" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={require("./images/touhou/title_hanko.gif")}
              alt="タイトルロゴを判子で作成."
            />
          </div>
          <h2>お客様の声</h2>
          <blockquote>
            <p>
              要件定義からあらゆることに付き合って頂きました。技術そのもののみならず、コンテンツについても理解と熱意を持って一緒にサイトを作り上げてくれました。コンテンツについて一緒に考えてくれる制作会社は稀有なので、非常におすすめできます。
            </p>
            <p>株式会社ワイソーシリアス 代表 斉藤大地</p>
          </blockquote>
          <a
            className="button"
            href="https://touhougarakuta.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            東方我楽多叢誌 へ
          </a>
          <a
            className="button"
            href="https://twitter.com/touhou_station"
            target="_blank"
            rel="noopener noreferrer"
          >
            公式Twitter （@touhou_station）
          </a>
        </div>
      </>
    )
  },
  {
    id: "niramekko",
    title: "ヤングアニマルZERO連載漫画「ニラメッコ」EXITコラボ動画",
    image: require("./images/niramekko/main.png"),
    excerpt: (
      <>
        <p>
          株式会社白泉社様から、漫画「ニラメッコ」とお笑いコンビEXIT様のコラボ動画の作成を請け負いました。
        </p>
        <p>
          TikTokやTwitter、YouTubeなどへと多方面に展開できるよう、15秒の動画を作成しました。
        </p>
      </>
    ),
    content: (
      <>
        <ul>
          <li>
            協力期間：2018年7月 ~ <br />
          </li>
          <li>カテゴリ：動画</li>
          <li>
            クライアント：
            <a href="http://www.hakusensha.co.jp/">株式会社白泉社</a>
          </li>
          <li>ディレクション： とりいめぐみ</li>
          <li>制作： 庭石</li>
        </ul>
        <p>
          株式会社白泉社様から、漫画「ニラメッコ」とお笑いコンビEXIT様のコラボ動画の作成を請け負いました。
          <br />
          漫画の紹介動画2本と、作中コンビがネタを演じている動画を3組×2本、合計8本の動画を制作いたしました。
          <br />
        </p>
        <p>
          <a href="https://www.younganimal.com/niramekko_exit/">
            「ニラメッコ」
          </a>
          は大人数のキャラクターが力まずに掛け合いをする楽しげな雰囲気と共に、そんな彼らが「人を笑わせる」ことへの真摯さも表現されていて、多面的に楽しめる漫画です。
        </p>
        <h2>紹介動画</h2>
        <p>
          漫画の多面的な魅力を活かすため、キャラクター紹介を中心にしたバージョン（通称チャラver.）とコンビの信頼関係を中心にしたバージョン（通称エモver.）と雰囲気の違う動画を二本作成しました。
          <br />
          チャラverでは大人数でのルームシェアという点を強調し、賑やかさと生活感を意識して制作しました。
          <br />
          エモverではメインコンビに焦点を絞り、「笑い」を支える信頼関係を描く漫画であることを伝えました。
          <br />
          どちらもEXIT様の軽快な掛け合いを載せていただき、ジッターの皆様にも支持をいただいて、合計約2万再生を突破いたしました。（2019年8月時点）
        </p>
        <div style={{ flexDirection: "row" }}>
          <img
            style={{ maxWidth: "49%" }}
            src={require("./images/niramekko/chara.gif")}
            alt="チャラver."
          />
          <img
            style={{ maxWidth: "49%" }}
            src={require("./images/niramekko/emo.gif")}
            alt="エモver."
          />
        </div>
        <h2>ネタ動画</h2>
        <p>
          また「作中コンビのネタをEXIT様がアテレコ」という設定のネタ動画では、掛け合いのテンポの良さを字幕と動きで強調しつつ、キャラクターが現実世界に居るかのような楽しみ方ができるように作成しました。ネタの内容によって変わるEXIT様の演技に合わせ、各コンビの個性を感じてもらえるよう色合いや動きなどを意識し、制作いたしました。
          <br />
          各動画は5万以上の再生をいただき、EXIT様の普段とは違う魅力をお伝えできたかと思います。
        </p>
        <h3>各コンビごと</h3>
        <div style={{ flexDirection: "row" }}>
          <img
            style={{ maxWidth: "33%" }}
            src={require("./images/niramekko/niramekko1.gif")}
            alt="ニラメッコ"
          />
          <img
            style={{ maxWidth: "33%" }}
            src={require("./images/niramekko/itako1.gif")}
            alt="潮来"
          />
          <img
            style={{ maxWidth: "33%" }}
            src={require("./images/niramekko/kadoma1.gif")}
            alt="門真アミーゴ"
          />
        </div>
        <p>
          ・ニラメッコ
          <br />
          ゆるめなシュール系コンビだがツッコミはしっかり入るので、掛け合いが自然と頭に入るよう字幕のタイミングを調整しつつ、ツッコミがオチとしてしっかり決まるような動きや字幕にしました。
        </p>
        <p>
          ・潮来
          <br />
          ダウナー系なので動きも字幕も最小限にし、じわじわとした笑いが伝わるように。色合いも薄暗くしてミステリアスな雰囲気を出しました。
        </p>
        <p>
          ・門真アミーゴ
          <br />
          元気な正統派しゃべくりコンビなので、勢いが伝わるように動きも字幕も大きく、また畳み掛けるボケを気持ちよく楽しめるよう、映像、音声、字幕のタイミングを大事にしました。
        </p>
        <h3>2周目</h3>
        <div style={{ flexDirection: "row" }}>
          <img
            style={{ maxWidth: "33%" }}
            src={require("./images/niramekko/niramekko2.gif")}
            alt="ニラメッコ"
          />
          <img
            style={{ maxWidth: "33%" }}
            src={require("./images/niramekko/itako2.gif")}
            alt="潮来"
          />
          <img
            style={{ maxWidth: "33%" }}
            src={require("./images/niramekko/kadoma2.gif")}
            alt="門真アミーゴ"
          />
        </div>
        <p>
          既に1周目をご覧いただいた方にも楽しんでもらえるよう、内容に合わせて背景や色合いを変え、ネタの空気がより伝わるようにしました。
        </p>
        
        <h2>白泉社 長谷川様のコメント</h2>
        <blockquote>
          限られた素材でしたが、うまく活かしていただきありがとうございます。人形劇風のネタ動画は初見では正直驚きましたが笑、ありきたりな見た目だと流されてしまうのでこれくらいのインパクトあってよかったです。遊べる企画の際はまたよろしくお願いします！
        </blockquote>
        <a
          className="button"
          href="https://www.younganimal.com/niramekko_exit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          「ニラメッコ」特設サイト
        </a>
      </>
    )
  },
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
        <ul>
          <li>協力期間：2018年6月 ~ </li>
          <li>カテゴリ：動画</li>
          <li>
            クライアント：
            <a href="http://www.hakusensha.co.jp/">株式会社白泉社</a>
          </li>
          <li>ディレクション： とりいめぐみ</li>
          <li>制作： 庭石</li>
        </ul>
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
          マンガPark 「不祥事アイドル」
        </a>
      </>
    )
  },
  {
    id: "heisei_nenpyo",
    title: "平成ゲーム年表",
    image: require("./images/heisei_nenpyo/main1.png"),
    excerpt: (
      <>
        <p>
          ウェブメディア「電ファミニコゲーマー」の平成を締めくくる企画「平成ゲーム年表」のテンプレート作成を請け負いました。
        </p>
      </>
    ),
    content: (
      <>
        <ul>
          <li>協力期間：2019年4月</li>
          <li>カテゴリ：ウェブサイト</li>
          <li>
            クライアント：
            <a href="https://news.denfaminicogamer.jp/">
              株式会社ドワンゴ 電ファミニコゲーマー
            </a>
          </li>
          <li>
            デザイン・コーディング：{" "}
            <a href="https://twitter.com/yamatoiizuka">
              いいづかやまと @yamatoiizuka
            </a>
          </li>
          <li>
            文・写真・編集：{" "}
            <a href="https://twitter.com/denfaminicogame">
              電ファミニコゲーマー編集部 @denfaminicogame
            </a>
          </li>
        </ul>
        <p>
          ウェブメディア「電ファミニコゲーマー」の平成を締めくくる企画「平成ゲーム年表」のテンプレート作成を請け負いました。
        </p>
        <p>
          スワイプにもタップにも反応する使いやすいナビゲーションや、テーマカラーを活かしてシンプルで見やすいデザインを追求しました。
        </p>

        <h2>電ファミ担当者のコメント</h2>
        <blockquote>
          <p>
            担当者が人間性とセンスに欠けており困っていたので、Xemonoさんに依頼しました。
          </p>

          <p>
            すると人間味とセンスにあふれたデザインが返ってきましたので、たいへん満足しております。
          </p>

          <p>今後も困るたびに依頼しようと思います。ありがとうございました。</p>
        </blockquote>

        <a
          className="button"
          href="https://news.denfaminicogamer.jp/heisei-game-chronicle"
          target="_blank"
          rel="noopener noreferrer"
        >
          電ファミ平成ゲーム年表
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
        <ul>
          <li>
            協力期間：2015年4月 ~
            2017年11月（代表鳥居による、株式会社花まるラボ所属時の仕事）
          </li>
          <li>
            担当：Adobe Illustratorを使用したパズルやキャラクターのデザイン
          </li>
        </ul>
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
        <div className="text-box">
          <h1>{Projects.title}</h1>
          <img src={Projects.image} alt={Projects.titleya} />
          {Projects.content}
        </div>
      </ContentBox>
      <BackNavi />
    </>
  );
};

export default Projects;
