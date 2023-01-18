import * as React from "react";
import { NavLink } from "react-router-dom";

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
  const navigation = [
    { name: "Home", path: "/", current: props.home },
    { name: "Projects", path: "/projects", current: props.projects },
    { name: "Services", path: "/services", current: props.services },
    { name: "Blog", path: "/blogs", current: props.blogs },
    { name: "About", path: "/about", current: props.about },
    { name: "Resume", path: "/resume", current: props.resume },
    { name: "Contact", path: "/contact", current: props.contact },
  ];

  return (
    <nav className="bg-dark h-16 w-screen md:max-h-[961px] px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <div className="flex justify-between items-center w-full h-inher">
        <span className="text-white text-2xl font-medium tracking-wider uppercase">
          Landon McKell
        </span>
        <ul className="flex justify-around gap-6 text-white">
          {navigation.map((item) => (
            <li>
              <NavLink
                to={item.path}
                className={`${item.current ? "font-bold underline" : ""}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
