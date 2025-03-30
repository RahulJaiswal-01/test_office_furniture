import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';  // <-- This was missing
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DEEP AS ENTERPRISES</h3>
            <p>Creating productive workspaces since 2010</p>
            <div className="social-links">
              <a href="https://www.instagram.com/rahul_jaiswal0.1?igsh=MTA4ajJ1cTV1NHA2aw=="><FaFacebook /></a>
              <a href="https://www.instagram.com/rahul_jaiswal0.1?igsh=MTA4ajJ1cTV1NHA2aw=="><FaTwitter /></a>
              <a href="https://www.instagram.com/rahul_jaiswal0.1?igsh=MTA4ajJ1cTV1NHA2aw=="><FaInstagram /></a>
              <a href="https://www.instagram.com/rahul_jaiswal0.1?igsh=MTA4ajJ1cTV1NHA2aw=="><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
              <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
              <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </div>

          {/* ... rest of your footer code ... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;