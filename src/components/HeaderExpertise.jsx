import React from "react";
import svg2 from "../assets/svg/svg-2.png";

const HeaderExpertise = () => {
  return (
    <div className="w-full border-t-2 border-b-2 absolute border-white flex justify-between pt-5 pb-5 overflow-x-hidden mt-36 bg-background">
      {["WEB DEVELOPMENT", "WEB DESIGN", "WIREFRAMING", "UX/UI DESIGN"].map(
        (skill, index) => (
          <div
            key={index}
            className="flex font-mera text-font items-center text-2xl ml-10 mr-10"
            style={{ width: "max-content" }}
          >
            <img src={svg2} alt="some svg" />
            <h3 className="ml-5">{skill}</h3>
          </div>
        )
      )}
    </div>
  );
};

export default HeaderExpertise;
