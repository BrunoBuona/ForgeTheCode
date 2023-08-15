import React, {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/Vector-logo.png'



function NavbarResponsive() {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <header>
      <nav className='navbar'>
          <figure>
            <img className='logo' src={logo} />
          </figure>
          <div className='navbar-links'>
            <a className='nav-link' href="#section-1">Home</a>
            <a className='nav-link' href="#section-2">About Us</a>
            <a className='nav-link' href="#section-3">Services</a>
            <a className='nav-link' href="#section-5">Contact Us</a>
          </div>
      </nav>
      <header className='navbar-responsive-header'>
      <nav ref={navRef} className='navbar-responsive'>
          <figure>
            <img className='logo' src={logo} />
          </figure>
            <a onClick={showNavbar} className='nav-link' href="#section-1">Home</a>
            <a onClick={showNavbar} className='nav-link' href="#section-2">About Us</a>
            <a onClick={showNavbar} className='nav-link' href="#section-3">Services</a>
            <a onClick={showNavbar} className='nav-link' href="#section-5">Contact Us</a>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FaTimes />
            </button>
      </nav>
      <button className="show-nav-btn nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      </header>

    </header>


  )
}

export default NavbarResponsive