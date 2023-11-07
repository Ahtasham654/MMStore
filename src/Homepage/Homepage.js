import React from 'react'
import { Navbar } from '../Common/Navbar'
import { HeroSection } from './HeroSection'
import { Producttion } from './Producttion'
import { ChooseUs } from './ChooseUs'
import { Helpus } from './Helpus'
import { Products } from './Products'
import { Testimonials } from './Testimonials'
import { Blog } from './Blog'
import { Footer } from '../Common/Footer'
export const Homepage = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <Producttion/>
    <ChooseUs/>
    <Products/>
    <Helpus/>
    <Testimonials/>
    <Blog/>
    <Footer/>s
    </div>
  )
}
