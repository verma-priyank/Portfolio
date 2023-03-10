import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Heroimages from '../components/Heroimages';
import Footer from '../components/footer';
import Work from '../components/work';
import Workhome from '../components/home-work';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimages />
     
      <Workhome />
      <Link to='/project' className='projectsInfo'>More Projects</Link>
      <Footer />
    </div>
  )
}

export default Home;
