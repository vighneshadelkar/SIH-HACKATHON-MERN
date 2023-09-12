import React, { useEffect, useState } from "react";
import Post from "../Blogcard/Post";
import Postdata from "../../Data/Postdata";
// import Share from "../Share/Share";
import "./Feed.css";

export default function Feed() {

  const [Posts, setPosts] = useState();

  useEffect(() => {
    getPosts();
  }, [Posts]);

  async function getPosts() {
    const res = await fetch("http://localhost:5000/post");

    const result = await res.json();

    if (!res) {
      console.log("error");
    } else {
      setPosts(result);
    }
  }

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* <Share /> */}
        <h2>Blogs</h2>
        <hr></hr>
        {Postdata.map((item) => {
          return <Post key={item._id} {...item} />;
        })}
      </div>
    </div>
  );
}
