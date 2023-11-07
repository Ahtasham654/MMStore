import React from 'react'
import { Navbar } from '../Common/Navbar'
import { HeroSection } from './HeroSection'
import { ChooseUS } from './ChooseUS'
import { Products } from '../Homepage/Products'
import { Testimonials } from '../Homepage/Testimonials'
import { Footer } from '../Common/Footer'
export const Service = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ChooseUS/>
        <Products/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}
