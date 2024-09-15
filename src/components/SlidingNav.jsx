import React from 'react'
import { Link } from 'react-router-dom'

const SlidingNav = ({handleSlidingNav}) => { 
  return (
    <>
        <div className="SlidingNavBarContainer" >
            <div className="slidingNavBarWrapper">
                <Link to="/product/1" className="slidinNavMenus">Shop All</Link>
                <Link to="/cyoc" className="slidinNavMenus">C.Y.O.C</Link>
                <Link to="/gifting" className="slidinNavMenus">Giftings</Link>
                <Link to="/track" className="slidinNavMenus">Track Your Order</Link>
                <Link to="/about" className="slidinNavMenus">About Us</Link>
            </div>
            <div className="cartain" onClick={handleSlidingNav}>
              
            </div>
        </div>
    </>
  )
}

export default SlidingNav
