import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Blogpg.css";
import Navbar from '../../components/Navbar/Navbar';
import Courses from '../../components/Courses/Courses';

export default function Blogpg() {
  return (
    <div className="blogpageContainer">
        <div className="blogpageWrapper">
            <Sidebar/>
            <div className="main">
                <Navbar/>
                <Courses/>
            </div>
        </div>
    </div>
  )
}
