import "./form.styles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
    <form action="https://formspree.io/f/mdovkjvk" method="POST">
    <label >Your Name</label>
    <input type="text" name="Your Name"/>
    <label >Email</label>
    <input type="email" name="email" />
    <label >Subject</label>
    <input type="text" name="subject"/>
    <label >Message</label>
    <textarea rows="6" placeholder="Type Your Message" name="message" />
    <button className="btn">Submit</button>
    </form>
    </div>
  )
}

export default Form;