import "./about-content.styles.css"
import React from 'react'
import { Link } from "react-router-dom";
import pro1 from "../assests/pro1.jpeg"
const Aboutcontent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who Am I</h1>
    <p>I'm a react front-end-developer . I create responsive secure websites for my clients.</p>
    <Link to="/contact" className="btn">Contact</Link>
    </div>
    <div className="right">
    <div className="img-container">
    <div className="img-stack top">
    <img src={pro1} className="img" alt="About" />
    </div>
    <div className="img-stack bottom">
    <img src={pro1} className="img" alt="About" />
    </div>
    </div>
      
    </div>
    </div>
  )
}

export default Aboutcontent;
