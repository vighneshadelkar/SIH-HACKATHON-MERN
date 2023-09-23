import React, { useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar2";
import Video1 from "../../videos/1st.mp4";
import Video2 from "../../videos/2nd.mp4";
import Video3 from "../../videos/3rd.mp4";
import vd1img from "../../images/video1img.jpg";
import vd2img from "../../images/video2img.jpg";
import vd3img from "../../images/video3img.jpg";
import "./Videos.css";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoData = [
    {
      id: 1,
      title: "Child Rights Awareness",
      image: vd1img,
      url: Video1,
    },
    {
      id: 2,
      title: "Right To Freedom",
      image: vd2img,
      url: Video2,
    },
    {
      id: 3,
      title: "The Little Activist",
      image: vd3img,
      url: Video3,
    },
    {
      id: 4,
      title: "Child Rights Awareness",
      image: vd1img,
      url: Video1,
    },
    {
      id: 5,
      title: "Right To Freedom",
      image: vd2img,
      url: Video2,
    },
    {
      id: 6,
      title: "The Little Activist",
      image: vd3img,
      url: Video3,
    }
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="videoContainer">
      <Navbar2 />
      <div className="cdWrapper">
        <h2 className="homeTitle">Modules</h2>
        <div className="videoWrapper">
          {videoData.map((video) => (
            <div
              className="video-card"
              key={video.id}
              onClick={() => handleVideoClick(video)}
            >
              <video
                width="800"
                height="500"
                className="hidden-video"
                src={video.url}
                title={video.title}
                controls
                muted
                autoPlay
              />
              <img
                src={video.image}
                alt={video.title}
                className="videoImg"
              />
              <h3>{video.title}</h3>
            </div>
          ))}
          {selectedVideo && (
            <div className="modal">
              <div className="modal-content">
                <button className="close-btn" onClick={closeModal}>
                  <span className="X"></span>
                  <span className="Y"></span>
                  <div className="close">Close</div>
                </button>
                <iframe
                  width="800"
                  height="500"
                  src={selectedVideo.url}
                  title={selectedVideo.title}
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
