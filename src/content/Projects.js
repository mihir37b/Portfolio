import React from "react";
import "./Projects.css";
import capstone from "../assets/capstone.png";
import ecom from "../assets/ecom.png";
import howsmyair from "../assets/howsmyair.png";

let projectInfo = [
  {
    title: "Al Goes Exploring",
    desc: "A gamified method of teaching basic sorting algorithms, designed to make learning fun and more interesting for kids",
    img: capstone,
    projectLink: "https://algosort.herokuapp.com/",
    github: "https://github.com/Winter-Net-Is-Coming/Winter-Net-Is-Coming",
  },
  {
    title: "Bowsers Wine Store",
    desc: "An ecommerce website for purchasing wine. Users can create accounts, maintain a cart and organize by catagories",
    img: ecom,
    projectLink: "https://aqueous-plateau-75960.herokuapp.com/",
    github: "https://github.com/bowsers-brawlers/GraceShopper",
  },
  {
    title: "How's My Air?",
    desc: "A web app that allows users to see the pollutant levels for any location visualized. More information about each pollutant is provided.",
    img: howsmyair,
    projectLink: "https://60b16c86e854fe00076e0493--howsmyair.netlify.app/",
    github: "https://github.com/mihir37b/PollutionViz",
  },
];

export default function Projects() {
  return (
    <div className="card-list" id="projects">
      <h1>My Projects</h1>
      <div className="one">
        {projectInfo.map(({ title, desc, img, projectLink, github }) => (
          <div className="card-container">
            <div className="image-container">
              <img src={img} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h2>{title}</h2>
              </div>
              <div className="card-body">
                <p>{desc}</p>
              </div>
            </div>
            <div className="btn">
              <button>
                <a href={projectLink}>View Project</a>
              </button>
              <button>
                <a href={github}>View Github</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
