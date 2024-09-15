import React, { useState } from "react";
import { Link } from "react-router-dom";
import {products} from "./Data"
import Popup from "./Popup";

const FeaturedProducts = ({addToCart, cart}) => {


  const [hoverIndex, setHoverIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoverIndex(index)
  }
  const handleMouseLeave = () =>{
    setHoverIndex(null)
  }

  const handelAddToCart = (item)=> {
    console.log("item from feater: ", item)
    addToCart(item, 1)
    Popup({product: item, count: 1, cart})
  }


  return (
    <>
      <div className="featureContainer">
        <div className="featureHeadText">
          <h2>Feature Categories</h2>
        </div>
        <div className="featureCard">
          {products && products.map((item,index)=>{
            console.log(item)
            return(
              <div 
              className={`${"featureCardItem"} ${item.special}`}
              key={index}
              style={{background:item.color}}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              >
            
            <Link to={`/product/${item.id}`}>
            <img
              src={hoverIndex === index ? item.hoverImgURL : item.imgURL}
              alt="Food Img"
              height="auto"
              width="200px"
         
            />
            </Link>
                <Link to={`/product/${item.id}`}>
                <h5>{item.title}</h5>
              </Link>
            </div>
            )
          })}
        

          {/* <button
              onClick={() => handelAddToCart(item)}
              
              >Add To Cart</button> */}
          {/* <div className="featureCardItem">
            <img
              src=".\src\Images\productImg1.webp"
              alt="Food Img"
              height="300px"
              width="180px"
            />
            <div>
              <button>Add To Cart</button>
            </div>
          </div>
          <div className="featureCardItem">
            <img
              src=".\src\Images\productImg2.webp"
              alt="Food Img"
              height="300px"
              width="180px"
            />
            <div>
              <button>Add To Cart</button>
            </div>
          </div>
          <div className="featureCardItem">
            <img
              src=".\src\Images\productImg3.webp"
              alt="Food Img"
              height="300px"
              width="180px"
            />
            <div>
              <button>Add To Cart</button>
            </div>
          </div>
          <div className="featureCardItem">
            <img
              src=".\src\Images\productImg4.webp"
              alt="Food Img"
              height="300px"
              width="180px"
            />
            <div>
              <button>Add To Cart</button>
            </div> 
          </div>*/}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
