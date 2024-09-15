import React, { useState, useEffect } from "react";
import { IoBagOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import SlidingNav from "./SlidingNav";
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult";

const NavBar = ({ cart }) => {
  console.log("cart from Nav: ", cart);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  console.log("totalQuantity", totalQuantity);

  const [isSlidingNavOpen, setIsSlidingNavOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSlidingNav = () => {
    console.log("Before Click", isSlidingNavOpen);
    setIsSlidingNavOpen(!isSlidingNavOpen);
  };

  console.log("After Click", isSlidingNavOpen);

  const handleSearchBar = () => {
    console.log("Before Click", isSearchBarOpen);
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  console.log("After Click", isSearchBarOpen);

  const handleSearchResult = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    if (isSlidingNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isSlidingNavOpen]);

  useEffect(() => {
    if (isSearchBarOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isSearchBarOpen]);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <>
      <div className={`navBarContainer ${isSlidingNavOpen ? "slideOpen" : ""} ${isSearchBarOpen ? "searchOpen" : ""}`}>
        <div className="navHeader">
          <p>Get FREE SHIPPING on orders above Rs 499</p>
        </div>
        {
        (
        <div className="navBarWrapper">
        
          <div className="HeaderLogo">
          <Link to="/">
              <img className="HeaderLogo" src="\HeaderLogo.webp" alt="HeaderLogo" />
        
          </Link>
          </div>
          <div className="HeadingTabsHome">
          <div className="MargInBetweenTabs">
            <Link to="/">
             <span className="HeadingFont">SHOP NOW</span>
        
          </Link>
          </div>
          <div className="MargInBetweenTabs">
          <Link to="/">
          <span className="HeadingFont">INGREDIENTS</span>
        
          </Link>
          </div>
          <div className="MargInBetweenTabs">
          <Link to="/Whoweare">
          <span className="HeadingFont">WHO WE ARE</span>

          </Link>
          </div>
          

          </div>
       
          {/* <div className="navBarIcon">
            <div className="navBarIconRight">
             
              <div className="cartIcon">
                <span>
                  <Link to="/cart">
                    {cart.length === 0 ? (
                      <IoBagOutline />
                    ) : (
                      <IoBagHandleOutline />
                    )}
                  </Link>
                </span>
                <div className="showCartQuantity">{totalQuantity}</div>
              </div>
            </div>
          </div> */}
        </div>
        // :
        // <div className="navBarWrapper">
        //   <SearchBar handleSearchBar={handleSearchBar} handleSearchResult={handleSearchResult}/>
        // </div>
)}
    
      </div>
      {isSlidingNavOpen && <SlidingNav handleSlidingNav={handleSlidingNav} />}
      {searchTerm && <SearchResult searchTerm={searchTerm} />}
      
    </>
  );
};

export default NavBar;
