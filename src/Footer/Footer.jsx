import React from 'react';
import { FaGamepad, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <FaGamepad className="footer-logo" />
            <span className="footer-title">GAMESHUB</span>
          </div>
          
          <div className="footer-links">
            <a href="/games">Games</a>
            <a href="/tournaments">Tournaments</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 GAMESHUB. Made with <FaHeart className="heart-icon" /> for gamers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;