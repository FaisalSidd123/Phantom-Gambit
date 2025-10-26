import { useState, useRef } from 'react';
import Ballpit from './Background/Background';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './Context/authContext';

import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import About from './About/About';
import Layout from './Layout/Layout';

import GameDetails from './GamesDetail/GamesDetail';
import Games from './Games/Games'
import Contact from './Contact/Contact';

function AppContent() {
  const [isBallpitReady, setIsBallpitReady] = useState(false);
  const ballpitRef = useRef();
  const location = useLocation();

  // Show Ballpit only on home page and games gallery, not on individual game pages
  const showBallpit = location.pathname === '/' || location.pathname === '/games';

  return (
    <div className="app-container">
      {showBallpit && (
        <Ballpit 
          ref={ballpitRef}
          shape="icosahedron"
          colors={['#14053dff', '#8b0959ff', '#40037dff']}
          count={120}
          followCursor={false}
          className="ballpit-background"
          minSize={0.2}
          maxSize={0.5}
          size0={0.5}
          onLoad={() => {
            setIsBallpitReady(true);
            document.body.classList.add('ballpit-ready');
          }}
        />
      )}
      
      <Routes>
        <Route path="/" element={<Layout />} /> 
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;