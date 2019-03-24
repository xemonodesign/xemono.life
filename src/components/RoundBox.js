import React from "react";
import "./../App.css";

const RoundBox = props => (
  <div className='flex-column round-box'>
    <div className='round-img'>
      <img src={props.img} />
    </div>
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  </div>
);

export default RoundBox