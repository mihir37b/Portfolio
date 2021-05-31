import Skills from "./content/Skills";
import Projects from "./content/Projects";
import Contact from "./content/Contact";
import "./App.css";
import MyStory from "./myStory/MyStory";
import Stories from "./Stories/Stories";
import { useState } from "react";

function App() {
  const [openStory, setStoriesOpen] = useState(false);

  function openStories() {
    setStoriesOpen(true);
  }
  function closeStories() {
    setStoriesOpen(false);
  }

  return (
    <div className="App">
      <MyStory openStory={openStories} />
      <h2 className="intro">
        <p>
          Hello, my name is Mihir and I am a software engineer form New York. I
          previously worked in the healthcare industry, but after a while, I
          realized it wasn't the industry for me. Click the picture of my face
          to learn more about the transition.{" "}
        </p>
        I've worked on a few projects which can be found below and I am eager to
        work on more. I enjoy working on the frontend, especially with React and
        I have taken a recent interest in understanding the reasoning behind
        User Experience.{" "}
        <a classname="medium" href="https://mihir37b.medium.com/">
          Click here to read more.
        </a>
      </h2>
      <div className="content">
        <Skills />
        <Projects />
        <Contact />
      </div>
      {console.log(openStory)}
      {openStory ? <Stories closeStory={closeStories} /> : ""}
    </div>
  );
}

export default App;
