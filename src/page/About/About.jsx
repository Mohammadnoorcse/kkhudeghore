import React from 'react'
import AboutUs from '../../components/Aboutus/AboutUs'
import Footer from '../../components/Footer/Footer'
import History from '../../components/History/History'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <History/>
      <Footer/>
    </div>
  )
}

export default About
