import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfilePhoto from "../assets/png/profile-picture-about.png";
import svg1 from "../assets/svg/svg-1.png";

const AboutPage = () => {
  const paragraphRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    paragraphRefs.current.forEach((paragraph, index) => {
      gsap.from(paragraph, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: paragraph,
          start: index === 0 ? "top 50%" : "top 60%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.from(containerRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <section
      id="about-me-page"
      className="w-full h-screen bg-background text-font font-urbanist"
    >
      <div
        ref={containerRef}
        className="font-mera flex absolute items-center rotate-90 mt-20rem ml-24rem"
      >
        <img src={svg1} alt="logo"/>
        <h2 className="text-7xl -ml-16">ABOUT.</h2>
      </div>
      <div className="absolute w-40rem ml-64rem mt-32">
        <p ref={(el) => (paragraphRefs.current[0] = el)} className="text-4xl">
          hello! i'm{" "}
          <span className="text-about-page-orange font-black">
            eliza-teodora doltu
          </span>
          , a student at "alexandru-ioan cuza" university in iasi, specializing
          in{" "}
          <span className="text-about-page-orange font-black">
            frontend development and web design.
          </span>{" "}
          passionate about blending technology and art, i continually strive to
          enhance my skills with each project.
        </p>
      </div>
      <div className="absolute w-35rem h-1px bg-white ml-64rem mt-30rem"> </div>
      <div className="absolute w-35rem ml-64rem mt-35rem">
        <p ref={(el) => (paragraphRefs.current[1] = el)} className="text-4xl">
          i believe that{" "}
          <span className="text-about-page-orange font-black">
            every website has a unique story to tell
          </span>
          , and i'm dedicated to ensuring that each design accurately portrays
          that narrative.
        </p>
      </div>
      <img
        src={ProfilePhoto}
        alt="profile picture of eliza doltu"
        className="absolute h-43rem w-30rem ml-40 mt-20"
      />
    </section>
  );
};

export default AboutPage;
