import  "./work-cards.styles.css"
import React from 'react'

import ProjectCardData from "./work-card-data"
import WorkCards from "./work-cards"
const Workhome = () => {

const data = ProjectCardData.filter((item , index) => index <3 )
   console.log(data) 
  return (
    <div className="work-container">
    <h1 className="project-heading"> Projects</h1>
    <div className="project-container">
    {data.map((data , index)=>{
        return (<WorkCards items={data} key={index} /> )
    })}
    </div>
   
    </div>
  )
}

export default Workhome ;