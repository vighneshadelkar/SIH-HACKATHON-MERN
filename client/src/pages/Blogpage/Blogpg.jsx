import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Blogpg.css";
import Navbar from '../../components/Navbar/Navbar';
import Feed from '../../components/BlogFeed/Feed';

export default function Blogpg() {
  return (
    <div className="blogpageContainer">
        <div className="blogpageWrapper">
            <Sidebar/>
            <div className="main">
                <Navbar/>
                <Feed/>
            </div>
        </div>
    </div>
  )
}
