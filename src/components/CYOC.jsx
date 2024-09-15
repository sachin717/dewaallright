import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import { customProducts, cyocItem } from "./Data";

import Swal from "sweetalert2";
import Footer from "./Footer";

const CYOC = ({ addToCart, cart }) => {
  console.log("customProducts", customProducts);

  const [cstmProducts, setCstmProducts] = useState(customProducts);
  const [cyocItemQuantity, setCyocItemQuantity] = useState(1);
  const [type, setType] = useState(1);
  // useEffect(() => {
  //     setCstmProducts([...customProducts])
  // }, [])

  const quantities = cstmProducts.map((item) => item.quantity);
  console.log("quantities: ", quantities);

  const cstmTotal = quantities.reduce((acc, dlm) => acc + dlm, 0);

  console.log("cstmTotal: ", cstmTotal);

  const getColor = (item) => {
    switch (item.short) {
      case "CM":
      case "BM":
      case "CC":
      case "SM":
      case "PBB":
        return [item.bgColor, item.buttonColor];
    }
  };

  const handelQuantityDecrease = (itemId) => {
    setCstmProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );
  };

  const handelQuantityIncrease = (itemId) => {
    if (cstmTotal < 6) {
      setCstmProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.min(item.quantity + 1, 6) }
            : item
        )
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Maximum Quantity Reached",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  };
  console.log(cstmProducts);

  const handelAddToCart = () => {
    cyocItem[0].items = cstmProducts;

    // console.log("cyocItem ================",cyocItem)
    // console.log("cyocItemQuantity: >>>>>>>> ", cyocItemQuantity)
    if (cstmTotal !== 6) {
      Swal.fire({
        icon: "error",
        title: `Kindly choose ${6 - cstmTotal} more items to add in cart`,
        timer: 3000,
      });
    } else {
      addToCart(cyocItem[0], cyocItemQuantity);
      // setCyocItemQuantity((prevQuantity)=>(prevQuantity+=1))
      Swal.fire({
        title: "Your Customized Product Added in Cart",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      setCstmProducts([...customProducts]);
    }

    // console.log("cart from CYOC page: ",cart)
  };
  return (
    <>
      <NavBar cart={cart} />
      <div className="cyocContainer">
        <div className="cyocDetailsContainer">
          <div className="cyocDetailsWrapper">
            <div className="cyocHeading">
              <h1>C.Y.O.C: Choose What You Crave</h1>
            </div>
            <div className="cyocDescription">
              <p>
                At AllRight, we believe in giving you the power to create their
                own unique experience. With our "Build Your Own Box" option, you
                have the freedom to choose exactly what goes into your
                personalized pack of 6 items.
              </p>
            </div>
            <div className="cyocPersonalizeText">
              <h1>Personalized Box- Pack of 6</h1>
            </div>
            <div className="cyocPersonalizeProductlist">
              <div className="cyocPersonalizeProducts">
                {cstmProducts.map((item, index) => {
                  return (
                    <div
                      className={`cyocPersonalizeProduct`}
                      key={index}
                      style={{ backgroundColor: getColor(item)[0] }}
                    >
                      <p className="cyocProductName">{item.flavour}</p>
                      <div
                        className="cyocCounter"
                        style={{ border: `2px solid ${getColor(item)[1]}` }}
                      >
                        <span
                          className="cyocCounterDecrease"
                          onClick={() => handelQuantityDecrease(item.id)}
                          style={{ backgroundColor: getColor(item)[1] }}
                        >
                          -
                        </span>
                        <span
                          style={{
                            backgroundColor: "white",
                            width: "25px",
                            color: "black",
                          }}
                        >
                          {item.quantity}
                        </span>
                        <span
                          className="cyocCounterIncrease"
                          onClick={() => handelQuantityIncrease(item.id)}
                          style={{ backgroundColor: getColor(item)[1] }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cyocQuantity">
                <p>Total Quantity: {cstmTotal} / 6 </p>
              </div>
              <div className="cyocAddToCart">
                <button className="cyocButton" onClick={handelAddToCart}>
                  Add To cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cyocImg">
          <img
            src="/ExploreImg2.webp"
            alt="ExploreImg2.webp"
            height="900px"
            width="450px"
          />
        </div>
      </div>
   <Footer/>
    </>
  );
};

export default CYOC;
