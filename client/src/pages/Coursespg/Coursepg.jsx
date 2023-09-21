import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Courses from "../../components/Courses/Courses";
import Navbar2 from "../../components/Navbar/Navbar2";
import "./Coursepg.css";

export default function Coursepg() {
  return (
    <div className="coursespgConatiner">
      <div className="coursespgWrapper">
        <Sidebar />
        <div className="main">
          <Navbar2 />
          <h2 className="name">Hello Vighnesh,Welcome Back.</h2>
          <div className="courses" >
          <Courses />
          </div>
        </div>
      </div>
    </div>
  );
}
