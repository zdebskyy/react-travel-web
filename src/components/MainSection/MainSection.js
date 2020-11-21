import React from "react";
import "./MainSection.css";
import "../../App.css";

const MainSection = () => {
  return (
    <div className="main-container">
      <video src="video/video-1.mp4" autoPlay loop muted />
      <h1>Your travel begins from here</h1>
      <p>Are you with me ?</p>
    </div>
  );
};

export default MainSection;
