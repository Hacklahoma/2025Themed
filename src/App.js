import React from 'react';
import './App.css';

import LandingPage from './components/LandingPage';
import RatBreak from './components/RatBreak';
import AboutPage from './components/AboutPage';
import FaqPage from './components/FaqPage';
import SponsorPage from './components/SponsorPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <RatBreak />
      <AboutPage />
      <FaqPage />
      <SponsorPage />
    </div>
  );
}

export default App;
