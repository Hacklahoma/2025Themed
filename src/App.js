import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import RatBreak from './components/RatBreak';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <RatBreak />
      <AboutPage />
    </div>
  );
}

export default App;
