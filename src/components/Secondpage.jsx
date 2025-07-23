import React from 'react';
import './Secondpage.css';

const Secondpage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-overlay">
        <div className='sep'></div> 
          <h1 className="hero-title">THE TRAVELMATE HOLIDAYS</h1>
          <p className="hero-subtitle">Crafting Unforgettable Journeys Across South India</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <img src="https://travelmateholidays.com/Resources/Kerala-Guide-Header.webp" alt="About Travelmate" />
        <div className="about-text">
          <h2>About Us <strong>Explore with us!</strong></h2>
          <p>
            We are a passionate travel company offering curated experiences across South India.
            With a team of expert guides and well-crafted itineraries, we aim to deliver
            memorable journeys through culture, nature, and adventure.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="core-cards">
          <div className="core-card">
            <div className="icon">🌟</div>
            <h3>Customer First</h3>
            <p>We prioritize your happiness at every step of your journey.</p>
          </div>
          <div className="core-card">
            <div className="icon">🗺️</div>
            <h3>Authentic Experiences</h3>
            <p>We bring you closer to real local culture and traditions.</p>
          </div>
          <div className="core-card">
            <div className="icon">🛡️</div>
            <h3>Trust & Safety</h3>
            <p>We ensure your travel is secure and stress-free.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Travelers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>“The best trip of my life! Everything was perfectly organized.”</p>
            <div className="testimonial-footer">
              <img src="https://travelmateholidays.com/Resources/OIP.webp" alt="Person 1" />
              <span>Rahul, Kerala</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>“Loved every bit of the itinerary. Will book again!”</p>
            <div className="testimonial-footer">
              <img src="https://travelmateholidays.com/Resources/OIP%20(1).webp" alt="Person 2" />
              <span>Priya, Bangalore</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>“Great service and knowledgeable guides. 10/10!”</p>
            <div className="testimonial-footer">
              <img src="https://travelmateholidays.com/Resources/OIP.webp" alt="Person 3" />
              <span>Akash, Chennai</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <p>
            We are your ultimate travel companion in South India. We craft, guide, and explore with you.
          </p>
        </div>
        <div className="footer-section">
          <h3>CONTACT</h3>
          <ul>
            <li>Email: info@travelmate.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Kochi, Kerala</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="footer-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Secondpage;
