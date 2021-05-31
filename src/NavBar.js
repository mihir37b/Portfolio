import React, { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <section className="navbar">
        <a href="/about" className="navbar-item">
          About
        </a>
        <a href="/portfolio" className="navbar-item">
          Portfolio
        </a>
        <a href="/contact" className="navbar-item">
          Contact
        </a>
      </section>
    </div>
  );
}
