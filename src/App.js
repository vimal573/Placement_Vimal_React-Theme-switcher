import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/header';
import HeroSection from './components/heroSection';

const App = () => {
  const themeHook = useState('light');
  return (
    <ThemeContext.Provider value={themeHook}>
      <Header />
      <HeroSection />
    </ThemeContext.Provider>
  );
};

export default App;
