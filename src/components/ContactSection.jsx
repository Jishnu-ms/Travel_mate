import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.183168312768!2d76.97840831533476!3d8.50940869387809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05beb1e1e345d9%3A0xb39a11b03b34650e!2sTravelmate%20Holidays!5e0!3m2!1sen!2sin!4v1627030193000!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <form className="contact-form">
        <h2>Get In Touch</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Your Message" rows={4}></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactSection;
