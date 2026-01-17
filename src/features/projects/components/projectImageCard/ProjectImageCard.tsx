import * as React from "react";
import { Link } from "react-router-dom";
import { useTimeFormatter } from "~src/hooks";
import { TerminalCard } from "~src/components";

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
      <TerminalCard glow glowColor="purple" className="overflow-hidden p-0 hover:bg-base-200 transition-all">
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
            <span className="text-primary font-bold">
              {props.title}
            </span>
            <span className="text-base-content opacity-70 line-clamp-4">
              {props.projectDescription}
            </span>
          </div>
          <span className="text-secondary text-sm w-1/4 md:w-1/6 text-right">
            {props.projectType}
          </span>
        </div>
        <div className="flex justify-between items-end p-4 md:p-8">
          <span className="text-info text-sm">{formattedCreatedAt}</span>
        </div>
      </TerminalCard>
    </Link>
  );
};
