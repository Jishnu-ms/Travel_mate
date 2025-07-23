import React from 'react';
import './BookNow.css';

const BookNow = () => {
  return (
    <div className="book-now-page">
      <div className="card-container">
        {/* Form Section */}
        <div className="form-panel">
          <h2>Travel Booking Details</h2>
          <form className="booking-form">
            <div className="row">
              <input type="text" placeholder="Enter full name" required />
              <input type="email" placeholder="Enter email" required />
            </div>
            <div className="row">
              <input type="tel" placeholder="Enter phone number" required />
              <input type="date" required />
            </div>
            <div className="row">
              <input type="number" placeholder="Number of adults" required />
              <input type="number" placeholder="Children (4-11)" defaultValue={0} />
            </div>
            <select required>
              <option value="">Choose Your Package</option>
              <option value="honeymoon">Honeymoon</option>
              <option value="kerala">Kerala</option>
              <option value="pilgrim">Pilgrim</option>
            </select>
            <textarea placeholder="Any special requests or preferences" maxLength="500" />
            <button type="submit">Book Your Trip</button>
          </form>
        </div>

        {/* Info Section */}
        <div className="info-panel">
          <ul>
            <li><strong>Best Price Guarantee</strong><br />Lowest prices & best value for your travel</li>
            <li><strong>24/7 Customer Support</strong><br />Instant help whenever you need</li>
            <li><strong>Customized Travel Plans</strong><br />Tailored experiences just for you</li>
            <li><strong>Verified Destinations</strong><br />Safe and trusted travel locations</li>
            <li><strong>Flexible Bookings</strong><br />Easy cancellation & rescheduling</li>
          </ul>
        </div>
      </div>
      
    </div>
    
  );
};

export default BookNow;
