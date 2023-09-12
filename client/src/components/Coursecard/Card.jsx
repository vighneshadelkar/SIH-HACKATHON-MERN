import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
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
        <ProgressBar now={100} variant="primary" />

        <span>100% COMPLETED</span>
        <button className="startbtn">LEVEL COMPLETED</button>
      </div>
    </div>
  );
}
