import React, { useState } from "react";
import "./Videos.css";
import Navbar2 from "../../components/Navbar/Navbar2";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoData = [
    {
      id: 1,
      title: "Video 1",
      url: "https://img.youtube.com/vi/j_5hW7d0YCQ/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://img.youtube.com/vi/j_5hW7d0YCQ/hqdefault.jpg",
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://img.youtube.com/vi/j_5hW7d0YCQ/hqdefault.jpg",
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://img.youtube.com/vi/j_5hW7d0YCQ/hqdefault.jpg",
    },
    {
      id: 5,
      title: "Video 5",
      url: "https://img.youtube.com/vi/j_5hW7d0YCQ/hqdefault.jpg",
    },
    {
      id: 6,
      title: "Video 6",
      url: "https://img.youtube.com/vi/j_5hW7d0YCQ/hqdefault.jpg",
    },
    {
      id: 7,
      title: "Video 1",
      url: "https://img.youtube.com/vi/j_5hW7d0YCQ/hqdefault.jpg",
    },
    {
      id: 8,
      title: "Video 2",
      url: "https://img.youtube.com/vi/j_5hW7d0YCQ/hqdefault.jpg",
    },
  ];

  const handleVideoClick = (video) => {
    const url = video.url;
    const videoId = url.match(/\/vi\/([^/]+)/)[1];
    setSelectedVideo(videoId);
    console.log(selectedVideo);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };
  return (
    <div className="videoContainer">
      <Navbar2 />
      <h2 className="homeTitle">Modules</h2>
      <div className="videoWrapper">
        {videoData.map((video) => (
          <div
            className="video-card"
            key={video.id}
            onClick={() => handleVideoClick(video)}
          >
            <h3>{video.title}</h3>
            <img src={video.url} alt={video.title} />
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
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title={selectedVideo.title}
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
