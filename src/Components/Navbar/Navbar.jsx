import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProgramDetailsPage = location.pathname === '/program-details';

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isProgramDetailsPage) {
        setSticky(window.scrollY > 50);
      } else {
        setSticky(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProgramDetailsPage]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleNavigation = (target) => {
    if (isProgramDetailsPage) {
      // Navigate to homepage and then scroll
      navigate('/', { replace: true });
      setTimeout(() => {
        scroll.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: 0
        });
      }, 500);  // Wait for page to load before scrolling
    } else {
      scroll.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: 0
      });
    }
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : (isProgramDetailsPage ? 'dark-nav' : 'transparent-nav')}`}>
      <img
        src={logo}
        alt='Logo'
        className='logo'
        onClick={() => handleNavigation('hero')}
      />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link
            to='hero'
            smooth={true}
            duration={500}
            onClick={() => handleNavigation('hero')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='program'
            smooth={true}
            offset={-230}
            duration={500}
            onClick={() => handleNavigation('program')}
          >
            Products & Services
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleNavigation('about')}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to='testimonials'
            smooth={true}
            offset={-230}
            duration={500}
            onClick={() => handleNavigation('testimonials')}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            offset={-230}
            duration={500}
            className='btn'
            onClick={() => handleNavigation('contact')}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt='Menu'
        className='menu-icon'
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
