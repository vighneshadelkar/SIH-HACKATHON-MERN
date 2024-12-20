import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Profile.css";
import Navbar2 from "../../components/Navbar/Navbar2";
import Progress from "../../components/Progresscont/Progress";
import Stats from "../../components/Stats/Stats";

export default function Profile() {

  return (
    <div className="profileConatiner">
      <div className="profileWrapper">
        <Sidebar />
        <div className="main">
          <Navbar2 />
          <h2>My Progress</h2>
          <Progress />
          <div className="statscontainer">
            <h2>Statistics</h2>
            <Stats />
          </div>
        </div>
      </div>
    </div>
  );
}
