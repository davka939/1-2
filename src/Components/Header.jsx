import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header-real">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <img className="logo-icon" src={logo}></img>
            <span className="logo-text">Jur Ur</span>
          </div>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Нүүр</Link>
          <Link to="/about" className="nav-link">Бидний Тухай</Link>
          <Link to="/products" className="nav-link">Бүтээгдэхүүн</Link>
          <Link to="/branches" className="nav-link">Салбарууд</Link>
          <Link to="/contact" className="nav-link">Холбогдох</Link>
        </nav>
        
        <div className="search-section">
          <input type="text" className="search-input" placeholder="Хайх" />
          <div className="search-button">🔍</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
