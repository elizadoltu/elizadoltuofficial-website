import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin
import LandingPage from "./pages/LandingPage";
import MenuBar from "./components/Menu";
import AboutPage from "./pages/AboutPage";
import MyExpertise from "./pages/MyExpertise";

gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin

function App() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: section.offsetTop },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <>
      <LandingPage />
      <MenuBar scrollTo={scrollTo} />
      <AboutPage />
      <MyExpertise />
    </>
  );
}

export default App;
