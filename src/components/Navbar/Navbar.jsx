import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbarStyle.css';
import img1 from '../../Assets/Navlogo3.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Agregar un efecto de limpieza para quitar el event listener al desmontar el componente

  const navbarStyle = scrolling ? { backgroundColor: '#cccccc' } : { backgroundColor: 'transparent' };

  // Resto del código...
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleContactClick = (e) => {
    // Evitar el comportamiento predeterminado del enlace
    e.preventDefault();

    // Redirigir a la página principal
    window.location.href = '/#contact';

    // Esperar a que la página principal se cargue completamente y luego desplazarse a la sección de contacto
    window.addEventListener('load', scrollToContact);
  };

  return (
    <nav className="NavbarItems" style={navbarStyle}>
      <Link to="/" className="linklogo" onClick={closeMenu}>
        <h1 className="navbar-logo">
          {' '}
          <img className="imgnav" src={img1} alt="/" /> Nav
        </h1>
      </Link>
      
      <div className="menu-icons" onClick={toggleMenu}>
        <i className={`uil uil-apps ${isOpen ? 'active' : ''}`}></i>
      </div>


      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/services" className="nav-links" onClick={closeMenu}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-links" onClick={closeMenu}>
            PRODUCTS
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-links" onClick={closeMenu}>
            OUR SERVICES
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links" onClick={handleContactClick}>
            CONTACT US
          </Link>
        </li>
        <li>
          <Link to="/login" className="boton" onClick={closeMenu}>
            SIGN IN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
