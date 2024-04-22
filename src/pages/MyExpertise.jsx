import React from "react";
import svg2 from "../assets/svg/svg-2.png";
import TabelSkills from "../components/TabelSkills";
import HeaderExpertise from "../components/HeaderExpertise";

const MyExpertise = () => {
  return (
    <section className="bg-background w-full h-screen overflow-hidden flex flex-col">
      <div className="flex justify-center h-full mt-20">
        <h1 className="text-font font-mera text-8xl">MY EXPERTISE</h1>
      </div>
      <HeaderExpertise />
      <div className="text-font font-urbanist absolute mt-28rem ml-28 w-40rem">
        <p className="text-4xl">
          as a specialist in crafting seamless online experiences, i blend
          design aesthetics with user functionality to create visually stunning
          websites and intuitive interfaces that captivate and inspire.
        </p>
      </div>
      <h2 className="text-font font-mera absolute -rotate-90 text-7xl mt-35rem ml-58rem">SKILLS</h2>
      <TabelSkills />
    </section>
  );
};

export default MyExpertise;
