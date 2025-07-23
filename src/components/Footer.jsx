import './Footer.css';

const Footer = () => {
  return (
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
  );
};

export default Footer;
