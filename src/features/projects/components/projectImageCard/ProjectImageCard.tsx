import * as React from "react";
import { Link } from "react-router-dom";
import { useTimeFormatter } from "~src/hooks";

type ProjectImageCardProps = {
  id: string;
  title?: string;
  projectDescription?: string;
  projectType?: string;
  createdAt?: string;
  projectImage?: string;
};

export const ProjectImageCard = (props: ProjectImageCardProps) => {
  const formattedCreatedAt = useTimeFormatter(props.createdAt || "", "en-US");
  return (
    <Link to={`/project/${props.id}`}>
      <div className="flex flex-col justify-between border border-white bg-dark hover:bg-darker">
        <div className="relative h-72">
          <img
            src={props.projectImage}
            alt="project"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="flex justify-between p-4 md:p-8 h-[200px]">
          <div className="flex flex-col gap-2 w-3/4 md:w-5/6">
            <span className="uppercase text-white font-bold">
              {props.title}
            </span>
            <span className="text-gray-400 line-clamp-4">
              {props.projectDescription}
            </span>
          </div>
          <span className="text-white uppercase w-1/4 md:w-1/6 text-right">
            {props.projectType}
          </span>
        </div>
        <div className="flex justify-between items-end p-4 md:p-8">
          <span className="text-white">{formattedCreatedAt}</span>
        </div>
      </div>
    </Link>
  );
};
