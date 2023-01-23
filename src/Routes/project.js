import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Heroimage2 from '../components/Heroimage2';
import Pricing from '../components/Pricing';

import Work from '../components/work';
const Project = () => {
  return (
    <div>
      <Navbar />
      
      <Heroimage2 heading="PROJECTS." text="Some of the most recent works"/>
      <Work />
      
      <Pricing />
      <Footer />
    </div>
  )
}

export default Project;
