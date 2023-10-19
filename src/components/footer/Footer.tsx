import * as React from "react";
import { Link } from "react-router-dom";
import { IFooterListItem } from "~src/types";

export const Footer = () => {
  // TODO: Hook up icon links

  const mockProjectList: IFooterListItem[] = [
    { name: "Project One", id: "an34f3" },
    { name: "Project Two", id: "asdf32f" },
    { name: "Project Three", id: "asdf4" },
    { name: "Project Four", id: "an34fasdf3" },
    { name: "Project Five", id: "q24fqf" },
  ];

  const mockBlogList: IFooterListItem[] = [
    { name: "Blog One", id: "an34f3" },
    { name: "Blog Two", id: "asdf32f" },
    { name: "Blog Three", id: "asdf4" },
    { name: "Blog Four", id: "an34fasdf3" },
    { name: "Blog Five", id: "q24fqf" },
  ];

  function renderList(list: IFooterListItem[], name: string) {
    return list.map((item) => (
      <Link key={item.id} to={`${name}/${item.id}`} className="text-base font-semibold">
        {item.name}
      </Link>
    ));
  }

  return (
    <>
      <footer className="text-white border border-white p-6 mx-[3%] sm:mx-[8.33333%] 2xl:mx-[16.666%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div id="personal-info" className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-wide">
                Landon McKell
              </span>
              <span className="text-base mt-4">
                WEB DEVELOPER <br /> Spanish Fork, UT <br /> 84660, USA
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
          <div id="project-list" className="flex flex-col justify-between ">
            <span className="uppercase text-3xl font-bold tracking-wide text-center">
              Projects
            </span>
            <div className="flex flex-col gap-4 pt-8 mx-auto">
              {renderList(mockProjectList, "project")}
            </div>
          </div>
          <div id="blog-list" className="flex flex-col justify-between">
            <span className="uppercase text-3xl font-bold tracking-wide text-center">
              Blog
            </span>
            <div className="flex flex-col gap-4 pt-8 mx-auto">
              {renderList(mockBlogList, "blog")}
            </div>
          </div>
        </div>
      </footer>
      <hr className="mx-[3%] sm:mx-[8.33333%] 2xl:mx-[16.666%] my-6 bg-primary-100" />
      <div className="flex justify-between text-white border border-white mx-[3%] sm:mx-[8.33333%] 2xl:mx-[16.666%] p-4 mb-6">
        <span>
          AFI TECH
          <i className="fa-regular fa-copyright px-1" />
          2022
        </span>
        <div className="hidden md:flex justify-evenly gap-6 md">
          <Link to="/projects" className="uppercase">
            Projects
          </Link>
          <Link to="/services" className="uppercase">
            Services
          </Link>
          <Link to="/about" className="uppercase">
            About
          </Link>
          <Link to="/resume" className="uppercase">
            Resume
          </Link>
          <Link to="/blogs" className="uppercase">
            Blog
          </Link>
          <Link to="/contact" className="uppercase">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
