import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'
const Home = () => {
  return (
    <div>
      {/* <div className='bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]bg-red-400'> */}

      <Navbar/>
      <Hero/>
      <Testimonials/>
      <Footer/>
      {/* </div> */}
    </div>
  )
}

export default Home
