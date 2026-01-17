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
    { name: "About", path: "/about", current: props.about },
    { name: "Resume", path: "/resume", current: props.resume },
  ];

  return (
    <nav className="bg-base-100 h-fit md:h-16 md:max-h-[961px] px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%] pt-4 relative">
      {/* Desktop */}
      <div className="flex justify-between items-center w-full h-inher">
        <Link
          to="/"
          className="text-base-content text-2xl font-medium tracking-wider uppercase"
        >
          Landon McKell
        </Link>
        <ul className="flex justify-around gap-6 ">
          {navigation.map((item) => (
            <li className="hidden md:block" key={item.name}>
              <NavLink
                to={item.path}
                className={`link ${item.current ? "link-primary font-bold" : "link-hover"}`}
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
      {/* Mobile */}
      {isBars ? (
        <ul
          className={`
            border border-base-content p-2 flex flex-wrap md:flex-nowrap justify-center top-10 gap-4  mt-4 md:hidden
            animate__animated animate__fadeInDown animate__fast
        `}
        >
          {navigation.map((item) => (
            <li className="block md:hidden" key={item.name}>
              <NavLink
                to={item.path}
                className={`link ${
                  item.current ? "link-primary font-bold" : "link-hover"
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
