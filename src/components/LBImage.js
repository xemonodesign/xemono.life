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
          />
        )}
      </div>
    );
  }
}
