import React from "react";
import "./Leaderboard.css";
import Person1 from "../../images/person1.jpg"

export default function Leaderboard() {
  const players = [
    "Vighnesh Adelkar",
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Davis",
    "Chris Brown",
    "Sarah Wilson",
    "David Lee",
  ];

  return (
    <div className="ldContainer">
      <div className="ldWrapper">
        <h1>Leaderboard</h1>
        <div className="ldList">
          {/* <div className="heading">
            <h2 className="rank">Rank</h2>
            <h2 className="playerName">Players</h2>
          </div> */}

          {players.map((player, index) => (
            <div key={index} className="ldItem">
                <div className="profImgDiv">
                    <img src={Person1} alt="" className="profImg" />
                  </div>
              <h2 className="rank">{index + 1}</h2>
              <h2 className="playerName">{player}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
