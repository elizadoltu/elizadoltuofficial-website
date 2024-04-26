import React, { useEffect } from "react";
import { gsap } from "gsap";
import svg4 from "../assets/svg/svg-4.png";

const ContactColumn = ({ name, links }) => {

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: y, autoKill: false },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="flex flex-col font-urbanist text-font">
      <div className="flex items-center text-3xl font-black relative">
        <h3 className="z-10">{name}</h3>
        <img src={svg4} alt="logo svg" className="-ml-5" />
      </div>
      <div className="h-1px w-32 bg-font mb-4"> </div>
      <div>
        {links.map((link, index) => (
          <div key={index} className="mb-2 text-2xl font-extralight">
            {link.label === "Home" ||
            link.label === "About" ||
            link.label === "Works" ||
            link.label === "Contact" ? (
              <div onClick={() => smoothScroll(link.id)} className="cursor-pointer">
                {link.label}
              </div>
            ) : (
              <a href={link.url} target="_blank">
                {link.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactColumn;
