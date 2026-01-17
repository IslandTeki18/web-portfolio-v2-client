import * as React from "react";
import { Button, TerminalWindow, CommandPrompt } from "~src/components";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  status: string;
  date: string | Date;
};

export const ProjectDetailsHeader = (props: Props) => {
  const navigate = useNavigate();

  function onBackClickHandler() {
    navigate("/projects");
  }

  function renderStatusColor(status: string): string {
    switch (status) {
      case "Completed":
      case "Live":
        return "text-success";
      case "In Development":
        return "text-warning";
      case "Not Live":
      case "Under Construction":
        return "text-error";
      default:
        return "";
    }
  }

  return (
    <div
      className={`md:max-h-[961px] h-fit px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]`}
    >
      <TerminalWindow showChrome title="~/projects/details" glowColor="purple">
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            label="← cd ~/projects"
            onClick={onBackClickHandler}
          />
        </div>
        <CommandPrompt status="ready">
          <span className="text-primary font-bold text-xl">cat project.info</span>
        </CommandPrompt>
        <div className="flex justify-between flex-col lg:flex-row items-baseline mt-4 pl-6">
          <span className="text-base-content tracking-wider text-xl md:text-3xl font-bold">
            {props.title}
          </span>
          <span
            className={`${renderStatusColor(
              props.status
            )} md:text-xl font-semibold tracking-wider`}
          >
            [{props.status}]
          </span>
        </div>
      </TerminalWindow>
    </div>
  );
};
