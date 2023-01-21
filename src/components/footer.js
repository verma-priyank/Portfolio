import React from 'react'
import { FaFacebook, FaGithub, FaHome , FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import "./footer.styles.css"
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-container">
    <div className="left">
    <div className="location">
    <FaHome size={20}
    style={{color:"#fff" ,marginRight:"2rem"}}/>
    <div><p>123 Housing Society</p>
    <p>Lucknow</p>
    </div>
    </div>
    <div className="phone">
    <h4><FaPhone size={20}
    style={{color:"#fff" ,marginRight:"2rem"}}/>1234567890</h4>

    </div>
    <div className="email">
    <h4><FaMailBulk size={20}
    style={{color:"#fff" ,marginRight:"2rem"}}/>priyankverma668@gmail.com</h4>

    </div>
    </div>
    <div className="right">
    <h4>About the company</h4>
    <p>his is me Priyank Verma . I am a frontend Developer.</p>
    <div className="social">
    <FaFacebook size={30}
    style={{color:"#fff" ,marginRight:"2rem"}}/>
    <FaLinkedin size={30}
    style={{color:"#fff" ,marginRight:"2rem"}}/>
    <FaGithub size={30}
    style={{color:"#fff" ,marginRight:"2rem"}}/>
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default Footer;
