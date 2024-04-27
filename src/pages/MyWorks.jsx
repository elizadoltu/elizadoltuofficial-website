import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svg6 from "../assets/svg/svg-portfolio.png";
import WorkCard from "../components/WorkCard";
import data from "../data/workData.js";

const MyWorks = () => {
  const workCardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    workCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        y: () => `+=${index * 200}`, // Adjust the parallax effect as needed
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true, // Smoothly animates the element as you scroll
        },
      });
    });
  }, []);

  return (
    <div
      id="works-page"
      className="w-full bg-background text-font font-urbanist overflow-x-hidden overflow-y-hidden h-auto -z-10"
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
      {data.map((work, index) => (
        <div
          ref={(element) => (workCardsRef.current[index] = element)}
          key={work.index}
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
  );
};

export default MyWorks;
