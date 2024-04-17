import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-background text-font min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-landing-page-orange font-urbanist">
        Welcome to Our Website!
      </h1>
      <p className="mt-4 text-xl font-mera">
        Discover our services and offers.
      </p>
      <button className="mt-8 px-6 py-2 rounded bg-about-page-orange text-white hover:bg-landing-page-orange transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
