import * as React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="text-white border border-white p-6 mx-[3%] sm:mx-[8.33333%] 2xl:mx-[16.666%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div id="personal-info" className="flex flex-col justify-between">
            <div className="flex flex-col mb-2">
              <span className="font-bold text-2xl tracking-wide">
                Landon McKell
              </span>
            </div>
            <div className="flex gap-10">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github text-4xl" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter text-4xl" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <hr className="mx-[3%] sm:mx-[8.33333%] 2xl:mx-[16.666%] my-6 bg-primary-100" />
      <div className="flex justify-between text-white border border-white mx-[3%] sm:mx-[8.33333%] 2xl:mx-[16.666%] p-4 pb-6">
        <span>
          AFI TECH
          <i className="fa-regular fa-copyright px-1" />
          2022
        </span>
        <div className="hidden md:flex justify-evenly gap-6 md">
          <Link to="/projects" className="uppercase">
            Projects
          </Link>
          <Link to="/about" className="uppercase">
            About
          </Link>
          <Link to="/resume" className="uppercase">
            Resume
          </Link>
          
        </div>
      </div>
    </>
  );
};
