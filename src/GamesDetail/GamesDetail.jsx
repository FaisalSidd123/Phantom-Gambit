import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GameDetails.css';

const GameDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [game, setGame] = useState(null);
  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    // Fetch game data based on gameId
    const gameData = getGameData(gameId);
    setGame(gameData);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [gameId]);

  const getGameData = (id) => {
    // Mock data - in real app, this would come from an API
    const games = {
      deceptionist: {
        id: 'deceptionist',
        title: "Deceptionist",
        subtitle: "A Game of Lies and Strategy",
        description: "In a world where truth is scarce and deception reigns, players must outwit their opponents through cunning strategies and clever bluffs. Uncover the truth while hiding your own secrets.",
        fullDescription: "Deceptionist is a social deduction game that pits players against each other in a battle of wits and deception. With asymmetric roles, dynamic gameplay, and multiple paths to victory, every game is a unique experience that will test your ability to read others while concealing your own intentions.",
        features: [
          "2-6 Players | 45-90 Minutes | Ages 14+",
          "Social Deduction & Strategic Bluffing",
          "Asymmetric Player Roles with Unique Abilities",
          "Dynamic Gameplay with Multiple Endings",
          "High Replayability with Variable Setups",
          "Beautifully Crafted Components and Artwork"
        ],
        rules: [
          "Each player receives a secret role card determining their allegiance and special abilities",
          "Players take turns performing actions while carefully maintaining their cover story",
          "Use deduction cards to gather information and reveal other players' secrets",
          "Engage in strategic voting phases to eliminate suspected opponents",
          "The game ends when either the Truth Seekers expose the Master Deceptionist or the Deceptionists achieve their hidden objectives",
          "Special event cards can dramatically shift the balance of power at any moment"
        ],
        components: [
          "Double-sided Game Board with different scenarios",
          "6 Detailed Character Tokens",
          "45 Action Cards with special abilities",
          "30 Deduction Cards for information gathering",
          "12 Secret Role Cards with unique powers",
          "25 Mystery Tokens & Objective Markers",
          "Rulebook with advanced strategies",
          "Custom Dice Set for resolution"
        ],
        price: "49.99",
        players: "2-6",
        duration: "45-90min",
        age: "14+",
        rating: "4.8",
        complexity: "Medium",
        tags: ["Social Deduction", "Strategy", "Bluffing", "Party Game", "Asymmetric"],
        color: '#7877c6'
      }
    };
    
    return games[id] || null;
  };

  const handleBackToGames = () => {
    navigate('/games');
  };

  if (!game) {
    return (
      <div className="game-details-loading">
        <div className="loading-spinner"></div>
        <p>Loading game details...</p>
      </div>
    );
  }

  return (
    <div className={`game-details-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Back Button */}
      <button className="back-to-games-btn" onClick={handleBackToGames}>
        <span className="back-arrow">←</span>
        Back to Games
      </button>

      {/* Hero Section */}
      <section className="game-hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="game-logo">
            <h1 className="game-title">{game.title}</h1>
            <p className="game-subtitle">{game.subtitle}</p>
          </div>
          
          <div className="game-quick-info">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Players</span>
                <span className="info-value">{game.players}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Duration</span>
                <span className="info-value">{game.duration}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Age</span>
                <span className="info-value">{game.age}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Complexity</span>
                <span className="info-value">{game.complexity}</span>
              </div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="play-now-btn">
              <span className="btn-text">Buy Now - ${game.price}</span>
              <div className="btn-shine"></div>
            </button>
            
            <button className="watch-trailer-btn">
              <span className="btn-icon">▶</span>
              Watch Gameplay Trailer
            </button>

            <button className="wishlist-btn">
              <span className="btn-icon">❤</span>
              Add to Wishlist
            </button>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <p>Discover More</p>
        </div>
      </section>

      {/* Game Content Section */}
      <section className="game-content-section">
        <div className="container">
          {/* Navigation Tabs */}
          <nav className="content-tabs">
            {['overview', 'features', 'rules', 'components', 'gallery'].map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="tab-panel fade-in">
                <h2>About {game.title}</h2>
                <p className="game-full-description">{game.fullDescription}</p>
                
                <div className="game-stats">
                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-icon">👥</div>
                      <div className="stat-number">{game.players}</div>
                      <div className="stat-label">Players</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">⏱️</div>
                      <div className="stat-number">{game.duration}</div>
                      <div className="stat-label">Duration</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">🎯</div>
                      <div className="stat-number">{game.age}</div>
                      <div className="stat-label">Age</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">⭐</div>
                      <div className="stat-number">{game.rating}/5</div>
                      <div className="stat-label">Rating</div>
                    </div>
                  </div>
                </div>

                <div className="game-tags-showcase">
                  <h3>Game Categories</h3>
                  <div className="tags-container">
                    {game.tags.map((tag, index) => (
                      <span key={index} className="game-tag-large">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="tab-panel fade-in">
                <h2>Game Features</h2>
                <div className="features-grid">
                  {game.features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-icon">✦</div>
                      <div className="feature-content">
                        <p>{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="tab-panel fade-in">
                <h2>How to Play</h2>
                <div className="rules-container">
                  {game.rules.map((rule, index) => (
                    <div key={index} className="rule-card">
                      <div className="rule-number">{index + 1}</div>
                      <div className="rule-content">
                        <p>{rule}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'components' && (
              <div className="tab-panel fade-in">
                <h2>What's in the Box</h2>
                <div className="components-showcase">
                  {game.components.map((component, index) => (
                    <div key={index} className="component-item">
                      <div className="component-icon">📦</div>
                      <span className="component-text">{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="tab-panel fade-in">
                <h2>Game Gallery</h2>
                <div className="gallery-placeholder">
                  <div className="gallery-message">
                    <span className="gallery-icon">🖼️</span>
                    <h3>Game Images Coming Soon</h3>
                    <p>Stay tuned for actual gameplay photos and component showcases</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="game-cta-section">
        <div className="cta-content">
          <h2>Ready to Enter the World of {game.title}?</h2>
          <p>Join thousands of players who have already experienced the thrill of deception and strategy</p>
          <div className="cta-buttons">
            <button className="cta-primary">Buy Now - ${game.price}</button>
            <button className="cta-secondary">Download Rulebook PDF</button>
            <button className="cta-tertiary">Find a Retailer</button>
          </div>
          <div className="cta-features">
            <div className="feature-guarantee">
              <span className="guarantee-icon">✓</span>
              <span>30-day money back guarantee</span>
            </div>
            <div className="feature-shipping">
              <span className="shipping-icon">🚚</span>
              <span>Free shipping on orders over $75</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameDetails;