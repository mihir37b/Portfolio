import React from "react";
import "./NavBar.css";

import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <div>
      <section className="navbar">
        <Link
          className="navbar-item"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="navbar-item"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="navbar-item"
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
        >
          Contact
        </Link>
      </section>
    </div>
  );
}
