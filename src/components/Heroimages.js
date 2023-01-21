import React from 'react'
import IntroImg from "../assests/bg-1.jpg"
import { Link  } from 'react-router-dom'
import "./Heroimages.styles.css"
const Heroimages = () => {
  return (
    <div className='hero'>
      <div className="mask">
      <img src={IntroImg} className='intro-img' alt="Intro-Img" />
      </div>
      <div className="content">
      <p>HI , I'M A FREELANCER</p>
      <h1>React Developer.</h1>
      <div>
      <Link to="/project" className='btn'>Projects</Link>
      <Link to="/contact" className='btn btn-light'>Contacts</Link>
      </div></div>
    </div>
  )
}

export default Heroimages
