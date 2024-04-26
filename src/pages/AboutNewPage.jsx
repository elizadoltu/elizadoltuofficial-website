import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ProfilePicture from "../assets/png/profile-image-about.png";

const About = () => {
  const paragraphRef1 = useRef(null);
  const paragraphRef2 = useRef(null);

  useEffect(() => {
    gsap.from(paragraphRef1.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(paragraphRef2.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1,
    });
  }, []);

  return (
    <div
      id="about-me-page"
      className="w-full h-screen bg-background text-font font-urbanist"
    >
      <div className="flex justify-center items-center overflow-hidden">
        <h1 className="font-mera text-15xl">ABOUT</h1>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center px-10">
          <div className="flex items-center ml-10 w-fit">
            <div className="w-20 h-1px bg-font"> </div>
            <p className="text-2xl ml-10 mr-10">who am i?</p>
            <div className="w-20 h-1px bg-font"> </div>
          </div>
          <div>
            <img
              src={ProfilePicture}
              alt="photo of eliza doltu"
              className="ml-16 mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col text-2xl">
          <div className="w-64rem" ref={paragraphRef1}>
            <p>
              Hello! I'm{" "}
              <span className="text-about-page-orange font-black">
                Eliza-Teodora Doltu
              </span>
              , a student at “Alexandru-Ioan Cuza” University in Iasi,
              specializing in{" "}
              <span className="text-about-page-orange font-black">
                frontend development and web design
              </span>
              . Passionate about blending technology and art, I continually
              strive to enhance my skills with each project.{" "}
            </p>
          </div>
          <div className="mt-20 w-64rem" ref={paragraphRef2}>
            <p>
              {" "}
              I believe that{" "}
              <span className="text-about-page-orange font-black">
                every website has a unique story to tell
              </span>
              , and I'm dedicated to ensuring that each design accurately
              portrays that narrative.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
