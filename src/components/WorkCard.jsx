import React, { useEffect, useRef } from "react";
import svg6 from "../assets/svg/svg-6-portfolio.png";
import gsap from "gsap";

const preloadImages = () => {
  const images = [svg6]; 
  images.forEach((image) => {
    new Image().src = image;
  });
};

const WorkCard = ({
  index,
  name,
  picture,
  year,
  month,
  description,
  skills,
  link,
}) => {
  const imageContainer = useRef(null);

  useEffect(() => {
    preloadImages();

    const imageContainerObserver = new IntersectionObserver(
      (entries) => {
        gsap.from(imageContainer.current, {
          opacity: 0,
          x: -50,
          duration: 1,
          delay: 0.5,
        });
      },
      { threshold: 0 }
    );

    imageContainerObserver.observe(imageContainer.current);

    return () => {
      imageContainerObserver.disconnect();
    };
  }, []);

  return (
    <div className="text-font font-urbanist flex h-screen mt-10 justify-between relative">
      <div className="flex flex-col text-right ml-72">
        <h3 className="text-3xl">
          &#40;{index}&#41; {name}
        </h3>
        <div className="work-card-skills">
          {skills.map((skill, index) => (
            <div key={index} className="text-3xl font-thin">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div ref={imageContainer}>
        <div className="absolute -rotate-90 mt-35rem -ml-9 font-extralight">
          <p>{year}</p>
        </div>
        <img
          src={svg6}
          alt="svg portfolio section"
          className="absolute z-0 -mt-12 -ml-12"
        />
        <a href={link} target="_blank">
          <img
            src={picture}
            alt="project photo"
            className="mr-72 z-10 relative"
          />
        </a>
        <div>
          <div className="flex items-center mt-2 -ml-6">
            <p className="mr-3"> &#169;</p>
            <p className="font-extralight">{month}</p>
            <div className="w-72 h-1px bg-font ml-14 mr-14"> </div>
            <p className="font-extralight">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
