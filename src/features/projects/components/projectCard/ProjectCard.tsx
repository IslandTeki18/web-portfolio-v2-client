import * as React from "react";
import { Link } from "react-router-dom";
import { TerminalCard } from "~src/components";

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
      <TerminalCard glow glowColor="green" className="h-[180px] hover:bg-base-200 transition-all">
        <div className="card-body justify-between">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-full md:w-4/5">
              <span className="text-primary font-bold">
                {props.title}
              </span>
              <span className="text-base-content line-clamp-5">
                {props.projectDescription}
              </span>
            </div>
            <span className="text-secondary text-sm">{props.projectType}</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-info text-sm">{props.date}</span>
          </div>
        </div>
      </TerminalCard>
    </Link>
  );
};
