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
        in a piece of classical Latin literature from 45 BC, making it over 2000
        years old. Richard McClintock, a Latin professor at Hampden-Sydney
        College in Virginia, looked up one of the more obscure Latin words,
        consectetur, from a Lorem Ipsum passage, and going through the cites
        ohas roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites o
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
