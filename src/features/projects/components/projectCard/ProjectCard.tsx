import * as React from "react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  id: string;
  title?: string;
  projectDescription?: string;
  projectType?: string;
  date?: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link to={`/project/${props.id}`}>
      <div
        className="flex flex-col justify-between border border-white bg-dark hover:bg-darker p-4 md:p-8 h-[180px]"
      >
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2 w-full md:w-4/5">
            <span className="uppercase text-white font-bold">
              {props.title}
            </span>
            <span className="text-white line-clamp-5">
              {props.projectDescription}
            </span>
          </div>
          <span className="text-white uppercase">{props.projectType}</span>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-white">{props.date}</span>
        </div>
      </div>
    </Link>
  );
};
