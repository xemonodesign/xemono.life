import React from "react";
import "./../App.css";

const PhotoBox = props => (
  <div className='flex-row photo-box'>
    <div style={{flex: "0 0 220px"}}>
      <img src={props.img} />
    </div>
    <div style={{flex: '3 0 auto'}}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  </div>
);

export default PhotoBox;
