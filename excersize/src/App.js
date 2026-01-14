import React, { useState } from 'react';
// import Input from './components/day2/Input';
// import Total from './components/day2/Total';
import About from "./components/portfolio/About";
import Contact from "./components/portfolio/contact";
import Experience from "./components/portfolio/Experience"; // Assuming this is Desktop 2 (Projects)
import Skills from "./components/portfolio/Skills"; // Assuming this is Desktop 3 (Skills)
// import Excersize from "./components/portfolio/Exprince"; // Not needed
// import Work from "./components/portfolio/Work"; // Not needed

function App() {
  const [currentScreen, setCurrentScreen] = useState(1); 

  const handleNext = () => {
    setCurrentScreen(prev => Math.min(prev + 1, 4)); 
  };

  const handleBack = () => {
    setCurrentScreen(prev => Math.max(prev - 1, 1));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <About onNext={handleNext} />;
      case 2:
        
        return <Experience onNext={handleNext} onBack={handleBack} />; 
      case 3:
        
        return <Skills onNext={handleNext} onBack={handleBack} />; 
      case 4:
        return <Contact onBack={handleBack} />;
      default:
        return <About onNext={handleNext} />;
    }
  };

  return (
    <div className="portfolio-container">
      {renderScreen()}
    </div>
  );
}

export default App;