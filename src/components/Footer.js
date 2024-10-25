import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="flex flex-col gap-16 items-center px-0 py-12 bg-gray-900">
      <div class="flex flex-wrap justify-between items-center px-8 max-w-full w-[1280px] max-md:px-5">
        <div class="flex flex-col items-start self-stretch my-auto w-40">
          <Link to="/">
            <img
              src="https://i.postimg.cc/3R2bSY2N/logo-creatorhub.png"
              alt="Creator Beam"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <nav class="flex flex-wrap flex-1 shrink gap-8 justify-center items-center self-stretch my-auto basis-0 min-h-[80px] min-w-[240px] max-md:max-w-full"></nav>
      </div>
      <div class="flex flex-col px-8 mt-16 max-w-full text-base w-[1280px] max-md:px-5 max-md:mt-10">
        <div class="flex flex-wrap gap-8 pt-8 w-full border-t border-t-slate-600 max-md:max-w-full">
          <p class="flex-1 shrink my-auto text-gray-300 basis-0 max-md:max-w-full">
            © 2024 Creator Hub
          </p>
          <nav class="flex gap-4 items-start h-full text-gray-500 whitespace-nowrap">
            <a href="#">
              <Link to="/terms">Terms of Service</Link>
            </a>
            <a href="#">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
