import React from "react";
import "./Stats.css";
import StatsChart from "../Chart/StatsChart";
import Calendar from "react-calendar";

export default function Stats() {
  return (
    <div className="stats">
      <div className="statsContainer">
        <div className="Cards">
          <div className="statsCard" >
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
        <h2>My Assignments</h2>
        <ul className="courseList">
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
        </ul>
      </div>
      <div className="col2">
        <Calendar id="calender" />
        <h2>Upcoming</h2>
        <ul className="courseList">
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
          <li className="listItem" data-aos="zoom-in">
            Course 1
          </li>
        </ul>
      </div>
    </div>
  );
}
