import * as React from "react";
import { Link, useLocation } from "react-router-dom";

export const PortfolioHeader = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname.startsWith("/project");
  const isResumePage = location.pathname === "/resume";

  return (
    <header className="flex items-center justify-between h-20 px-20 bg-[#0A0F1C]">
      <Link to="/" className="text-[#22D3EE] font-bold text-lg tracking-[3px] font-mono">
        PORTFOLIO
      </Link>
      <nav className="flex items-center gap-10">
        <Link
          to="/projects"
          className={`font-medium text-xs tracking-[2px] font-mono hover:text-[#22D3EE] transition-colors ${
            isProjectsPage ? "text-[#22D3EE]" : "text-[#94A3B8]"
          }`}
        >
          PROJECTS
        </Link>
        <Link
          to="/resume"
          className={`font-medium text-xs tracking-[2px] font-mono hover:text-[#22D3EE] transition-colors ${
            isResumePage ? "text-[#22D3EE]" : "text-[#94A3B8]"
          }`}
        >
          RESUME
        </Link>
        <a
          href="#contact"
          className="text-[#94A3B8] font-medium text-xs tracking-[2px] font-mono hover:text-[#22D3EE] transition-colors"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
};
