import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container" id="footer">
        <div className="items">
          EDU Medicine Hub
          <div className="datetime" id="foottxt">
            Your trusted source for EDU remedies and holistic health solutions.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            quod molestiae reiciendis consequatur incidunt quaerat quam totam
            optio expedita maiores.
          </div>
          <i className="ri-facebook-box-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-github-fill"></i>
          <i className="ri-linkedin-box-line"></i>
          <div className="footitem datetime">
            &copy;2023 EDU Medicine Hub. All rights reserved
          </div>
        </div>
        <div className="items">
          Explore EDU
          <div className="datetime">
            <div className="footitem">EDU Remedies</div>
            <div className="footitem">Herbal Supplements</div>
            <div className="footitem">EDU Diet</div>
            <div className="footitem">EDU Lifestyle</div>
            <div className="footitem">Health Tips</div>
          </div>
        </div>
        <div className="items">
          Useful Links
          <div className="datetime">
            <div className="footitem">Home</div>
            <div className="footitem">Shop</div>
            <div className="footitem">Blog</div>
            <div className="footitem">About Us</div>
            <div className="footitem">Contact Us</div>
          </div>
        </div>
        <div className="items">
          Contact Information
          <div className="datetime">
            <div className="footitem">Address: 123 EDU Way, Mumbai City</div>
            <div className="footitem">Phone: +1-555-123-4567</div>
            <div className="footitem">Email: info@EDUmedicinehub.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
