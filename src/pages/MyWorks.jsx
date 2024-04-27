import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svg6 from "../assets/svg/svg-portfolio.png";
import WorkCard from "../components/WorkCard";
import data from "../data/workData.js";

const MyWorks = () => {
  const workCardsContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const workCards = workCardsContainerRef.current.children;

    gsap.to(workCards, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: workCardsContainerRef.current,
        start: "top 80%", // Start fading in when the top of the container reaches 80% of the viewport height
        end: "bottom 20%", // End fading in when the bottom of the container reaches 20% of the viewport height
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      id="works-page"
      className="w-full bg-background text-font font-urbanist overflow-x-hidden h-auto -z-10"
    >
      <div className="flex justify-center mt-16">
        <h1 className="font-mera text-10xl">PORTFOLIO</h1>
      </div>
      <div className="flex items-center justify-end mr-20 -mt-10 mb-20">
        <div className="bg-font w-24 h-1px mr-10"> </div>
        <div className="flex items-center">
          <p className="font-extralight text-3xl -ml-7">selected works</p>
        </div>
        <div className="bg-font w-24 h-1px ml-5"> </div>
      </div>
      <div
        ref={workCardsContainerRef}
        style={{ display: "flex", flexDirection: "column" }} // Ensure the container displays its children in a column layout
      >
        {data.map((work, index) => (
          <div
            key={work.index}
            style={{ marginBottom: "100px", opacity: 0 }} // Initially set opacity to 0 for the fade-in effect
          >
            <WorkCard
              index={work.index}
              name={work.name}
              picture={work.picture}
              year={work.year}
              month={work.month}
              description={work.description}
              skills={work.skills}
              link={work.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
