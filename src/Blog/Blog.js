import React from 'react'
import { Navbar } from '../Common/Navbar'
import { HeroSection } from './HeroSection'
import { Blogs } from './Blogs'
import { Testimonials } from '../Homepage/Testimonials'
import { Footer } from '../Common/Footer'
export const Blog = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <Blogs/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}
