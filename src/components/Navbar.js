import "./Navbar.styles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const [color, setcolor] = useState(false);
  const handlClick = () => {
    setclick(!click);
  };
  const handleColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", handleColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/10K-2lW4_q6nEtu2PwpskEjSFWXEJ2KFU/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      <div className="hamburger" onClick={handlClick}>
        {!click ? (
          <FaBars size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
