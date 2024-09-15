import React from "react";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";


const MainSection = () => {
  return (
    <>
      <div className="mainContainer">
        {/* <div className="mainCard">
          <div className="firstMainCard">
            <h2>Fuel Your Day with Nutritious Breakfast Meals!</h2>
           
          </div>
          <div className="secondMainCard">
            
            <img src="\sgic.webp" alt="Food Img" />
          </div>
        </div> */}
         <Link to="/shopall">
            <button className="mainButton"></button>
            </Link>
            <div className="MainImageDiv">
        <img src="\landpage.png" className="MainImage"/>
        </div>
      </div>
    </>
  );
};

export default MainSection;
