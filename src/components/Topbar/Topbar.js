import React, { useState, useRef, useEffect } from 'react';
import './topbar.css';
import { FaGlobe, FaUserCircle } from 'react-icons/fa';
import { FiMenu, FiSearch } from 'react-icons/fi'
import Menu from '../Menu/Menu';

const Topbar = () => {  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
      
    useEffect(() => {
      // Add event listener to the document to handle clicks outside the menu
      function handleOutsideClick(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [menuRef]);

    return (
    <>
    <div className='topbar-container'>
      <img className='topbar-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"></img>
      <div className='topbar-middle-options'>
        <h2>Anywhere</h2>
        <h2>Any week</h2>
        <h2>Add guests</h2>
        <i><FiSearch /></i>
      </div>
      <div className='topbar-right-options'>
        <h2>Airbnb your home</h2>
        <i><FaGlobe /></i>
        <div className='topbar-right-user'>
            <FiMenu />
            <FaUserCircle onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        </div>
      </div>
    </div>
        <hr className="topbar-divider"/>
    <div ref={menuRef}>
      {isMenuOpen && (
        <Menu />
      )}
    </div>
    </>
  )
}

export default Topbar;
