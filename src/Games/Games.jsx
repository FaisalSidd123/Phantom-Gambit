import React, { useState, useEffect } from 'react';
import { FaStar, FaUsers, FaClock, FaArrowRight, FaGamepad, FaDice, FaChessBoard, FaHeart } from 'react-icons/fa';
import './Games.css';

const GameShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredGame = {
    id: 1,
    title: "Kingdom Quest",
    subtitle: "The Epic Medieval Adventure",
    description: "Embark on a legendary journey to build your medieval kingdom, forge alliances, and conquer neighboring lands in this strategic masterpiece. Kingdom Quest combines deep strategy with immersive storytelling for an unforgettable gaming experience.",
    image: "/api/placeholder/600/400",
    players: "2-4",
    duration: "60-90min",
    difficulty: "Medium",
    rating: 4.8,
    category: "Strategy",
    price: "$49.99",
    features: [
      "Deep strategic gameplay",
      "Beautiful medieval artwork",
      "Replayable with variable setups",
      "Family-friendly yet challenging",
      "Premium components"
    ],
    age: "10+",
    designer: "Elena Masters"
  };

  const upcomingGames = [
    { id: 2, name: "Cosmic Encounter", status: "In Development", eta: "Q2 2024" },
    { id: 3, name: "Mystic Woods", status: "Design Phase", eta: "Q3 2024" },
    { id: 4, name: "Empire Builders", status: "Concept", eta: "Q4 2024" }
  ];

  return (
    <section className="game-showcase">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="showcase-container">
        {/* Header Section */}
        <div className={`showcase-header ${isVisible ? 'visible' : ''}`}>
          <h1 className="main-title">Our Premier Board Game</h1>
          <p className="main-subtitle">Experience the first in our series of epic tabletop adventures</p>
          <div className="header-decoration">
            <FaDice className="decoration-icon" />
            <FaChessBoard className="decoration-icon" />
            <FaGamepad className="decoration-icon" />
          </div>
        </div>

        {/* Main Game Showcase */}
        <div className={`featured-game ${isVisible ? 'visible' : ''}`}>
          <div className="game-visual">
            <div className="image-container">
              <img 
                src={featuredGame.image} 
                alt={featuredGame.title}
                className="game-main-image"
              />
              <div className="image-overlay"></div>
              <div className="game-badges">
                <span className="badge primary">Featured Game</span>
                <span className="badge secondary">{featuredGame.category}</span>
              </div>
            </div>
            
            {/* Interactive Elements */}
            <div className="floating-elements">
              <div className="floating-card card-1">
                <FaUsers />
                <span>{featuredGame.players} Players</span>
              </div>
              <div className="floating-card card-2">
                <FaClock />
                <span>{featuredGame.duration}</span>
              </div>
              <div className="floating-card card-3">
                <FaStar />
                <span>Rating: {featuredGame.rating}</span>
              </div>
            </div>
          </div>

          <div className="game-details">
            <div className="game-header">
              <h2 className="game-title">{featuredGame.title}</h2>
              <span className="game-subtitle">{featuredGame.subtitle}</span>
              <div className="rating-display">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(featuredGame.rating) ? "star filled" : "star"}
                    />
                  ))}
                  <span className="rating-text">({featuredGame.rating}/5)</span>
                </div>
              </div>
            </div>

            <p className="game-description">{featuredGame.description}</p>

            <div className="game-specs">
              <div className="spec-grid">
                <div className="spec-item">
                  <span className="spec-label">Difficulty</span>
                  <span className="spec-value">{featuredGame.difficulty}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Age Range</span>
                  <span className="spec-value">{featuredGame.age}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Designer</span>
                  <span className="spec-value">{featuredGame.designer}</span>
                </div>
              </div>
            </div>

            <div className="game-features">
              <h3>Key Features</h3>
              <ul className="features-list">
                {featuredGame.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <FaHeart className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="game-actions">
              <div className="price-section">
                <span className="price">{featuredGame.price}</span>
                <span className="price-note">Includes free shipping</span>
              </div>
              <div className="action-buttons">
                <button className="btn primary">
                  Pre-Order Now <FaArrowRight />
                </button>
                <button className="btn secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className={`coming-soon ${isVisible ? 'visible' : ''}`}>
          <div className="coming-soon-header">
            <h2>More Epic Adventures Coming Soon</h2>
            <p>Our creative team is working on these exciting new games</p>
          </div>

          <div className="upcoming-games-grid">
            {upcomingGames.map((game) => (
              <div key={game.id} className="upcoming-game-card">
                <div className="game-status">{game.status}</div>
                <h3 className="upcoming-game-title">{game.name}</h3>
                <div className="release-info">
                  <span className="eta">Estimated: {game.eta}</span>
                </div>
                <div className="progress-indicator">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{
                        width: game.status === 'In Development' ? '70%' : 
                               game.status === 'Design Phase' ? '40%' : '20%'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="newsletter-cta">
            <h3>Be the First to Know</h3>
            <p>Get notified when new games are released</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
              />
              <button className="subscribe-btn">
                Notify Me <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;