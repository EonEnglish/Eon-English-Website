import React from 'react'; 
import Image from 'next/image'; 
import './Header.css'; 

const Header = () => {
  return (
    <header className="header" style={{ backgroundColor: '#352228' }}>
      <nav className="navbar">
        <div className="logo-container">
          
        <Image
          src="images/eonEnglishIcon.svg"
            alt="Logo"
            width={140} 
            height={140} 
            className="logo"
          />
        </div>
        
        <div className="button-container">
          <button className="teacher-button">
            Become a teacher
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Header;
