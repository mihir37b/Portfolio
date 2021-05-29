import About from "./content/About";
import Projects from "./content/Projects";
import "./App.css";
import MyStory from "./myStory/MyStory";

function App() {
  return (
    <div className="App">
      <MyStory />
      <About />
      <Projects />
    </div>
  );
}

export default App;
