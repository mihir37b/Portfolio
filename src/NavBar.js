import React from "react";
import "./NavBar.css";

export default function NavBar() {
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
