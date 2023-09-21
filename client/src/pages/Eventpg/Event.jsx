import React from "react";
import "./Event.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar2 from "../../components/Navbar/Navbar2";
import Eventcard from "../../components/Cards/Eventcard";

export default function Event() {
  return (
    <div className="eventContainer">
      <div className="eventWrapper">
        <Sidebar />
        <div className="main">
          <Navbar2 />
          <div className="eventList">
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
          </div>
        </div>
      </div>
    </div>
  );
}
