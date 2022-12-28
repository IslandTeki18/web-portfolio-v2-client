import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "~src/components";

type ProjectOverviewSectionProps = {
  overview: string;
  projectURL?: string;
  githubURL?: string;
  trelloURL?: string;
};

export const ProjectOverviewSection = (props: ProjectOverviewSectionProps) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap text-white gap-4 px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <div className="border border-white p-6 flex flex-col gap-4 w-full md:w-8/10">
        <span className="font-bold text-3xl tracking-wide uppercase">
          Project Overview
        </span>
        <span className="text-base">{props.overview}</span>
      </div>
      <div className="border border-white text-white text-center p-2 flex flex-col gap-4 w-full md:w-2/10">
        <Link
          to={`${props.projectURL}`}
          className="uppercase w-full py-1 bg-primary-500"
        >
          Project Url
        </Link>
        <Link
          to={`${props.projectURL}`}
          className="uppercase w-full py-1 bg-primary-500"
        >
          Github Repo
        </Link>
        <Link
          to={`${props.projectURL}`}
          className="uppercase w-full py-1 bg-primary-500"
        >
          Trello Board
        </Link>
      </div>
    </div>
  );
};

ProjectOverviewSection.defaultProps = {
  projectURL: "/",
  githubURL: "/",
  trelloURL: "/",
  overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a rhoncus orci, sit amet aliquet mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus bibendum enim in est pulvinar, ac consectetur tellus eleifend. Ut congue dui eu consectetur placerat. Curabitur nisl arcu, aliquam ut feugiat ullamcorper, luctus a quam. Integer a sem eu ipsum placerat maximus non nec ipsum. Ut ut massa orci. ",
};
