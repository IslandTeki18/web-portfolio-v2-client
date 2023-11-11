import * as React from "react";
import { Button } from "~src/components";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  status: string;
  date: string;
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
        return "text-success-500";
      case "In Development":
        return "text-warning-500";
      case "Not Live":
      case "Under Construction":
        return "text-danger-500";
      default:
        return "white";
    }
  }

  return (
    <div
      className={`bg-dark md:max-h-[961px] h-fit px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]`}
    >
      <div className="text-white border-2 flex flex-col border-white p-2 md:p-8">
        <div className="flex justify-end order-2 lg:order-1">
          {/* <span className="my-2">{props.date}</span> */}
          <Button
            variant="secondary"
            label="Back to Projects"
            labelColor="dark"
            onClick={onBackClickHandler}
          />
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-baseline order-1 lg:order-2 mt-0 lg:mt-4">
          <span className="uppercase text-white text-xl md:text-3xl tracking-wide font-black">
            {props.title}
          </span>
          <span
            className={`${renderStatusColor(
              props.status
            )} md:text-2xl uppercase`}
          >
            {props.status}
          </span>
        </div>
      </div>
    </div>
  );
};
