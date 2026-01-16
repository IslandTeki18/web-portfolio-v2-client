import * as React from "react";

type ProjectOverviewSectionProps = {
  overview: string;
  projectURL?: string;
  githubURL?: string;
  trelloURL?: string;
};

export const ProjectOverviewSection = (props: ProjectOverviewSectionProps) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <div className="card bg-base-100 border border-base-content w-full md:w-8/10">
        <div className="card-body flex flex-col gap-4">
          <span className="font-bold text-3xl tracking-wide uppercase">
            Project Overview
          </span>
          <span className="text-base">{props.overview}</span>
        </div>
      </div>
      <div className="card bg-base-100 border border-base-content text-center w-full md:w-2/10">
        <div className="card-body flex flex-col gap-4">
          {props.projectURL && (
            <a
              href={`${props.projectURL}`}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener"
              className="btn btn-primary uppercase"
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
              className="btn btn-primary uppercase"
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
              className="btn btn-primary uppercase"
            >
              Trello Board
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
