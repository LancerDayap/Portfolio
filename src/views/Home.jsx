// import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Project from "../components/Project";
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </>
  )
}

export default Home