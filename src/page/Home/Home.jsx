import React from 'react'

import Achievement from '../../components/Achievement/Achievement'
import Blog from '../../components/Blog/Blog'

import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Learn from '../../components/Learn/Learn'
import Navbar from '../../components/Navbar/Navbar'
import Subnavbar from '../../components/Subnavbar/Subnavbar'
import Work from '../../components/Work/Work'


const Home = () => {
  return (
    <div>
      <Subnavbar/>
      <Navbar />
      <Learn />
      
      <Blog/>
      <Work/>
      <Card />
      <Achievement/>
      
      <Footer/>
    </div>
  )
}

export default Home
