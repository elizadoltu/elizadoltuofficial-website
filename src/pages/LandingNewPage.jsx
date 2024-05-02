import React, { useState, useEffect, useRef } from "react";
import CustomCursor from "../utils/CustomCursor";
import profilePicture from "../assets/png/profile-picture-1.png";
import { gsap } from "gsap"; 

const LandingPage = ({ scrollTo }) => {
  const [hovered, setHovered] = useState(null); 
  const buttonRefs = useRef([]); 

  useEffect(() => {
    const animateUnderline = (ref, isHovered) => {
      gsap.to(ref, {
        scaleX: isHovered ? 1 : 0, 
        duration: 0.2,
        ease: "power2.out",
      });
    };

    buttonRefs.current.forEach((button) => {
      animateUnderline(button.querySelector(".underline"), false);

      button.addEventListener("mouseenter", () => {
        setHovered(button.id); 
        animateUnderline(button.querySelector(".underline"), true); 
      });
      button.addEventListener("mouseleave", () => {
        setHovered(null); 
        animateUnderline(button.querySelector(".underline"), false); 
      });
    });

    return () => {
      buttonRefs.current.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []); 

  return (
    <div className="w-full h-screen overflow-hidden bg-black font-urbanist text-font mb-20">
      <CustomCursor />
      <div className="flex flex-col justify-end items-end text-xl mt-10 mr-10">
        <div
          id="about"
          className="menu-item cursor-pointer relative"
          onClick={() => scrollTo("about-me-page")}
          ref={(el) => (buttonRefs.current[0] = el)} 
        >
          about.
          <div className="underline absolute bottom-0 left-0 bg-white w-full h-0.5 transform origin-left scaleX-0"></div>
        </div>
        <div
          id="works"
          className="menu-item cursor-pointer relative"
          onClick={() => scrollTo("works-page")}
          ref={(el) => (buttonRefs.current[1] = el)}
        >
          works.
          <div className="underline absolute bottom-0 left-0 bg-white w-full h-0.5 transform origin-left scaleX-0"></div>
        </div>
        <div
          id="contact"
          className="menu-item cursor-pointer relative"
          onClick={() => scrollTo("contact-page")}
          ref={(el) => (buttonRefs.current[2] = el)} 
        >
          contact.
          <div className="underline absolute bottom-0 left-0 bg-white w-full h-0.5 transform origin-left scaleX-0"></div>
        </div>
      </div>
      <div className="flex justify-start items-start mt-20">
        <h1 className="lg:font-mera font-dmsans lg:font-normal font-black lg:text-12xl -ml-14">ELIZA</h1>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex justify-center items-center -mt-16 ml-32">
          <div className="h-1px w-20 bg-font"> </div>
          <p className="ml-4 mr-4">web developer</p>
          <div className="h-1px w-20 bg-font"> </div>
        </div>
        <h1 className="lg:font-mera lg:text-12xl font-dmsans font-black lg:font-normal -mt-44 -mr-32 z-10 mix-blend-difference">
          DOLTU
        </h1>
      </div>
      <div>
        <img
          src={profilePicture}
          alt="profile picture of Eliza Doltu"
          className="-mt-35rem ml-65rem"
        />
      </div>
      <div>
        <div className="flex justify-center items-center -mt-40 -ml-20">
          <div className="h-1px w-20 bg-font"> </div>
          <p className="ml-4 mr-4">web designer</p>
          <div className="h-1px w-20 bg-font"> </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
