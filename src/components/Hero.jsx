import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
<section className="hero" id="home">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="background-video"
  >
    <source src="https://cdn.pixabay.com/video/2025/02/03/256130_large.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="hero-content">
    <h1>THE TRAVELMATE HOLIDAYS</h1>
    <p>Your Complete Travel Partner</p>
    <p>Since 2013</p>
    <div className="hero-buttons">
      <a href="#aboutus" className="hero-btn">About Us</a>
      <a href="#packages" className="hero-btn">Book a Tour</a>
    </div>
  </div>
</section>

  );
};

export default Hero;
