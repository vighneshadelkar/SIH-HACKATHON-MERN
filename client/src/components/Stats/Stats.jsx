import React from "react";
import "./Stats.css";
import StatsChart from "../Chart/StatsChart";

export default function Stats() {
  return (
    <div className="stats">
      <div className="statsContainer">
        <div className="statsCard">
          <h1>02</h1>
          <p>Courses Completed</p>
        </div>
        <div className="statsCard">
          <h1>02</h1>
          <p>Courses Completed</p>
        </div>
        <div className="statsCard" id="stcd3">
          <div className="statInfo">
            <h1>8.5</h1>
            <p>Hours Spent This Week</p>
          </div>
          <StatsChart />
        </div>
      </div>
    </div>
  );
}
