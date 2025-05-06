import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from "../../Components/Hero/Hero"
import About from "../../Components/About/About"
import Blogs from "../../Components/Blogs/Blogs"
import Footer from "../../Components/Footer/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Blogs/>
      <Footer />
    </div>
  )
}

export default Home
