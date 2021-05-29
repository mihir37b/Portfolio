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
