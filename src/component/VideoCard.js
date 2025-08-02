import React from "react";
import "./VideoCard.style.css";
import videoData from "../json.json";

const VideoCard = ({ id: videoId }) => {
  const video = videoData.find((item) => item.id === String(videoId));
  return (
    <div className="total-box">
      <h3 style={{padding:"20px 20px 0 20px", fontWeight:"bolder"}}>My Playlist</h3>
      <div className="video-box">
        <div className="video">
          <iframe
            width="720"
            height="405"
            src={video.embedUrl}
            title={video.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="video-description">
          <h3>Title</h3>
          <h5>{video.title}</h5>
          <h3>Artists</h3>
          <h5>{video.Artists}</h5>
          <h3>Producer</h3>
          <h5>{video.Producer}</h5>
          <h3>Genre</h3>
          <h5>{video.Genre}</h5>
          <h3>Release Date</h3> <h5>{video.ReleaseDate}</h5>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
