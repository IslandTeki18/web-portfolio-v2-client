import * as React from "react";
import { Button } from "~src/components";
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
        return "text-error";
      case "Not Live":
      case "Under Construction":
        return "text-error";
      default:
        return "";
    }
  }

  return (
    <div
      className={`bg-base-100 md:max-h-[961px] h-fit px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]`}
    >
      <div className="card bg-base-100 border-2 border-base-content">
        <div className="card-body">
          <div className="flex justify-end order-2 md:order-1">
            <Button
              variant="secondary"
              label="Back to Projects"
              onClick={onBackClickHandler}
            />
          </div>
          <div className="flex justify-between flex-col lg:flex-row items-baseline order-1 lg:order-2 mt-0 lg:mt-4">
            <span className="uppercase tracking-wider text-xl md:text-3xl font-black">
              {props.title}
            </span>
            <span
              className={`${renderStatusColor(
                props.status
              )} md:text-2xl uppercase font-semibold tracking-wider`}
            >
              {props.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
