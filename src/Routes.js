import React from "react";
import Skills from "./content/Skills";
import Projects from "./content/Projects";
import Contact from "./content/Contact";
import "./App.css";
import App from "./App";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
