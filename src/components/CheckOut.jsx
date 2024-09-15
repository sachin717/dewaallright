import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

const CheckOut = ({ cart }) => {

    const subTotal = cart.reduce((acc, product) => acc + (product.price*product.quantity),0)
    const tax = subTotal*4.5/100
    const total = subTotal + tax
  return (
    <>
        {cart.length === 0 ?
        <div className="emptyCheckOut">
            <h1>Nothing to Check Out</h1>
            <Link to="/" className="checkOutRedirectShopping">
            <div >Continue Shopping</div></Link>
        </div> :
      <div className="checkOutContainer">
        <div className="checkOutHeader">
          <div className="checkOutHeaderText">
            <Link className="checkOutHeaderLogo" to="/">
            <h4>AllRight</h4>
            </Link>
          </div>
          <div className="checkOutShopingCart">
            <Link className="checkOutHeaderIcon" to="/cart">
            <IoBagHandleOutline />
            </Link>
          </div>
        </div>
        <div className="checkOutWrapper">
          <div className="checkOutFormContainer">
            <form action="" className="checkOutForm">
              <div className="contactField">
                <div className="contactText">
                  <h3>Contact</h3>
                </div>
                <div className="contactInput">
                  <input
                    type="text"
                    placeholder="Email or mobile phone number"
                  />
                </div>
                <div className="addressCheckBox">
                  <input
                    type="checkbox"
                    name="emailCheckBox"
                    className="emailCheckBox"
                  />
                  <label htmlFor="emailCheckBox">
                    Email me with news and offers
                  </label>
                </div>
              </div>
              <div className="addressField">
                <div className="deliveryText">
                  <h3>Delivery</h3>
                </div>
                <div className="ddlCountry">
                  <select name="selectCountry" className="selectCountry">
                    <option value="india">India</option>
                  </select>
                </div>
                <div className="nameField">
                  <div className="firstName">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="lastName">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="locationDetails">
                  <div className="addressline1">
                    <input type="text" placeholder="addressline1" />
                  </div>
                  <div className="addressline2">
                    <input type="text" placeholder="addressline2" />
                  </div>
                  <div className="cityStatePin">
                    <input type="text" className="city" placeholder="city" />
                    <select name="state" className="state" placeholder="State">
                      <option value="karnataka">Karnataka</option>
                    </select>
                    <input
                      type="number"
                      className="pin"
                      placeholder="Pin Code"
                    />
                  </div>
                </div>
                <div className="addressCheckBox">
                  <input
                    type="checkbox"
                    name="emailCheckBox"
                    className="emailCheckBox"
                  />
                  <label htmlFor="emailCheckBox">
                    Save this information for next time
                  </label>
                </div>
              </div>
              <div className="shippingMethod">
                <div className="shippingMethodText">Shipping Method</div>
                <div className="shippingMethodtype">
                    <div className="shippingMethodDeclaration">Standard</div>
                    <div className="shippingMethodValue">
                        <strong>Free</strong></div>
                    </div>
              </div>
              <div className="paymentMethod">
                <div className="paymentMethodText">
                  <h3>Payment</h3>
                </div>
                <h6>All transactions are secure and encrypted.</h6>
                <div className="paymentProcess">
                  <div className="paymentIcon">
                    <MdOutlinePayments />
                  </div>

                  <p>This store can't accept payments right now.</p>
                </div>
              </div>
              <div className="payNow">Pay Now</div>
            </form>
            </div>
            <div className="checkOutDetailsOuterContainer">
          <div className="checkOutDetailsContainer">
            {cart &&
              cart.map((product) => {
                return (
                  <div className="checkOutProduct">
                    <div className="checkoutProductImg">
                      <img
                        src={product.imgURL}
                        alt="product.imgURL"
                        height="50px"
                        width="50px"
                      />
                      <div className="checkOutProductQuantity">
                        {product.quantity}
                      </div>
                    </div>
                    <div className="checkoutProductDetails">
                      <div className="checkOutProductTitle">
                        {product.title}
                      </div>
                      <div className="checkOutProductSize">{product.size}</div>
                    </div>
                    <div className="checkOutProductPrice">
                      <MdCurrencyRupee />
                      {(product.price*product.quantity).toFixed(2)}
                    </div>
                  </div>
                );
              })}

            <div className="checkOutFinalPrice">
              <div className="subTotal">
                <div className="subTotalText">Subtotal</div>
                <div className="subTotalValue"><MdCurrencyRupee /> {subTotal.toFixed(2)}</div>
              </div>
              <div className="shipping">
                <div className="shippingText">Shipping</div>
                <div className="shippingValue">FREE</div>
              </div>

              <div className="taxestimation">
                <div className="taxestimationText">Estimated taxes</div>
                <div className="taxestimationValue"><MdCurrencyRupee /> {tax.toFixed(2)}</div>
              </div>
              <div className="total">
                <div className="totalText">Total</div>
                <div className="totalValue">INR
                  <strong> <MdCurrencyRupee />
                {total.toFixed(2)}
                </strong> 
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default CheckOut;
