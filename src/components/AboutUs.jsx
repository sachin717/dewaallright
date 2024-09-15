import React from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import Footer from "./Footer";

const AboutUs = ({ cart }) => {
  return (
    <>
      <NavBar cart={cart} />
      <div className="aboutUsContainer">
        <div className="aboutUsWrapper">
          <div className="aboutUsHeader">
            <h1>About us</h1>
          </div>
          <div className="aboutUsBody">
            <p className="aboutUsPara">
              Welcome to AllRight Foods, where we're redefining breakfast to
              make it the most convenient and nutritious meal of your day. At
              AllRight Foods, we understand the importance of starting your day
              right, and that's why we're thrilled to introduce "More than
              Oats."
            </p>
            <p className="aboutUsPara">
              More than Oats isn't just your ordinary breakfast; it's a
              powerhouse of nutrition packed into one convenient serving. Our
              unique blend combines the goodness of oats, high-quality whey
              protein, and a mix of nuts and berries, delivering over 30 grams
              of protein, 10 grams of fiber, and only 265 calories per serving.
              With More than Oats, you can fuel your body with everything it
              needs to tackle the day ahead.
            </p>
            <p className="aboutUsPara">
              But that's not all. At AllRight Foods, we believe in providing you
              with the best without compromising on taste or quality. That's why
              More than Oats is made with 100% natural ingredients, with no
              added artificial sweeteners or preservatives. You can trust that
              every bite is not only delicious but also wholesome and
              nourishing.
            </p>
            <p className="aboutUsPara">
              We understand that mornings can be hectic, which is why we've made
              More than Oats ready to eat. Simply grab a serving and put some
              milk and it is ready to serve, no cooking or prep required.
              Whether you're rushing out the door or taking a moment to enjoy a
              leisurely breakfast, More than Oats fits seamlessly into your
              routine, giving you the nutrition you need without the hassle.
            </p>
            <p className="aboutUsPara">
              With AllRight Foods and More than Oats, you can finally make
              breakfast the highlight of your day – convenient, nutritious, and
              delicious, every time. Join us in revolutionizing your breakfast
              experience and fueling your day the right way.
            </p>
          </div>
        </div>
          <div className="abouUsFootContainer">
          <div className="aboutUsFoot">
            <div className="aboutUsNameNEmail">
              <div className="aboutUsName">
                <input type="text" placeholder="Name" />
              </div>
              <div className="aboutUsEmail">
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="aboutUsPhone">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="aboutUsComment">
              <input type="text" placeholder="Comment" />
            </div>
            <div className="aboutUsButton">
              <button>Send</button>
            </div>
          </div>
          </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
