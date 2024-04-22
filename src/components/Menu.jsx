import React from "react";

const MenuBar = ({ scrollTo }) => {
  return (
    <div className="bg-menu bg-opacity-50 p-4 w-full md:w-1/4 rounded-lg border border-white fixed bottom-0 mb-24 ml-40 z-10">
      <div className="flex justify-between">
        {[
          ['about.', 'about-me-page'],
          ['works.', 'works-page'],
          ['contact.', 'contact-page']
        ].map((title, idScroll) => (
          <div className="cursor-pointer flex justify-between" onClick={() => scrollTo(title[1])}>
            <h3 className="text-font font-urbanist text-xl font">{title[0]}</h3>
            <span className="text-font font-urbanist text-xs -rotate-45 ml-2 mb-1 font-black">&#8594;</span>
          </div>
        ))}
      </div>
    </div>
  );
};  

export default MenuBar;
