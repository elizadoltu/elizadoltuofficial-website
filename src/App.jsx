import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import OfficialLogo from "./assets/svg/official-logo.svg";

import MenuBar from "./components/Menu";
import AboutPage from "./pages/AboutPage";
import MyWorks from "./pages/MyWorks";
import Contact from "./pages/Contact";
import About from "./pages/AboutNewPage";
import MyExpertise from "./pages/MyExpertiseNew";
import LandingPage from "./pages/LandingNewPage";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [loading, setLoading] = useState(true);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
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
      tl.play();
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

    move();
  }, []);

  function move() {
    let width = 1;
    const id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
        tl.play();
      } else {
        width++;
        loadingBarRef.current.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
      }
    }, 10);
  }

  return (
    <>
      <div className="app bg-black" style={{ overflow: "hidden" }}>
        <div
          className={`w-full h-screen bg-black font-urbanist text-font flex flex-col justify-center items-center loading-screen ${
            loading ? "visible" : "hidden"
          }`}
        >
          <div className="flex justify-center items-center">
            <img
              src={OfficialLogo}
              alt="official logo of the website"
              className="lg:w-52 lg:h-52 w-40 h-40"
            />
          </div>
          <div id="preloader" className="bg-font h-2" style={{ width: "0%" }}>
            <div id="percent">1%</div>
            <div id="bar" ref={loadingBarRef}></div>
          </div>
        </div>

        {!loading && (
          <div className="content">
            <LandingPage scrollTo={scrollTo}/>
            <MenuBar scrollTo={scrollTo} />
            <About dataSpeed={0.5} />
            <MyExpertise dataSpeed={0.7} />
            <MyWorks dataSpeed={1} />
            <Contact dataSpeed={0.8} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
