import React, { useState, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with gaming-style animation
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Trigger success animation
      document.querySelector('.submit-btn').classList.add('success');
      setTimeout(() => {
        document.querySelector('.submit-btn').classList.remove('success');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Animated Background Elements */}
      <div className="contact-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="contact-container">
        {/* Header Section with Gaming Flair */}
        <div className="contact-header">
          <div className="header-glow"></div>
          <h1 className="contact-title">
            <span className="title-text">CONTACT</span>
            <span className="title-subtext">PHANTOM GAMBIT</span>
          </h1>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            Ready to level up your gaming experience? Let's strategize together.
          </p>
          <div className="header-stats">
            <div className="stat">
              <span className="stat-number">24h</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">1k+</span>
              <span className="stat-label">Players Helped</span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          {/* Contact Information - Gaming Style */}
          <div className="contact-info">
            <div className="info-card">
              <div className="card-glow"></div>
              <div className="card-header">
                <h2 className="info-title">COMMAND CENTER</h2>
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Online</span>
                </div>
              </div>
              
              <div className="contact-channels">
                <div className="channel">
                  <div className="channel-icon">🎮</div>
                  <div className="channel-content">
                    <h3>Gaming Support</h3>
                    <p>Get help with game rules and strategies</p>
                    <span className="channel-tag">Live Support</span>
                  </div>
                </div>

                <div className="channel">
                  <div className="channel-icon">⚡</div>
                  <div className="channel-content">
                    <h3>Quick Connect</h3>
                    <p>contact@phantomgambit.com</p>
                    <span className="channel-tag">Priority Response</span>
                  </div>
                </div>

                <div className="channel">
                  <div className="channel-icon">🌐</div>
                  <div className="channel-content">
                    <h3>Community Hub</h3>
                    <p>Join our Discord server</p>
                    <span className="channel-tag">Active Players</span>
                  </div>
                </div>

                <div className="channel">
                  <div className="channel-icon">🤝</div>
                  <div className="channel-content">
                    <h3>Partnerships</h3>
                    <p>collab@phantomgambit.com</p>
                    <span className="channel-tag">Business Inquiries</span>
                  </div>
                </div>
              </div>

              <div className="support-hours">
                <h4>SUPPORT HOURS</h4>
                <div className="time-slots">
                  <div className="time-slot">
                    <span className="day">MON - FRI</span>
                    <span className="hours">09:00 - 18:00 EST</span>
                  </div>
                  <div className="time-slot">
                    <span className="day">WEEKENDS</span>
                    <span className="hours">12:00 - 16:00 EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Gaming Theme */}
          <div className="contact-form-section">
            <div className="form-container">
              <div className="form-header">
                <h2>SEND TRANSMISSION</h2>
                <p>Initiate contact protocol. We'll decrypt your message ASAP.</p>
              </div>

              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">PLAYER IDENTITY</label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className={`form-input ${activeField === 'name' ? 'active' : ''}`}
                        placeholder="Enter your callsign"
                        required
                      />
                      <div className="input-glow"></div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">COMMS CHANNEL</label>
                    <div className="input-container">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className={`form-input ${activeField === 'email' ? 'active' : ''}`}
                        placeholder="your@transmission.portal"
                        required
                      />
                      <div className="input-glow"></div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">MISSION TYPE</label>
                  <div className="input-container">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      className={`form-select ${activeField === 'subject' ? 'active' : ''}`}
                      required
                    >
                      <option value="">Select mission objective</option>
                      <option value="support">🛡️ Tactical Support</option>
                      <option value="partnership">🤝 Alliance Proposal</option>
                      <option value="wholesale">📦 Supply Chain</option>
                      <option value="feedback">💡 Strategy Feedback</option>
                      <option value="bug">🐛 Bug Report</option>
                      <option value="other">❓ Other Inquiry</option>
                    </select>
                    <div className="input-glow"></div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">ENCRYPTED MESSAGE</label>
                  <div className="input-container">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className={`form-textarea ${activeField === 'message' ? 'active' : ''}`}
                      placeholder="Transmit your message for decryption..."
                      rows="6"
                      required
                    ></textarea>
                    <div className="input-glow"></div>
                    <div className="char-counter">
                      {formData.message.length}/500
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="btn-content">
                    {isSubmitting ? (
                      <>
                        <div className="transmission-loader">
                          <div className="loader-dot"></div>
                          <div className="loader-dot"></div>
                          <div className="loader-dot"></div>
                        </div>
                        INITIATING TRANSMISSION...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">🚀</span>
                        LAUNCH TRANSMISSION
                      </>
                    )}
                  </span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>QUICK ACTIONS</h3>
          <div className="action-grid">
            <div className="action-card">
              <div className="action-icon">📚</div>
              <h4>Game Rules</h4>
              <p>Download rulebooks and guides</p>
              <button className="action-btn">Download</button>
            </div>
            <div className="action-card">
              <div className="action-icon">🎯</div>
              <h4>Strategy Guides</h4>
              <p>Master your gameplay</p>
              <button className="action-btn">Explore</button>
            </div>
            <div className="action-card">
              <div className="action-icon">👥</div>
              <h4>Join Community</h4>
              <p>Connect with players</p>
              <button className="action-btn">Join Discord</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;