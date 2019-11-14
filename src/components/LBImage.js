import React from "react";
import Lightbox from "lightbox-react";
import "lightbox-react/style.css"; // This only needs to be imported once in your app
import MainVisual from "./../images/fullsize.jpg";


export default class LBImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button
          className="text-small"
          type="button"
          onClick={() => this.setState({ isOpen: true })}
        >
          イラストをフルサイズで見る
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={MainVisual}
            onCloseRequest={() => this.setState({ isOpen: false })}
            imageCaption={
              <div className="image-caption">
                <a href="https://twitter.com/saetsukura" className="image-caption-name">
                  <h1 className="image-caption-title">
                    <span className="image-caption-drawing">絵┃</span>
                    <span className="image-caption-artist">津倉冴</span>
                    <span className="image-caption-id">(@saetsukura)</span>
                  </h1>
                </a>
                <p class="image-caption-contents"><span class="image-caption-contents-line-1">筋肉質な男性と凛とした女性を描くのが得意です。</span><span class="image-caption-contents-line-2">ネット上にイラストを投稿して10年。</span></p>
              </div>
            }
          />
        )}
      </div>
    );
  }
}
