import React from "react";
import "./Stories.css";
import pic3 from "../assets/phot3.png";
import pic2 from "../assets/photo2.png";
import pic1 from "../assets/photo1.png";

let storyInfo = [
  {
    date: "2020",
    img: pic1,
  },
  {
    date: "2021",
    img: pic2,
  },
  {
    date: "2019",
    img: pic3,
  },
];

export default function Stories({ closeStory }) {
  function onClickOffStory(element) {
    if (element.className === "story-container") closeStory();
  }
  return (
    <div onClick={(e) => onClickOffStory(e.target)} className="story-container">
      <div className="story">
        <div className="title">
          <strong>Mihir Bommakanti</strong>
          <img src={storyInfo[0].img} alt="hi" />
        </div>
      </div>
    </div>
  );
}
