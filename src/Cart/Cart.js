import React from 'react'
import { Navbar } from '../Common/Navbar'
import { HeroSection } from './HeroSection'
import { CartItem } from './CartItem'
import { Footer } from '../Common/Footer'
export const Cart = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <CartItem/>
    <Footer/>
    </div>
  )
}
