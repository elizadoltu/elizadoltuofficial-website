import React from "react";
import SkillsCard from "../components/SkillsCard";

const MyExpertise = () => {

    return (
      <div className="w-full bg-background text-font font-urbanist overflow-x-hidden overflow-y-hidden">
        <div className="flex">
          <h2 className="font-mera text-10xl">MY</h2>
          <div className="flex items-center">
            <div className="bg-font w-20 h-1px"> </div>
            <p className="text-2xl ml-5 mr-5">what i'm doing</p>
            <div className="bg-font w-20 h-1px"> </div>
          </div>
        </div>
        <div className="flex font-mera text-10xl justify-center -mt-28">
          <h1>EXPERTISE</h1>
        </div>
        <div>
          <p className="text-xl ml-32 mt-16 w-40rem">
            Crafting captivating online experiences where{" "}
            <span className="text-about-page-orange font-black">
              design meets functionality
            </span>
            , inspiring connections with every click.
          </p>
        </div>
        <SkillsCard />
      </div>
    );
};

export default MyExpertise;