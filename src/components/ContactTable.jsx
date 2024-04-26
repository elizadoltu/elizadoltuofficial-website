import React from "react";
import svg4 from "../assets/svg/svg-4.png";

const ContactColumn = ({ name, links }) => {
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
            {typeof link === "string" ? (
              <a href={`/${link}`}>
                {link}
              </a>
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
