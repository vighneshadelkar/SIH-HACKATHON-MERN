import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Blogpg.css";
import Navbar2 from '../../components/Navbar/Navbar2';
import Feed from '../../components/BlogFeed/Feed';

export default function Blogpg() {
  return (
    <div className="blogpageContainer">
        <div className="blogpageWrapper">
            <Sidebar/>
            <div className="main">
                <Navbar2/>
                <Feed/>
            </div>
        </div>
    </div>
  )
}
