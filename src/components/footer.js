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
    <div><p>Village and Post Mamri Kheri</p>
    <p>Lucknow</p>
    </div>
    </div>
    <div className="phone">
    <h4><FaPhone size={20}
    style={{color:"#fff" ,marginRight:"2rem"}}/>+91 7080511271</h4>

    </div>
    <div className="email">
    <h4><FaMailBulk size={20}
    style={{color:"#fff" ,marginRight:"2rem"}}/>
    <a href="mailto:priyankverma668@gmail.com" target="_blank" rel="noreferrer">priyankverma668@gmail.com</a>
    </h4>

    </div>
    </div>
    <div className="right">
    <h4>About Me</h4>
    <p>This is me , Priyank Verma . I am a frontend Developer.</p>
    <div className="social">
    <a href="mailto:priyankverma668@gmail.com" target="_blank" rel="noreferrer"><FaMailBulk size={30}
    style={{color:"#fff" ,marginRight:"2rem"}}/></a>
    
    <a href="https://www.linkedin.com/in/priyank-v-56240311a/" target="_blank" rel="noreferrer"><FaLinkedin size={30}
    style={{color:"#fff" ,marginRight:"2rem"}}/></a>
    
    <a href="https://github.com/verma-priyank" target="_blank" rel="noreferrer"><FaGithub size={30}
    style={{color:"#fff" ,marginRight:"2rem"}}/></a>
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default Footer;
