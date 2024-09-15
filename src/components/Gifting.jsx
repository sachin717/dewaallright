import React from 'react'
import FooterSection from './FooterSection'
import NavBar from './NavBar'
import Footer from './Footer'

const Gifting = ({cart}) => {
  return (
    <>
    <NavBar cart={cart}/>
    <h1 style={{Font: "32px", margin: "100px", textAlign: "center"}}>
      Gifting
    </h1>
 <Footer/>
    </>
  )
}

export default Gifting
