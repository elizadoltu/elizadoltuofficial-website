import React from "react";

const TabelSkills = ({ skills }) => {
  return (
    <div className="w-45rem mb-28">
      {skills.map((skill) => (
        <div key={skill}>
          <div className="flex justify-between items-center text-font font-mera text-4xl ml-2 mb-4">
            <h3>{skill}</h3>
            <span className="-rotate-135 text-xl font-black">&#8594;</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabelSkills;
