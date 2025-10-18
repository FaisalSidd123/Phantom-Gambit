import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useAuth } from '../Context/authContext';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../Firebase/auth';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import SignIn from '../SignIn/SignIn';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef();
  const { setCurrentUser, setUserRole } = useAuth();
  const navigate = useNavigate();

  // Click outside to close
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { user, role } = await doCreateUserWithEmailAndPassword(
        formData.email,
        formData.password,
        formData.username
      );
      
      setCurrentUser(user);
      setUserRole(role);
      navigate('/');
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  const MovetoSignIn = () => {
    navigate("/signin")
  }

  const handleGoogleSignIn = async () => {
    setError('');
    setIsSubmitting(true);
    
    try {
      await doSignInWithGoogle();
      // Auth state change will be handled by AuthProvider
      navigate('/');
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  // Ripple effect
  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <div className="signup-overlay">
      <motion.div 
        className="signup-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        ref={modalRef}
        className="signup-container"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ 
          type: 'spring',
          damping: 20,
          stiffness: 300
        }}
      >
        <motion.div 
          className="signup-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>JOIN THE GAMBIT</h2>
          <p>Create your account to access exclusive features</p>
         
        </motion.div>

        {error && (
          <motion.div 
            className="auth-error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="signup-form">
          <motion.div 
            className="input-group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <div className="input-underline"></div>
            </div>
          </motion.div>

          <motion.div 
            className="input-group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="input-underline"></div>
            </div>
          </motion.div>

          <motion.div 
            className="input-group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <div className="input-underline"></div>
            </div>
          </motion.div>

          <motion.div 
            className="input-group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <div className="input-underline"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button 
              type="submit" 
              className="signup-submit-btn"
              onClick={createRipple}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="spinner"></span>
              ) : (
                <>
                  <span>CREATE ACCOUNT</span>
                  <FaArrowRight className="arrow-icon" />
                </>
              )}
              <div className="btn-hover-effect"></div>
            </button>
          </motion.div>

          <motion.div 
            className="social-login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>
            <button 
              type="button" 
              className="social-btn google"
              onClick={handleGoogleSignIn}
              disabled={isSubmitting}
            >
              <FaGoogle />
              <span>Google</span>
            </button>
          </motion.div>
        </form>

        <motion.div 
          className="signin-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Already have an account? <button onClick={MovetoSignIn}>Sign In</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;