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
    <div
      className="flex flex-col justify-between border border-white p-8 h-72"
      key={props.id}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span className="uppercase text-white font-bold">{props.title}</span>
          <span className="text-white w-4/5">{props.projectDescription}</span>
        </div>
        <span className="text-white uppercase">{props.projectType}</span>
      </div>
      <div className="flex justify-between items-end">
        <span className="text-white">{props.date}</span>
        <Link
          to={`/project/${props.id}`}
          className="border border-white px-6 py-2 text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};
