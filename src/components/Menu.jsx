import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MenuBar = ({ scrollTo }) => {
  const buttonRefs = useRef([]);

  useEffect(() => {
    buttonRefs.current.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          y: -2, // Move the button slightly upwards
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(button.querySelectorAll(".text-char"), {
          y: -2, // Move the text slightly upwards
          duration: 0.2,
          stagger: 0.02, // Stagger the animation for each character
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          y: 0, // Reset button position
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(button.querySelectorAll(".text-char"), {
          y: 0, // Reset text position
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <div className="bg-menu bg-opacity-50 p-4 w-full md:w-1/4 rounded-lg border border-white fixed bottom-0 mb-24 ml-40 z-10">
      <div className="flex justify-between">
        {[
          ["about.", "about-me-page"],
          ["works.", "works-page"],
          ["contact.", "contact-page"],
        ].map((title, idScroll) => (
          <div
            key={idScroll}
            ref={(el) => buttonRefs.current.push(el)}
            className="cursor-pointer flex justify-between items-center ml-5 mr-5 font-urbanist"
            onClick={() => scrollTo(title[1])}
          >
            {/* Wrap each character in a span with a class */}
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
