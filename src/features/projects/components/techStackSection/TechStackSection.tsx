import * as React from "react";
import { TerminalCard, CommandPrompt } from "~src/components";

type TechStackSectionProps = {
  techStack: string[];
  tags: string[];
};

export const TechStackSection = (props: TechStackSectionProps) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <TerminalCard glow glowColor="green" className="w-full md:w-6/10">
        <div className="card-body flex flex-col gap-4">
          <CommandPrompt status="ready">
            <span className="text-primary font-bold text-lg">./tech-stack.sh</span>
          </CommandPrompt>
          <div className="flex flex-wrap gap-2 pl-6">
            {props.techStack.length > 0 ? (
              props.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="badge badge-success badge-outline font-mono text-xs"
                >
                  {tech}
                </span>
              ))
            ) : (
              <span className="text-base-content/60 font-mono text-sm">
                No tech stack specified
              </span>
            )}
          </div>
        </div>
      </TerminalCard>
      <TerminalCard glow glowColor="blue" className="w-full md:w-4/10">
        <div className="card-body flex flex-col gap-4">
          <CommandPrompt status="ready">
            <span className="text-primary font-bold text-lg">./tags.sh</span>
          </CommandPrompt>
          <div className="flex flex-wrap gap-2 pl-6">
            {props.tags.length > 0 ? (
              props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge badge-info badge-outline font-mono text-xs"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-base-content/60 font-mono text-sm">
                No tags specified
              </span>
            )}
          </div>
        </div>
      </TerminalCard>
    </div>
  );
};
