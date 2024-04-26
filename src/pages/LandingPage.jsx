import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import svg1 from "../assets/svg/svg-1.png";
import ProfilePicture1 from "../assets/png/profile-picture-1.png";
import ProfilePicture2 from "../assets/png/profile-picture-2.png";
import LandingPicture1 from "../assets/png/landing-page-1.png";
import LandingPicture2 from "../assets/png/landing-page-2.png";

const LandingPage = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.to(svgRef.current, {
      rotation: 360,
      duration: 15,
      repeat: -1, 
      ease: "linear",
    });
  }, []);

  return (
    <div id="landing-page" className="bg-background min-h-screen text-font font-urbanist relative overflow-y-hidden">
      <div className="flex items-center absolute text-font font-mera rotate-90 -ml-28rem mt-28rem text-3xl">
        <h3>WEB DEVELOPER &#160; &#160; WEB DESIGNER</h3>
      </div>
      <div>
        <div className="flex justify-start items-center h-full absolute top-0 left-20 z-10">
          <img src={svg1} ref={svgRef} alt="svg logo" className="mb-16 ml-8" />
          <div className="font-mera flex justify-start items-center h-full absolute top-0 left-20">
            <h2 className="text-8xl">ELIZADOLTU</h2>
            <p className="text-3xl mb-20">TM</p>
          </div>
          <p className="text-3xl w-30rem mt-60 -ml-16">
            hi, there! my name is eliza and i am a student and frontend
            developer.
          </p>
        </div>
      </div>
      <div className="border border-font absolute w-445px h-665px -rotate-25 ml-28 -mt-24 opacity-30"></div>
      <div className="border border-font absolute w-445px h-665px -rotate-25 mt-20rem -ml-56 opacity-30"></div>
      <div className="border border-font absolute w-445px h-665px -rotate-25 mt-35rem ml-26rem opacity-30"></div>
      <img
        src={ProfilePicture2}
        alt="profile picture 1 of Eliza Doltu"
        className="absolute -rotate-25 ml-64rem -mt-26rem"
      />
      <img
        src={ProfilePicture1}
        alt="profile picture 2 of Eliza Doltu"
        className="absolute -rotate-25 ml-61.5rem mt-40rem"
      />
      <img
        src={LandingPicture2}
        alt="Abstract photo 1"
        className="absolute -rotate-25 ml-43rem"
      />
      <img
        src={LandingPicture1}
        alt="Abstract photo 2"
        className="absolute -rotate-25 ml-83rem mt-14rem"
      />
    </div>
  );
};

export default LandingPage;
