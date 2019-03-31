import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";


const RoundBox = props => (
  <div className='flex-column round-box'>
  <Link to={`/workwith/${props.url}`} className="flex-column">
    <div className='round-img'>
      <img src={props.img} />
    </div>
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
    </Link>
  </div>
);

export default RoundBox