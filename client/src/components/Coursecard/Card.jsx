import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div
      className="cardContainer"
      data-aos="zoom-in-right"
      data-aos-duration={props.time}
    >
      <div className="card">
        <div className="cardImgDiv">
          <img src={props.image} alt="" className="cardImg" />
        </div>
        <h2 className="title">Title</h2>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {/* <div class="progress-bar" style="width: 100%"></div> */}
        </div>
        <span>100% COMPLETED</span>
        <button className="startbtn">LEVEL COMPLETED</button>
      </div>
    </div>
  );
}
