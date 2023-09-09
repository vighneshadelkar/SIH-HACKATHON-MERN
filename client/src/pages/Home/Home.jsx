import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid from "../../components/Grid/Grid";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="homeConatiner">
      <div className="homeWrapper">
        <Sidebar />
        <div className="main">
          <Navbar />
          <Grid />
        </div>
      </div>
    </div>
  );
}
