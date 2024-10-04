import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">Bēhance</div>
        <nav className="menu">
          <ul>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Assets</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Behance Pro</a></li>
            <li><a href="#">Hire Freelancers</a></li>
          </ul>
        </nav>
        <div className="actions">
          <button className="btn">Log In</button>
          <button className="btn signup">Sign Up</button>
          <div className="adobe-icon">Adobe</div>
        </div>
      </div>

      {/* Adding the "Creative Jobs" content */}
      <div className="header-content">
        <h1 className="header-title">Creative Jobs</h1>
        <p className="header-subtitle">Browse and discover your next opportunity</p>
      </div>
    </header>
  );
};

export default Header;
