import * as React from "react";
import { NavLink } from "react-router-dom";

export const MainNavbar = () => {
  const navigation = [
    { name: "Home", path: "/", current: true },
    { name: "Projects", path: "projects", current: false },
    { name: "About", path: "about", current: false },
    { name: "Resume", path: "resume", current: false },
    { name: "Contact", path: "contact", current: false },
  ];

  return (
    <nav className="bg-dark h-16 w-screen px-28">
      <div className="flex justify-between items-center w-full h-inher">
        <span className="text-white text-2xl font-medium tracking-wider uppercase">Landon McKell</span>
        <ul className="flex justify-around gap-6 text-white">
          {navigation.map((item) => (
            <li>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
