import React from "react";

export default class Slide extends React.Component  {
  componentDidMount () {
    const script = document.createElement("script");
    script.className = "speakerdeck-embed";
    script.dataset.id = this.props.dataID; 
    script.dataset.ratio = "1.41436464088398";
    script.src = "//speakerdeck.com/assets/embed.js";
    script.async = true;
    this.instance.appendChild(script);
  }
    render() {
        return (
          <div ref={el => (this.instance = el)} />
        );
    }
};

