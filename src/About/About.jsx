import React,{useEffect} from 'react';
import { FaGamepad, FaUsers, FaTrophy, FaRocket, FaDiscord, FaTwitter } from 'react-icons/fa';
import './About.css';


const About = () => {

    useEffect(() => {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateNumbers = () => {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-count'));
      const duration = 2000;
      const start = 0;
      const increment = target / (duration / 16);
      
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          current = target;
        }
        stat.textContent = Math.floor(current).toLocaleString();
      }, 16);
    });
  };
  
  // Trigger when section comes into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(document.querySelector('.stats-container'));
}, []);
  return (
    <div className="about-container">
      {/* Animated Background Elements */}
      <div className="about-bg-pattern"></div>
      <div className="about-bg-gradient"></div>
      
      {/* Floating Game Consoles */}
      <div className="floating-icon floating-ps5"></div>
      <div className="floating-icon floating-xbox"></div>
      <div className="floating-icon floating-pc"></div>
      
      <div className="about-content">
        {/* Section Header with Animation */}
        <div className="section-header">
          <h2 className="title-reveal">WELCOME TO <span className="highlight-text">PHANTOM GAMBIT</span></h2>
          <div className="header-underline"></div>
        </div>
        
        {/* Main About Content */}
        <div className="about-grid">
          <div className="about-text animate-slide-in-left">
            <h3>Redefining Competitive Gaming</h3>
            <p>
              Phantom Gambit is where elite gaming meets cutting-edge technology. 
              We're not just another gaming platform - we're the future of 
              competitive esports. Born from a passion for high-stakes 
              competition and next-gen gaming experiences.
            </p>
            <p>
              Our tournaments bring together the most skilled players worldwide, 
              offering unparalleled competitive experiences with massive prize 
              pools, professional broadcasting, and a thriving community.
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="stats-container animate-slide-in-right">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon"><FaGamepad /></div>
                <div className="stat-number" data-count="50">0</div>
                <div className="stat-label">Games Supported</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaUsers /></div>
                <div className="stat-number" data-count="250000">0</div>
                <div className="stat-label">Active Players</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaTrophy /></div>
                <div className="stat-number" data-count="1200">0</div>
                <div className="stat-label">Tournaments</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaRocket /></div>
                <div className="stat-number" data-count="5">0</div>
                <div className="stat-label">Years in Esports</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="mission-statement animate-fade-in">
          <div className="mission-quote">
            "To create the most thrilling competitive gaming experiences by 
            merging cutting-edge technology with passionate community building."
          </div>
          <div className="mission-author">- Phantom Gambit Team</div>
        </div>
        
        {/* Social Links */}
        <div className="social-links animate-fade-in">
          <h4>JOIN OUR COMMUNITY</h4>
          <div className="social-icons">
            <a href="#" className="social-icon discord">
              <FaDiscord />
              <span className="social-tooltip">Join our Discord</span>
            </a>
            <a href="#" className="social-icon twitter">
              <FaTwitter />
              <span className="social-tooltip">Follow us on Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;