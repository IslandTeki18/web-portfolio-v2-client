import * as React from "react";
import { TerminalCard, CommandPrompt } from "~src/components";

type ProjectOverviewSectionProps = {
  overview: string;
  projectURL?: string;
  githubURL?: string;
  trelloURL?: string;
};

export const ProjectOverviewSection = (props: ProjectOverviewSectionProps) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <TerminalCard glow glowColor="green" className="w-full md:w-8/10">
        <div className="card-body flex flex-col gap-4">
          <CommandPrompt status="ready">
            <span className="text-primary font-bold text-xl">cat README.md</span>
          </CommandPrompt>
          <div className="pl-6 text-base text-base-content leading-relaxed">
            {props.overview}
          </div>
        </div>
      </TerminalCard>
      <TerminalCard glow glowColor="blue" className="text-center w-full md:w-2/10">
        <div className="card-body flex flex-col gap-4">
          <CommandPrompt status="ready">
            <span className="text-primary font-bold text-sm">./links.sh</span>
          </CommandPrompt>
          <div className="flex flex-col gap-3 pl-2">
            {props.projectURL && (
              <a
                href={`${props.projectURL}`}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener"
                className="btn btn-primary btn-sm"
              >
                <span className="text-secondary mr-1">→</span> View Live
              </a>
            )}
            {props.githubURL && (
              <a
                href={`${props.githubURL}`}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener"
                className="btn btn-info btn-sm"
              >
                <span className="text-secondary mr-1">→</span> GitHub
              </a>
            )}
            {props.trelloURL && (
              <a
                href={`${props.trelloURL}`}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener"
                className="btn btn-accent btn-sm"
              >
                <span className="text-secondary mr-1">→</span> Trello
              </a>
            )}
          </div>
        </div>
      </TerminalCard>
    </div>
  );
};
