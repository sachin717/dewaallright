import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {categories} from "./Data"

const ExploreCategories = () => {


  
 
  return (
    <>
      <div className="exploreContainer">
        <div className="exploreHeadText">
          <h2>Explore Categories</h2>
        </div>
        <div className="exploreCard">
          {categories &&
            categories.map((category, index) => {
              console.log("category", category.imageUrl);
              return (
                <div className="exploreCardItem" key={index}>
                  <Link to={category.urlLink}>
                 
                  <img
                    src={category.imageUrl}
                    alt="Food Img"
                    height="300px"
                    width= "213px"
                  />
          
                  <div className="exploreCategoryValue">
                    <span className="OswaldFontStyling">{category.value}</span>
                  </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ExploreCategories;
