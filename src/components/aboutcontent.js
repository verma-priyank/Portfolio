import "./about-content.styles.css"
import React from 'react'
import { Link } from "react-router-dom";
import pro3 from "../assests/pro3.jpeg"
import pro4 from "../assests/pro4.jpeg"
const Aboutcontent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who Am I ?</h1>
    <p> Hi, I'm Priyank Verma, and I graduated from the Kamla Nehru Institute of Technology in 2022
    with a degree in Electrical Engineering. My interests are in Front End Engineering,
    and I love to create beautiful and performant products with delightful user experiences</p>
    <Link to="/contact" className="btn">Contact</Link>
    </div>
    <div className="right">
    <div className="img-container">
    <div className="img-stack top"> 
    <img src={pro4} className="img" alt="About" />
    </div>
    <div className="img-stack bottom">
    <img src={pro3} className="img" alt="About" />
    </div>
    </div>
      
    </div>
    </div>
  )
}

export default Aboutcontent;
