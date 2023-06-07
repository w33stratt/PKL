import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PIRES
            <img src="images/LogoPiarea.svg" alt="" />
          </Link>
          
        </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/clients'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Clients
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/Products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Institute'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Institute
              </Link>
            </li>
            </ul>
          
          {button && <Button buttonStyle='btn--outline'>Profile</Button>}
      </nav>
    </>
  );
}

export default Navbar;
