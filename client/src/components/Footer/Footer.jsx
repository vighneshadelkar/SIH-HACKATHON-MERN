import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container" id="footer">
        <div className="items">Ayurvedic Medicine Hub
          <div className="datetime" id="foottxt">
            Your trusted source for Ayurvedic remedies and holistic health solutions.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quod molestiae reiciendis consequatur incidunt quaerat quam totam optio expedita maiores.
          </div>
          <i className="ri-facebook-box-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-github-fill"></i>
          <i className="ri-linkedin-box-line"></i>
          <div className="footitem datetime">&copy;2023 Ayurvedic Medicine Hub. All rights reserved</div>
        </div>
        <div className="items">Explore Ayurveda
          <div className="datetime">
            <div className="footitem">Ayurvedic Remedies</div>
            <div className="footitem">Herbal Supplements</div>
            <div className="footitem">Ayurvedic Diet</div>
            <div className="footitem">Ayurvedic Lifestyle</div>
            <div className="footitem">Health Tips</div>
          </div>
        </div>
        <div className="items">Useful Links
          <div className="datetime">
            <div className="footitem">Home</div>
            <div className="footitem">Shop</div>
            <div className="footitem">Blog</div>
            <div className="footitem">About Us</div>
            <div className="footitem">Contact Us</div>
          </div>
        </div>
        <div className="items">Contact Information
          <div className="datetime">
            <div className="footitem">Address: 123 Ayurveda Way, Herbal City</div>
            <div className="footitem">Phone: +1-555-123-4567</div>
            <div className="footitem">Email: info@ayurvedicmedicinehub.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
