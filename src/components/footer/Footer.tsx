import * as React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-base-100 rounded-md border border-base-content p-6 mx-[3%] sm:mx-[8.33333%] 2xl:mx-[16.666%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div id="personal-info" className="flex flex-col justify-between">
            <div className="flex flex-col mb-2">
              <span className="font-bold text-2xl tracking-wide">
                Landon McKell
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle"
              >
                <i className="fa-brands fa-github text-2xl" />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle"
              >
                <i className="fa-brands fa-twitter text-2xl" />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle"
              >
                <i className="fa-brands fa-instagram text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="divider mx-[3%] sm:mx-[8.33333%] 2xl:mx-[16.666%]"></div>
      <div className="flex justify-between bg-base-100 border border-base-content mx-[3%] sm:mx-[8.33333%] 2xl:mx-[16.666%] p-4 pb-6">
        <span>
          AFI TECH
          <i className="fa-regular fa-copyright px-1" />
          2022
        </span>
        <div className="hidden md:flex justify-evenly gap-6 md">
          <Link to="/projects" className="link link-hover uppercase">
            Projects
          </Link>
          <Link to="/resume" className="link link-hover uppercase">
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};
