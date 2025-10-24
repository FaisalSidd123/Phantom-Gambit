import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Games.css';

const Games = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredGame, setHoveredGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    document.body.classList.add('games-page-active');
    
    return () => {
      document.body.classList.remove('games-page-active');
    };
  }, []);

  const games = [
    {
      id: 'deceptionist',
      title: 'Deceptionist',
      subtitle: 'A Game of Lies and Strategy',
      description: 'Uncover the truth while hiding your own secrets in this social deduction masterpiece. Outwit your opponents through cunning strategies and clever bluffs.',
      image: '/api/placeholder/400/500',
      players: '2-6',
      duration: '45-90min',
      age: '14+',
      rating: '4.8',
      tags: ['Social Deduction', 'Strategy', 'Bluffing', 'Party Game'],
      featured: true,
      color: '#7877c6',
      releaseDate: '2024'
    }
    // Add more games here in the future
  ];

  const handleGameSelect = (gameId) => {
    navigate(`/games/${gameId}`);
  };

  return (
    <div className={`games-gallery ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <section className="games-hero">
        <div className="hero-background">
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
        </div>
        
        <div className="hero-content">
          <div className="brand-intro">
            <h1 className="brand-title">
              Phantom <span className="gradient-text">Gambit</span>
            </h1>
            <p className="brand-subtitle">Where Strategy Meets Deception</p>
            <div className="brand-tagline">
              Immerse yourself in our collection of mind-bending board games designed 
              for strategic thinkers and master deceivers. Each game offers unique 
              challenges and unforgettable experiences.
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Explore Our Games</p>
        </div>
      </section>

      {/* Games Grid Section */}
      <section className="games-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Games Collection</h2>
            <p>Discover unique gaming experiences crafted for strategic minds</p>
          </div>

          <div className="games-grid">
            {games.map((game, index) => (
              <div
                key={game.id}
                className={`game-card ${game.featured ? 'featured' : ''} ${
                  hoveredGame === game.id ? 'hovered' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
                onClick={() => handleGameSelect(game.id)}
              >
                <div className="game-card-inner">
                  <div className="card-background" style={{
                    background: `linear-gradient(135deg, ${game.color}20, #000000)`
                  }}></div>
                  
                  <div className="game-badge">
                    {game.featured && <span className="featured-badge">⭐ Featured</span>}
                    <span className="rating-badge">★ {game.rating}</span>
                    <span className="release-badge">{game.releaseDate}</span>
                  </div>

                  <div className="game-content">
                    <div className="game-header">
                      <h3 className="game-title">{game.title}</h3>
                      <p className="game-subtitle">{game.subtitle}</p>
                    </div>
                    
                    <p className="game-description">{game.description}</p>
                    
                    <div className="game-meta">
                      <div className="meta-item">
                        <span className="meta-icon">👥</span>
                        <span>{game.players} Players</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">⏱️</span>
                        <span>{game.duration}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">🎯</span>
                        <span>Age {game.age}</span>
                      </div>
                    </div>

                    <div className="game-tags">
                      {game.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="game-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="card-cta">
                    <button className="explore-btn">
                      Explore Game
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>

                  <div className="card-glow" style={{
                    background: `radial-gradient(circle at center, ${game.color}30, transparent 70%)`
                  }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="coming-soon-section">
            <div className="coming-soon-content">
              <h3>More Strategic Experiences Coming Soon</h3>
              <p>We're constantly developing new games that challenge your mind and test your deception skills</p>
              <div className="coming-soon-grid">
                {[
                  { name: "Shadow Realms", type: "Fantasy Strategy" },
                  { name: "Neon Nexus", type: "Cyberpunk Bluffing" },
                  { name: "Royal Intrigue", type: "Political Deception" }
                ].map((game, index) => (
                  <div key={index} className="coming-soon-card">
                    <div className="mystery-game">
                      <div className="mystery-icon">🎮</div>
                      <div className="mystery-content">
                        <h4>{game.name}</h4>
                        <p>{game.type}</p>
                      </div>
                      <div className="coming-soon-badge">Coming Soon</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;