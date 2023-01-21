import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Heroimage2 from '../components/Heroimage2';
import Aboutcontent from '../components/aboutcontent';
const About = () => {
  return (
    <div>
    <Navbar />
    <Heroimage2 heading="ABOUT." text="i'm a friendly Front-End Developer"/>
    <Aboutcontent />
    <Footer />
    </div>
  )
}

export default About;
