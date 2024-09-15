import React from 'react'
import NavBar from './NavBar'
import Suggestions from './Suggestions'
import FooterSection from './FooterSection'
import Footer from './Footer'

const ShopAll = ({cart}) => {
  return (
    <>
    <NavBar cart={cart}/>
    <Suggestions/>
  <Footer/>
    </>
  )
}

export default ShopAll
