import "./heroimages2.styles.css"
import React from 'react'

const Heroimage2 = (props) => {
  return (
    <div className="hero-img">
    <div className="heading">
    <h1>{props.heading}</h1>
    <p>{props.text}</p>
    </div>
    
    </div>
  )
}

export default Heroimage2