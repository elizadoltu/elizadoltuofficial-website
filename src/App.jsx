import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import OfficialLogo from "./assets/svg/official-logo.svg";

import LandingPage from "./pages/LandingPage";
import MenuBar from "./components/Menu";
import AboutPage from "./pages/AboutPage";
import MyExpertise from "./pages/MyExpertise";
import MyWorks from "./pages/MyWorks";
import Contact from "./pages/Contact";
import About from "./pages/AboutNewPage";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [loading, setLoading] = useState(true);
  const loadingBarRef = useRef(null);

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
      // Start GSAP timeline animation
      tl.play();

      // Start the loading bar animation
      move();
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

  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    // GSAP animations
    tl.to("#percent, #bar", { duration: 0.2, opacity: 0, zIndex: -1 })
      .to("#preloader", { duration: 0.8, width: "0%" })
      .from(".container", { duration: 1.5, y: "-150%" }, "-=0.2")
      .to(".container h1", {
        opacity: 1,
        textShadow: "12px 20px rgba(255,255,255,0.23)",
        skewY: 10,
        y: "10%",
        stagger: { amount: 0.4 },
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let width = 1;
  let id;

  function move() {
    id = setInterval(frame, 10);
  }

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      tl.play();
    } else {
      width++;
      loadingBarRef.current.style.width = width + "%";
      document.getElementById("percent").innerHTML = width + "%";
    }
  }

  return (
    <>
      <div className="app">
        {/* Loading screen */}
        <div
          className={`w-full h-screen bg-background font-urbanist text-font flex flex-col justify-center items-center loading-screen ${
            loading ? "visible" : "hidden"
          }`}
        >
          <div>
            <img
              src={OfficialLogo}
              alt="official logo of the website"
              className="w-52 h-52"
            />
          </div>
          <div
            id="preloader"
            className="bg-font h-2"
            style={{ width: "0%" }} // Initial width set to 0%
          >
            <div id="percent">1%</div>
            <div id="bar" ref={loadingBarRef}></div>
          </div>
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
