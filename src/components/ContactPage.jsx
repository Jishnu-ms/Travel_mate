import React from 'react';

import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="chero">
        <h1 className="Heading">THE TRAVELMATE</h1>
        <h1 className="Heading">HOLIDAYS</h1>
        <p>Crafting Unforgettable Journeys Across South India</p>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="card">
     
          <h3>Location</h3>
          <p>TravelMate Holidays Inc,</p>
          <p>Trivandrum, Kerala, India</p>
        </div>
        <div className="card">
         
          <h3>Contact</h3>
          <p>+91 9048828890</p>
        </div>
        <div className="card">
         
          <h3>Email</h3>
          <p>thetravelmateholidays@gmail.com</p>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="contact-section">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.183168312768!2d76.97840831533476!3d8.50940869387809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05beb1e1e345d9%3A0xb39a11b03b34650e!2sTravelmate%20Holidays!5e0!3m2!1sen!2sin!4v1627030193000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="TravelMate Location"
        ></iframe>

        <form className="contact-form">
          <h2>Get In Touch</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message" rows={4}></textarea>
          <button>Send Message</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h1>About Us</h1>
          <p>
            We at THE TRAVELMATE HOLIDAYS are passionate about creating life-changing experiences...
          </p>
        </div>
        <div className="footer-section">
          <h1>Travel Packages</h1>
          <ul>
            <li>Honeymoon Packages</li>
            <li>Kerala Packages</li>
            <li>Pilgrim Packages</li>
          </ul>
        </div>
        <div className="footer-section">
          <h1>Contact Info</h1>
          <p>Thirumala, Trivandrum, Kerala</p>
          <p>+91 9048828890</p>
          <p>thetravelmateholidays@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;