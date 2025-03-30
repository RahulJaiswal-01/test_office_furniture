import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'products', name: 'Products' },
    { id: 'services', name: 'Services' },
    { id: 'clients', name: 'Clients' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="logo-container">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="logo-link"
        >
          <img 
            src="/images/logo/deepas-logo.jpg" 
            alt="DEEP AS ENTERPRISES Logo" 
            className="logo-img"
          />
        </Link>
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div 
        className="mobile-menu-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </header>
  );
};

export default Header;