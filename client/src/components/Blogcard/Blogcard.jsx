import React from "react";
import "./Blogcard.css";

export default function Blogcard(props) {
  return (
    <div className="cd2" data-aos="zoom-in" data-aos-duration="500">
      <div className="imgDiv">
        <img src={props.image} alt="home img" className="cdimg" />
      </div>
      <div className="heading">
        "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
        <br></br>
        <div className="author">
          By <span className="name">{props.name}</span> 4 days ago
        </div>
      </div>
    </div>
  );
}
