import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './InfoCards.css';

const InfoCards = () => {
  return (
    <div className="info-cards">
      <div className="card">
        

        <FontAwesomeIcon icon={faMapMarkerAlt} className="card-icon" />
        <h3>Location</h3>
        <p>TravelMate Holidays Inc,</p>
         <p> Trivandrum, Kerala, India</p>
      </div>
      <div className="card">
        <FontAwesomeIcon icon={faPhone} className="card-icon" />
        <h3>Contact</h3>
        <p>+91 9048828890</p>
      </div>
      <div className="card">
        <FontAwesomeIcon icon={faEnvelope} className="card-icon" />
        <h3>Email</h3>
        <p>thetravelmateholidays@gmail.com</p>
      </div>
    </div>
  );
};

export default InfoCards;

