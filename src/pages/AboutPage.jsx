import React from "react";
import ProfilePhoto from '../assets/png/profile-picture-about.png';
import svg1 from '../assets/svg/svg-1.png';

const AboutPage = () => {

    return (
        <section id="about-me-page" className="w-full h-screen bg-background text-font font-urbanist relative">
            
            <div className="font-mera flex absolute items-center rotate-90 mt-40 ml-37.5rem">
                <img src={svg1} alt="logo"/>
                <h2 className="text-7xl absolute ml-12">ABOUT.</h2>
            </div>
            <div className="absolute w-40rem ml-64rem mt-32">
                <p className="text-4xl">hello! i'm <span className="text-about-page-orange font-black">eliza-teodora doltu</span>, a student at "alexandru-ioan cuza" university in iasi,
                specializing in <span className="text-about-page-orange font-black">frontend development and web design.</span> passionate about blending technology and art,
                i continually strive to enhance my skills with each project.</p>
            </div>
            <div className="absolute w-35rem h-1 bg-white ml-64rem mt-30rem"> </div>
            <div className="absolute w-35rem ml-64rem mt-35rem">
                <p className="text-4xl">i believe that <span className="text-about-page-orange font-black">every website has a unique story to tell</span>, and i'm 
                dedicated to ensuring thta each design accurately portrays that narrative.</p>
            </div>
            <img src={ProfilePhoto} alt="profile picture of eliza doltu" className="absolute h-43rem w-30rem ml-40 mt-20"/>
        </section>
    );
};

export default AboutPage;