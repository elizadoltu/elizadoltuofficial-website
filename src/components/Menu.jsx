import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const MenuBar = ({ scrollTo }) => {
  const buttonRefs = useRef([]);
  const [hideMenu, setHideMenu] = useState(true); 

  useEffect(() => {
    buttonRefs.current.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          y: -2,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(button.querySelectorAll(".text-char"), {
          y: -2,
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(button.querySelectorAll(".text-char"), {
          y: 0,
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.out",
        });
      });
    });

    const handleScroll = () => {
      const aboutSection = document.getElementById("about-me-page");
      const worksSection = document.getElementById("works-page");
      const expertiseSection = document.getElementById("expertise-page");
      if (aboutSection || worksSection || expertiseSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const worksRect = worksSection.getBoundingClientRect();
        const expertiseRect = expertiseSection.getBoundingClientRect();
        if (
          (aboutRect.top < window.innerHeight && aboutRect.bottom >= 0) ||
          (worksRect.top < window.innerHeight && worksRect.bottom >= 0) ||
          (expertiseRect.top < window.innerHeight && expertiseRect.bottom >= 0)
        ) {
          setHideMenu(false); // Show the menu
        } else {
          setHideMenu(true); // Hide the menu
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-menu bg-opacity-50 p-4 w-full md:w-1/4 rounded-lg border border-white fixed bottom-0 mb-24 ml-40 z-10 ${
        hideMenu ? "hidden" : "block"
      }`}
    >
      <div className="flex justify-between">
        {[
          ["about.", "about-me-page"],
          ["works.", "works-page"],
          ["contact.", "contact-page"],
        ].map((title, idScroll) => (
          <div
            key={idScroll}
            ref={(el) => buttonRefs.current.push(el)}
            className="flex justify-between items-center ml-5 mr-5 font-urbanist"
            onClick={() => scrollTo(title[1])}
          >
            {title[0].split("").map((char, index) => (
              <span key={index} className="text-char text-font">
                {char}
              </span>
            ))}
            <span className="text-font font-urbanist text-xs -rotate-45 ml-2 mb-1">
              &#8594;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
