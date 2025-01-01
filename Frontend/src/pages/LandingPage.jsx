import React from 'react'
import Header from '../components/landing-page/header/Header'
import Hero from '../components/landing-page/Hero'
import KeyFeatures from '../components/landing-page/key-features/KeyFeatures'
import Benefits from '../components/landing-page/Benefits'
import Testimonials from '../components/landing-page/testimonials/Testimonials'
import Footer from '../components/landing-page/Footer'


const LandingPage = () => {
  return (
    <>
        <Header />
        <Hero />
        <KeyFeatures />
        <Benefits />
        <Testimonials/>
        <Footer />
    </>
  )
}

export default LandingPage