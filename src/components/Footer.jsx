import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Connect with us</h3>
          <ul className="footer-links">
            <li><a href="#shop">SHOP NOW</a></li>
            <li><a href="#ingredients">INGREDIENTS</a></li>
            <li><a href="#who-we-are">WHO WE ARE</a></li>
            <li><a href="#contact">CONTACT US</a></li>
            <li><a href="#privacy">PRIVACY POLICY</a></li>
            <li><a href="#terms">TERMS & CONDITIONS</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="email-input"
            />
            <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
          </form>
        </div>
        <div className="footer-section footer-section2">
          <h4>Get Connected</h4>
          <ul className="social-links">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#twitter">Twitter</a></li>
          </ul>
          <div className="contact-info">
            <p><a href="mailto:support@allright.com">📩support@allright.com</a></p>
            <p><a href="tel:+918556811001">📱+91 85568-11001</a></p>
          </div>
        </div>
      </div>
      <div className="footer-trademark">
        <p>AllRight is a registered trademark of AllRight Wellness Foods</p>
      </div>
    </footer>
  );
};

export default Footer;
