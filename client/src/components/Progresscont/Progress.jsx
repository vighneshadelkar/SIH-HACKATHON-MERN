import React from "react";
import "./Progress.css";

export default function Progress() {
  return (
    <div className="progress" data-aos="fade-down" data-aos-duration="500">
      <div className="progressWrapper">
        <div className="progressText">
          <small>Hi, Vighnesh!</small>
          <h1>You have completed 6 lessons this week</h1>
          <button className="pg-btn">SEE ALL</button>
        </div>
        <div className="cards">
          <div
            className="cardContainer"
            data-aos="zoom-in-left"
            data-aos-duration="750"
          >
            <div className="card" id="cd1">
              <h2 className="title">Title</h2>
              <h3>Design Composition</h3>
              <span>100% COMPLETED</span>
            </div>
          </div>
          <div
            className="cardContainer"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <div className="card" id="cd2">
              <div className="cardHead">
                <h2 className="title">Title</h2>
              </div>
              <h3>Design Composition</h3>
              <span>100% COMPLETED</span>
            </div>
          </div>
          <div
            className="cardContainer"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <div className="card" id="cd3">
              <h2 className="title">Title</h2>
              <h3>Design Composition</h3>
              <span>100% COMPLETED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
