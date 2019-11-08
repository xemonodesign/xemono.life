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
              <div class="image-caption">
                <a class="image-caption-name" href="https://twitter.com/saetsukura">
                  <p class="image-caption-title">絵┃</p>
                  <h1 class="image-caption-title">津倉冴</h1>
                  <p class="image-caption-title">(@saetsukura)</p>
                </a>
                <h1 class="image-caption-contents">筋肉質な男性と凛とした女性を描くのが得意です。ネット上にイラストを投稿して10年。</h1>
              </div>
            }
          />
        )}
      </div >
    );
  }
}
