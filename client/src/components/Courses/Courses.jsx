import React from "react";
import Card from "../Coursecard/Card";
import "./Courses.css";
import img1 from "../../images/cd1.jpg";
import img2 from "../../images/cd2.jpg";

export default function Courses() {

  return (
    <div className="coursesContainer">
      <div className="coursesWrapper">
        <Card image={img1} access={"unlocked"} time={"700"}/>
        <Card image={img2} access={"unlocked"} time={"1400"}/>
        <Card image={img1} access={"locked"} time={"2100"}/>
        <Card image={img2} access={"locked"}  time={"2800"}/>
      </div>
    </div>
  );
}
