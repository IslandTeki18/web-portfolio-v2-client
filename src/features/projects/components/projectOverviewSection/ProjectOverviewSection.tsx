import * as React from "react";

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
        {props.projectURL && (
          <a
            href={`${props.projectURL}`}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener"
            className="uppercase w-full py-1 bg-primary-500"
          >
            Project Url
          </a>
        )}
        {props.githubURL && (
          <a
            href={`${props.githubURL}`}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener"
            className="uppercase w-full py-1 bg-primary-500"
          >
            Github Repo
          </a>
        )}
        {props.trelloURL && (
          <a
            href={`${props.trelloURL}`}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener"
            className="uppercase w-full py-1 bg-primary-500"
          >
            Trello Board
          </a>
        )}
      </div>
    </div>
  );
};
