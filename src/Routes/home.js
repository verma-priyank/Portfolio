import React from 'react'
import Navbar from '../components/Navbar';
import Heroimages from '../components/Heroimages';
import Footer from '../components/footer';
import Work from '../components/work';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimages />
      <Work />
      <Footer />
    </div>
  )
}

export default Home;
