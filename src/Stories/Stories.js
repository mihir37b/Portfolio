import React, { useState } from "react";
import "./Stories.css";
import pic3 from "../assets/phot3.png";
import pic2 from "../assets/photo2.jpeg";
import pic1 from "../assets/photo1.png";

let storyInfo = [
  {
    date: "2020",
    img: pic2,
  },
  {
    date: "2021",
    img: pic1,
  },
  {
    date: "2019",
    img: pic3,
  },
];

export default function Stories({ closeStory }) {
  const [storyIndex, setStoryIndex] = useState(0);

  function onClickOffStory(element) {
    if (element.className === "story-container") closeStory();
  }

  console.log(storyIndex);
  function changeStory(e) {
    if (storyIndex === storyInfo.length - 1) {
      closeStory();
    }
    if (e.clientX >= window.innerWidth / 2) {
      setStoryIndex((value) => value + 1);
    } else {
      if (storyIndex === 0) {
        closeStory();
      } else {
        setStoryIndex((value) => value - 1);
      }
    }
  }
  return (
    <div onClick={(e) => onClickOffStory(e.target)} className="story-container">
      <div className="story">
        <div
          onClick={(e) => {
            changeStory(e);
          }}
          className="title"
        >
          <h5> mihirbommakanti</h5>
          <img src={storyInfo[storyIndex].img} alt="hi" />
          <h1 className="story-text">
            I attended college at the Univeristy at Buffalo and majored in
            Biological Sciences
          </h1>
        </div>
      </div>
    </div>
  );
}
