import React from "react";
import { Link } from "react-router-dom";

import "./../App.css";

const PhotoBox = props => (
  <div className='photo-box'>
  <Link to={`/skills/${props.title.toLowerCase()}`} className="flex-row">
    <div style={{flex: "0 0 220px"}}>
      <img alt='' src={props.img} />
    </div>
    <div style={{flex: '3 0 220px'}}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
    </Link>
  </div>
);

export default PhotoBox;
