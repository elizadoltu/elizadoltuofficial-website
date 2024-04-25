import React from "react";

const TabelSkills = () => {
  return (
    <div className="border border-white rounded-2xl p-10 w-40rem absolute right-0 mr-20 mt-20rem bg-background">
      {["HTML", "CSS", "REACTJS", "GSAP", "FIGMA"].map((skill) => (
        <div key={skill}>
          <div className="flex justify-between items-center text-font font-mera text-4xl ml-2">
            <h3>{skill}</h3>
            <span className="-rotate-135 text-xl font-black">&#8594;</span>
          </div>
          <div className="opacity-60 w-32rem h-1px bg-white mt-8 mb-8"> </div>
        </div>
      ))}
    </div>
  );
};

export default TabelSkills;
