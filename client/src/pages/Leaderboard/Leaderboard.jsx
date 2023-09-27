import "./Leaderboard.css";
import Person1 from "../../images/person1.jpg";

export default function Leaderboard() {
  const players = [
    { name: "Vighnesh ", points: 100 },
    { name: "John ", points: 75 },
    { name: "Jane ", points: 90 },
    { name: "Michael ", points: 97 },
    { name: "Emily ", points: 80 },
    { name: "Chris ", points: 95 },
    { name: "Sarah W", points: 85 },
    { name: "David ", points: 70 },
  ];

  // Sort players by points in descending order
  const sortedPlayers = [...players].sort((a, b) => b.points - a.points);
  const sortedPlayers2 = [...sortedPlayers].slice(3);
  console.log(sortedPlayers2);
  console.log(sortedPlayers);

  return (
    <div className="ldContainer">
      <div className="ldItem1">
        <div className="top3Div">
          <div className="top3">
            
            <h1>{sortedPlayers[1].name}</h1>
            <div className="imgDiv">
              <img src={Person1} alt="" className="ldImage" />
            </div>
            <div className="second">
              <p className="points">
                {sortedPlayers[1].points}{" "}
                <span className="pointsText">Points</span>
              </p>
            </div>
          </div>
          <div className="top3">
            <h1>{sortedPlayers[0].name}</h1>
            <div className="imgDiv">
              <img src={Person1} alt="" className="ldImage" />
            </div>
            <div className="first">
              <p className="points">
                {sortedPlayers[0].points}{" "}
                <span className="pointsText">Points</span>
              </p>
            </div>
          </div>
          <div className="top3">
            <h1>{sortedPlayers[2].name}</h1>
            <div className="imgDiv">
              <img src={Person1} alt="" className="ldImage" />
            </div>
            <div className="third">
              <p className="points">
                {sortedPlayers[2].points}{" "}
                <span className="pointsText">Points</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ldWrapper">
        <h1>Leaderboard</h1>
        <div className="ldList">
          {sortedPlayers2?.map((player, index) => (
            <div key={index} className="ldItem">
              <div className="rankLadder">{index + 3}</div>
              <div className="profImgDiv">
                <img src={Person1} alt="" className="profImg" />
              </div>
              <h2 className="playerName">{player.name}</h2>
              {/* <p className="points">Points: {player.points}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
