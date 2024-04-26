import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import LandingPage from "./pages/LandingPage";
import MenuBar from "./components/Menu";
import AboutPage from "./pages/AboutPage";
import MyExpertise from "./pages/MyExpertise";
import MyWorks from "./pages/MyWorks";
import Contact from "./pages/Contact";
import About from "./pages/AboutNewPage";
import OfficialLogo from "./assets/svg/official-logo.png";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [loading, setLoading] = useState(true);
  const logoRef = useRef(null);

  useEffect(() => {
    // Simulate loading delay
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    // Cleanup function
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // GSAP animations for loading screen transition
    if (!loading) {
      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set(".loading-screen", { display: "none" });
        },
      });
      gsap.from(".content", {
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      // Logo fade-in animation
      gsap.to(logoRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [loading]);

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
      <div className="app">
        {/* Loading screen */}
        <div
          className={`w-full h-screen bg-background font-urbanist text-font flex flex-col justify-center items-center loading-screen ${
            loading ? "visible" : "hidden"
          }`}
        >
          <img
            ref={logoRef}
            src={OfficialLogo}
            alt="official logo website"
            className="w-52 h-52"
            style={{ opacity: 0 }} // Initial opacity set to 0
          />
          <h1>Loading...</h1>
        </div>

        {/* Actual content */}
        <div className={`content ${loading ? "hidden" : "visible"}`}>
          <LandingPage />
          <MenuBar scrollTo={scrollTo} />
          <About />
          <MyExpertise />
          <MyWorks />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
