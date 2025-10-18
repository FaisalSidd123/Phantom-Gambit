import { useState, useRef } from 'react';
import Ballpit from './Background/Background';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/authContext'; // Import AuthProvider

import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import About from './About/About';
import Layout from './Layout/Layout';
import Games from './Games/Games';

function App() {
  const [isBallpitReady, setIsBallpitReady] = useState(false);
  const ballpitRef = useRef();

  return (
    <AuthProvider>
     
    <Router>
     
      <div className="app-container">
        <Ballpit 
  ref={ballpitRef}
  shape="icosahedron"
  colors={['#14053dff', '#8b0959ff', '#40037dff']}
  count={120}
  followCursor={false}
  className="ballpit-background"
  minSize={0.2}    // Reduced from 0.5
  maxSize={0.5}    // Reduced from 1
  size0={0.5}      // Reduced from 1
  onLoad={() => {
    setIsBallpitReady(true);
    document.body.classList.add('ballpit-ready');
  }}
  
/>



       
        {/* Home can now safely use useNavigate */}

     <Routes>
  <Route path="/" element={<Layout />}/> 
  <Route path="/games" element={<Games />} />
   
 
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/about" element={<About />} />
</Routes>

      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
