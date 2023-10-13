import * as React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

type MainNavBarProps = {
  home?: boolean;
  projects?: boolean;
  services?: boolean;
  blogs?: boolean;
  about?: boolean;
  resume?: boolean;
  contact?: boolean;
};
export const MainNavbar = (props: MainNavBarProps) => {
  const [isBars, setIsBars] = useState(false);
  const navigation = [
    { name: "Home", path: "/", current: props.home },
    { name: "Projects", path: "/projects", current: props.projects },
    // { name: "Services", path: "/services", current: props.services },
    // { name: "Blog", path: "/blogs", current: props.blogs },
    { name: "About", path: "/about", current: props.about },
    { name: "Resume", path: "/resume", current: props.resume },
    { name: "Contact", path: "/contact", current: props.contact },
  ];

  return (
    <nav className="bg-dark h-fit md:h-16 md:max-h-[961px] px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%] relative mt-4">
      <div className="flex justify-between items-center w-full h-inher">
        <Link
          to="/"
          className="text-white text-2xl font-medium tracking-wider uppercase"
        >
          Landon McKell
        </Link>
        <ul className="flex justify-around gap-6 text-white">
          {navigation.map((item) => (
            <li className="hidden md:block">
              <NavLink
                to={item.path}
                className={`${item.current ? "font-bold underline" : ""}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li className="block md:hidden">
            <i
              className={`fa-solid fa-${!isBars ? "bars" : "xmark"} text-xl`}
              onClick={() => setIsBars((prev) => !prev)}
            />
          </li>
        </ul>
      </div>
      {isBars ? (
        <ul
          className={`
            border border-white p-2 flex flex-wrap md:flex-nowrap justify-center top-10 gap-4 text-white mt-4 md:hidden 
            animate__animated animate__fadeInDown animate__fast
        `}
        >
          {navigation.map((item) => (
            <li className="block md:hidden">
              <NavLink
                to={item.path}
                className={`${
                  item.current ? "font-bold underline" : ""
                } text-xm md:text-2xl`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};
