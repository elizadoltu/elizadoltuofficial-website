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
    <div id="landing-page" className="bg-background min-h-screen text-font font-urbanist relative overflow-y-hidden overflow-x-hidden">
      <div className="flex items-center absolute text-font lg:font-mera font-black font-dmsans rotate-90 lg:-ml-28rem -ml-10rem mt-28rem lg:text-3xl text-4xl z-10">
        <h3>WEB DEVELOPER &#160; &#160; WEB DESIGNER</h3>
      </div>
      <div>
        <div className="flex justify-start items-center h-full absolute top-0 left-20 z-10">
          <img src={svg1} ref={svgRef} alt="svg logo" className="lg:mb-16 lg:ml-8 lg:h-auto lg:w-auto w-10 h-10 -ml-12" />
          <div className="font-mera flex justify-start items-center h-full absolute top-0 lg:left-20 -left-7">
            <h2 className="lg:text-8xl text-5xl lg:font-mera font-dmsans font-black">ELIZADOLTU</h2>
            <p className="lg:text-3xl text-sm lg:mb-20 mb-12 lg:ml-0 lg:font-mera font-dmsans font-black">TM</p>
          </div>
          <p className="lg:text-3xl lg:w-30rem lg:mt-60 lg:-ml-16 text-xl -ml-5 mt-40 w-20rem">
            hi, there! my name is eliza and i am a student and frontend
            developer.
          </p>
        </div>
      </div>
      <div className="border border-font absolute lg:w-445px lg:h-665px -rotate-25 ml-28 -mt-24 opacity-30"></div>
      <div className="border border-font absolute lg:w-445px lg:h-665px -rotate-25 mt-20rem -ml-56 opacity-30"></div>
      <div className="border border-font absolute lg:w-445px lg:h-665px -rotate-25 mt-35rem ml-26rem opacity-30"></div>
      <img
        src={ProfilePicture2}
        alt="profile picture 1 of Eliza Doltu"
        className="absolute -rotate-25 lg:ml-64rem lg:-mt-26rem ml-28 -mt-24 lg:h-auto lg:w-auto w-72 h-96"
      />
      <img
        src={ProfilePicture1}
        alt="profile picture 2 of Eliza Doltu"
        className="absolute -rotate-25 lg:ml-61.5rem lg:mt-40rem lg:h-auto lg:w-auto w-72 h-96 mt-37.5rem ml-16"
      />
      <img
        src={LandingPicture2}
        alt="Abstract photo 1"
        className="absolute -rotate-25 lg:mt-0 lg:ml-43rem mt-52 -ml-24 lg:h-auto lg:w-auto w-72 h-96 -z-0"
      />
      <img
        src={LandingPicture1}
        alt="Abstract photo 2"
        className="absolute -rotate-25 lg:ml-83rem lg:mt-14rem lg:w-auto lg:h-auto w-72 h-96 mt-72 ml-20rem"
      />
    </div>
  );
};

export default LandingPage;
