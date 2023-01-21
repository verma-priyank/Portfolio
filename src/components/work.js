import  "./work-cards.styles.css"
import React from 'react'

import ProjectCardData from "./work-card-data"
import WorkCards from "./work-cards"
const Work = () => {
    
  return (
    <div className="work-container">
    <h1 className="project-heading"> Projects</h1>
    <div className="project-container">
    {ProjectCardData.map((data , index)=>{
        return (<WorkCards items={data} key={index} /> )
    })}
    </div>
   
    </div>
  )
}

export default Work ;