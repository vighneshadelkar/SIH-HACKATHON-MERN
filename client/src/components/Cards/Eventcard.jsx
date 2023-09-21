import React from 'react';
import cd1 from "../../images/cd1.jpg";

import "./Eventcard.css";

export default function Eventcard() {
  return (
    <div className="cd3">
        <div className="cd3Wrapper" data-aos="zoom-in">
            {/* <div className="imgDiv"> */}
                <img src={cd1} alt="" srcset="" />
            {/* </div> */}
            <div className="cd3Text1">
                <h2 className="title">Maths Olympiad</h2>
                <p className="cd3text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className="timing">8:00 AM - 11:00 AM</p>
            </div>
            <div className="dateDiv">
                <h1 className="date">20</h1>
                <h2 className="dateMonth">October</h2>
            </div>
        </div>
    </div>
  )
}
