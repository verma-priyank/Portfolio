import "./Pricing.styles.css"
import { Link } from "react-router-dom"
import React from 'react'

const Pricing = () => {
  return (
    <div className="pricing">
    <h1 className="skills">Skills</h1>
    <div className="card-container">
    
    <div className="card">
    <h3>- Languages - </h3>
    
    <span className="bar"></span>
    
    <p className="">- HTML -</p>
    <p>- CSS -</p>
    <p>- JavaScript -</p>
    <p>- TypeScript -</p>
    <p>- SQL -</p>
    <p>- EJS -</p>
    <Link to="/contact" className="btn">Know More.</Link>
    </div>
    <div className="card">
    <h3>- Framework  and Libraries  -</h3>
    <span className="bar"></span>
    <p className="">- React.Js -</p>
    <p>- Redux -</p>
    <p>- jQuery -</p>
    <p>- Bootstrap -</p>
    <p>- Express.js -</p>
   <p>&nbsp;</p>
    <Link to="/contact" className="btn">Know More</Link>
    </div>
    <div className="card">
    <h3>- Other Skills and DB-</h3>
    
    <span className="bar"></span>
    <p className="">- Firebase -</p>
    <p>- MongoDB -</p>
    <p>- Wordpress -</p>
    <p>- Version Control(Git) -</p>
    <p>- Netlify -</p>
    <p>- Stripe -</p>
    <Link to="/contact" className="btn">Know More</Link>
    </div>
    </div>
      
    </div>
  )
}

export default Pricing;
