import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="main-section">
      <h1>My Skills</h1>
      <div className="icons">
        <i class="devicon-react-original-wordmark colored"></i>
        <i class="devicon-redux-original colored"></i>
        <i class="devicon-css3-plain-wordmark colored"></i>
        <i class="devicon-html5-plain-wordmark colored"></i>
      </div>
      <div className="icons">
        <i class="devicon-postgresql-plain-wordmark colored"></i>
        <i class="devicon-express-original-wordmark colored"></i>
        <i class="devicon-javascript-plain"></i>

        <i class="devicon-python-plain-wordmark colored"></i>
      </div>
      <div className="icons">
        <i class="devicon-bootstrap-plain-wordmark colored"></i>
        <i class="devicon-sequelize-plain-wordmark colored"></i>
        <i class="devicon-mocha-plain colored"></i>
        <i class="devicon-heroku-plain-wordmark colored"></i>
      </div>
      <div className="icons">
        <i class="devicon-mongodb-plain-wordmark colored"></i>
        <i class="devicon-graphql-plain-wordmark colored"></i>
      </div>
    </div>
  );
}
