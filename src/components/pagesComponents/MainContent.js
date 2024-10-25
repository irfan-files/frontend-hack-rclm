import React from "react";
import "./MainContent.css";
import { Link } from "react-router-dom";

// const handleLogin = () => {
//   window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth`;
// };

const handleMenu = () => {
  window.location.href = `/Menu`;
};

const MainContent = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-52 bg-gray-900 max-md:px-5 max-md:py-24 beam-animation min-h-screen relative">
      {/* Animated background elements */}
      <div className="beam-container">
        <div className="beam beam-1"></div>
        <div className="beam beam-2"></div>
        <div className="beam beam-3"></div>
      </div>

      <div className="grid-overlay"></div>
      <div className="particles"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="flex flex-col items-center max-w-full w-[828px] relative z-10">
        <h1 className="glow-text content-fade-up flex flex-wrap gap-3 items-center text-7xl font-medium tracking-tighter leading-snug text-center text-white max-md:flex-nowrap max-md:justify-center max-md:text-4xl animate-fade-in">
          <span>Bring your</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d42fd9c44ab0180932971da963a6e6d144e61b89e13806bb74d81a59b57564"
            className="object-contain shrink-0 aspect-square w-[125px] max-md:w-[80px] animate-float"
            alt="Decorative icon"
          />
        </h1>

        <h2 className="flex flex-wrap gap-3 justify-center items-center text-7xl font-medium tracking-tighter leading-snug text-center text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
          <span className="self-stretch my-auto max-md:text-4xl">to</span>
          <span className="gap-2.5 self-stretch px-3 py-0 my-auto text-gray-900 bg-blue-400 rounded-3xl min-w-[240px] max-md:text-4xl hover:bg-blue-300 transition-colors">
            onchain
          </span>
          <span className="self-stretch my-auto max-md:text-4xl">economy</span>
        </h2>
        <br />
        <button
          onClick={handleMenu}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transform transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#1E40AF_50%,#3B82F6_100%)]" />

          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <span className="mr-2">Explore</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default MainContent;
