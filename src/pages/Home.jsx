import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import HomeAbout from '../components/home/HomeAbout'
import HomeMain from '../components/home/HomeMain'
import Testimonials from '../components/testimonials/Testimonials'
import HomeEvent from '../components/home/HomeEvent'
import HomeFeatured from '../components/home/HomeFeatured'
import HomeAchievements from '../components/home/HomeAchievements'
import HomeCollaborations from '../components/home/HomeCollaborations'
import AboutUs from './AboutUs'

function Home() {
  return (
    <div style={{backgroundColor:"black"}}>
        <Navbar />
        <HomeMain />
        <AboutUs />
        <HomeAbout />
        <HomeFeatured />
        <HomeEvent />
        <HomeAchievements />
        <HomeCollaborations />
        <Testimonials/>
        <Footer />
        
    </div>
  )
}

export default Home