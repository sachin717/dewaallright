import React from 'react'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import ExploreCategories from './components/ExploreCategories'
import FeaturedProducts from './components/FeaturedProducts'
import Gallery from './components/Gallery'
import BenifitSection from './components/BenifitSection'
import DescriptionSection from './components/DescriptionSection'
import FooterSection from './components/FooterSection'
import Usage from './components/Usage'
import Footer from './components/Footer'


const HomePage = ({addToCart, cart}) => {
  console.log("cart from homepage", cart)
  
  return (
    <>

    <NavBar cart={cart} />
    <MainSection />
    <div className="highlightText">
          <marquee
            width="100%"
            direction="left"
            height="70px"
            className="rotationText"
          >
            <span className='marqueeFont'>HIGH PROTEAN MEAL 🫧</span>
            <span className='marqueeFont'>RICH IN FIBER 🫧</span>
            <span className='marqueeFont'>CLEAN INGREDIENTS 🫧</span>
            <span className='marqueeFont'>RICH IN TASTE 🫧</span>
            <span className='marqueeFont'>NO NONSENSE INGREDIENTS 🫧</span>
          </marquee>
        </div>
    <ExploreCategories />
    <Gallery/>
    <Usage />
    <FeaturedProducts addToCart={addToCart} cart={cart}/>
    <BenifitSection/>
    <DescriptionSection/>
    <Footer/>


    </>
  )
}

export default HomePage
