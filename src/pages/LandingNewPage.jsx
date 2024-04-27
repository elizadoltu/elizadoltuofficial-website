import React, { useEffect, useRef } from "react";
import CustomCursor from "../utils/CustomCursor";
import profilePicture from "../assets/png/profile-picture-1.png";
import { gsap } from "gsap";

const LandingPage = ({ scrollTo }) => {
  const cursorRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    buttonRefs.current.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          y: -2,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(button.querySelector(".underline"), {
          scaleX: 1,
          duration: 0.2,
          ease: "power2.out",
        }); // Add underline animation
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(button.querySelector(".underline"), {
          scaleX: 0,
          duration: 0.2,
          ease: "power2.out",
        }); // Remove underline animation
      });
    });

    const moveCursor = (e) => {
      cursorRef.current.style.left = e.pageX + "px";
      cursorRef.current.style.top = e.pageY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      id="landing-page"
      className="w-full h-screen overflow-hidden bg-black font-urbanist text-font relative mb-20"
    >
      <CustomCursor ref={cursorRef} />
      <div
        ref={(el) => buttonRefs.current.push(el)}
        className="flex flex-col justify-end items-end text-xl mt-10 mr-10"
      >
        <div
          onClick={() => scrollTo("about-me-page")}
          className="cursor-pointer relative"
        >
          about.
          <div className="underline absolute bottom-0 left-0 bg-white w-full h-0.5 transform origin-left scaleX-0"></div>{" "}
          {/* Underline element */}
        </div>
        <div
          onClick={() => scrollTo("works-page")}
          className="cursor-pointer relative"
        >
          works.
          <div className="underline absolute bottom-0 left-0 bg-white w-full h-0.5 transform origin-left scaleX-0"></div>{" "}
          {/* Underline element */}
        </div>
        <div
          onClick={() => scrollTo("contact-page")}
          className="cursor-pointer relative"
        >
          contact.
          <div className="underline absolute bottom-0 left-0 bg-white w-full h-0.5 transform origin-left scaleX-0"></div>{" "}
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
