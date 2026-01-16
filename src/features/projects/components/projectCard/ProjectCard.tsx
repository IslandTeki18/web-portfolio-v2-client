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
      <div className="card bg-base-100 hover:bg-base-200 transition-colors border border-base-content h-[180px]">
        <div className="card-body justify-between">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-full md:w-4/5">
              <span className="uppercase font-bold">
                {props.title}
              </span>
              <span className="line-clamp-5">
                {props.projectDescription}
              </span>
            </div>
            <span className="uppercase">{props.projectType}</span>
          </div>
          <div className="flex justify-between items-end">
            <span>{props.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
