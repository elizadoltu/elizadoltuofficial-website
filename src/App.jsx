import React from 'react';
import LandingPage from './pages/LandingPage';
import MenuBar from './components/Menu';
import AboutPage from './pages/AboutPage';
import MyExpertise from './pages/MyExpertise';

function App() {

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <LandingPage />
      <MenuBar scrollTo={scrollTo}/>
      <AboutPage />
      <MyExpertise />
    </>
  )
}

export default App;
