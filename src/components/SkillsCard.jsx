import React from "react";
import skillsData from "../data/skills";
import TabelSkills from "./TabelSkills";

const SkillsCard = () => {
    return (
        <div className="mt-32 ml-32 mr-52 mb-20">
            {skillsData.map((skill, index) => (
                <div className="flex justify-between items-baseline"> 
                    <p className="text-xl">{skill.name}</p>
                    <div className="w-64 h-1px bg-font"> </div>
                    <TabelSkills
                        key={index}
                        skills={skill.skills}
                    />
                </div>
               
            ))}
        </div>
    );
};

export default SkillsCard;