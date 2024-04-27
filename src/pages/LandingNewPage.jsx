import React, { useEffect, useRef } from "react";
import CustomCursor from "../utils/CustomCursor";
import profilePicture from "../assets/png/profile-picture-1.png";
import { gsap } from "gsap";

const LandingPage = ({ scrollTo }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorRef.current.style.left = e.pageX + "px";
      cursorRef.current.style.top = e.pageY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const handleMouseEnter = (underline) => {
    gsap.to(underline, {
      scaleX: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (underline) => {
    gsap.to(underline, {
      scaleX: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <div
      id="landing-page"
      className="w-full h-screen overflow-hidden bg-black font-urbanist text-font relative mb-20"
    >
      <CustomCursor ref={cursorRef} />
      <div className="flex flex-col justify-end items-end text-xl mt-10 mr-10">
        <div
          onClick={() => scrollTo("about-me-page")}
          className="cursor-pointer relative"
        >
          <span className="text-button">about.</span>
          <div
            className="underline absolute bottom-0 left-0 bg-white w-full h-0.5 transform origin-left scaleX-0"
            onMouseEnter={() =>
              handleMouseEnter(document.getElementById("about-underline"))
            }
            onMouseLeave={() =>
              handleMouseLeave(document.getElementById("about-underline"))
            }
            id="about-underline"
          ></div>{" "}
          {/* Underline element */}
        </div>
        <div
          onClick={() => scrollTo("works-page")}
          className="cursor-pointer relative"
        >
          <span className="text-button">works.</span>
          <div
            className="underline absolute bottom-0 left-0 bg-white w-full h-0.5 transform origin-left scaleX-0"
            onMouseEnter={() =>
              handleMouseEnter(document.getElementById("works-underline"))
            }
            onMouseLeave={() =>
              handleMouseLeave(document.getElementById("works-underline"))
            }
            id="works-underline"
          ></div>{" "}
          {/* Underline element */}
        </div>
        <div
          onClick={() => scrollTo("contact-page")}
          className="cursor-pointer relative"
        >
          <span className="text-button">contact.</span>
          <div
            className="underline absolute bottom-0 left-0 bg-white w-full h-0.5 transform origin-left scaleX-0"
            onMouseEnter={() =>
              handleMouseEnter(document.getElementById("contact-underline"))
            }
            onMouseLeave={() =>
              handleMouseLeave(document.getElementById("contact-underline"))
            }
            id="contact-underline"
          ></div>{" "}
          {/* Underline element */}
        </div>
      </div>
      <div className="flex justify-start items-start mt-20">
        <h1 className="font-mera text-12xl -ml-14">ELIZA</h1>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex justify-center items-center -mt-16 ml-32">
          <div className="h-1px w-20 bg-font"> </div>
          <p className="ml-4 mr-4">web developer</p>
          <div className="h-1px w-20 bg-font"> </div>
        </div>
        <h1 className="font-mera text-12xl -mt-44 -mr-32 z-10 mix-blend-difference">
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
