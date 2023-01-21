import  "./work-cards.styles.css"
import React from 'react'

import { NavLink  , Link} from "react-router-dom"
const WorkCards = (props) => {
    console.log(props.items)
    const {title ,imgsrc , text , View ,source } = props.items
  return (
    <div className="project-card">
    <img src={imgsrc} alt="Project" />
    <h2 className="project-title">{title}</h2>
    <div className="pro-details">
    <p>{text}</p></div>
    <div className="pro-btns">
   <a href={View} target="_blank" className="btn" rel="noreferrer">View</a>
   <a href={source} target="_blank" className="btn" rel="noreferrer">Source</a>
    
    </div>
    </div>
  )
}

export default WorkCards ;