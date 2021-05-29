import React from "react";
import "./MyStory.css";
import profilePic from "./profile_pic.jpeg";
import Navbar from "../NavBar";

export default function MyStory({ openStory }) {
  return (
    <div className="cd-container">
      <div className="cover-image">
        <img src={profilePic} onClick={(e) => openStory()} alt="headshot" />
      </div>
      <h1 className="test">Mihir Bommakanti</h1>
      <Navbar />
    </div>
  );
}
