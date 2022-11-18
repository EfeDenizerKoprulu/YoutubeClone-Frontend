import React from "react";
import "./card.css";

export function Card(props) {
  return (
    <>
      <div className="videoBox">
        <div className="thumbnailInfo">
          <img src={props.img} alt="Thumbnail" className="videoThumbnail" />
          <p>{props.duration}</p>
        </div>
        <div className="videoInfo">
          <img src={props.logo} alt="Channel Logo" className="video_channel" />
          <div>
            <h2>
             {props.title}
            </h2>
            <h3 title={props.channel}>{props.channel} </h3>
            <p>
              {props.views} views • {props.uploadTime} ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
