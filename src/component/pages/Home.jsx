import React from 'react'
import Heading from '../Heading'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Project from '../Project'
import Projectpart from '../layouts/Projectpart'
import Skil from '../layouts/Skil'
import About from '../layouts/About'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
   <>
   
    <Banner/>
    <Projectpart/>
    <Skil/>
    <About/>
    <Contact/>
    
   </>
  )
}

export default Home