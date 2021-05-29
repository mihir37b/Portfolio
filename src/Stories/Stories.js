import React, { useState } from "react";
import "./Stories.css";
import pic6 from "../assets/photo6.png";
import pic5 from "../assets/photo5.jpeg";
import pic4 from "../assets/photo4.png";
import pic3 from "../assets/photo3.jpeg";
import pic2 from "../assets/photo2.jpeg";
import pic1 from "../assets/photo1.jpeg";

let storyInfo = [
  {
    date: "2014",
    month: "Aug.",
    img: pic1,
    caption:
      "I started college at the Univeristy at Buffalo and majored in Biological Sciences",
  },
  {
    date: "2018",
    month: "Jan.",
    img: pic2,
    caption:
      "While In Buffalo, I spent 1 year as a research assistant at The Research Institute on Addictions in Downtown Buffalo",
  },
  {
    date: "2019",
    month: "Feb.",
    img: pic3,
    caption: "Then, I worked as a Certified Pharmacy Technician",
  },
  {
    date: "2020",
    month: "May.",
    img: pic4,
    caption:
      "I've worked previous jobs in the health care industry but managed to lose interest in medicine after each job",
  },
  {
    date: "2020",
    month: "Jul.",
    img: pic5,
    caption:
      "After consideration, I realised I needed a change and decided to explore various careers",
  },
  {
    date: "2021",
    month: "Apr.",
    img: pic6,
    caption:
      "I realised my genuine interest in programming and began teaching myself. Months later, I graduated Fullstack Academy!",
  },
];

export default function Stories({ closeStory }) {
  const [storyIndex, setStoryIndex] = useState(0);

  function onClickOffStory(element) {
    if (element.className === "story-container") closeStory();
  }

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
  let year = new Date().getFullYear();
  let month = new Date().getMonth();

  function getDate() {
    if (year - storyInfo[storyIndex].date > 1) {
      return `${year - storyInfo[storyIndex].date} years ago`;
    } else if (year - storyInfo[storyIndex].date === 1) {
      return `${year - storyInfo[storyIndex].date} year ago`;
    } else if (year - storyInfo[storyIndex].date === 0) {
      return `${storyInfo[storyIndex].month} 2021`;
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
          <h5 className="name"> mihirbommakanti</h5>
          <h5 className="date">{getDate()}</h5>
          <img src={storyInfo[storyIndex].img} alt="hi" />
          <h2 className="story-text">{storyInfo[storyIndex].caption}</h2>
        </div>
      </div>
    </div>
  );
}
