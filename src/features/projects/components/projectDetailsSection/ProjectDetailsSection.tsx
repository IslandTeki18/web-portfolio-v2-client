import * as React from "react";
import { ITag } from "../../types/interfaces";
// @ts-ignore
import noImage from "../../assets/noImage2.png"

type ProjectDetailsSectionProps = {
  isPublic?: boolean;
  client: string;
  budget?: string;
  startDate: string;
  progress?: number;
  projectImage: string
  tags?: ITag[]
};

export const ProjectDetailsSection = (props: ProjectDetailsSectionProps) => {
  function renderProjectProgress(progress: number): string {
    if (progress <= 25) {
      return "text-danger-500";
    } else if (progress > 25 && progress <= 50) {
      return "text-warning-700";
    } else if (progress > 50 && progress <= 75) {
      return "text-warning-400";
    } else if (progress > 75 && progress < 100) {
      return "text-success-300";
    } else {
      return "text-success-500";
    }
  }
  return (
    <div className="flex flex-wrap md:flex-nowrap text-white gap-4 px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <div className="border border-white p-4 flex flex-col gap-4 w-full order-2 md:order-1 lg:w-2/4 xl:w-3/10 animate__animated animate__fadeInLeft">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg uppercase">
            {!props.isPublic ? (
              <i className="fa-solid fa-globe mr-2" />
            ) : (
              <i className="fa-solid fa-lock mr-2" />
            )}
            {!props.isPublic ? "Public" : "Private"} Project
          </span>
          <span className="font-bold text-lg">
            <i className="fa-solid fa-user mr-2" />
            CLIENT:
            <span className="ml-2 font-normal text-base">{props.client}</span>
          </span>
          {/* <span className="font-bold text-lg">
            <i className="fa-regular fa-credit-card mr-2" />
            BUDGET:
            <span className="ml-2 font-normal text-base">${props.budget}</span>
          </span> */}
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl">
            STARTED:
            <span className="ml-2 font-normal text-base">
              {props.startDate}
            </span>
          </span>
          <span className="font-bold text-xl">
            DEADLINE:
            <span className="ml-2 font-normal text-base">
              {props.startDate}
            </span>
          </span>
          {/* <span className="font-bold text-xl">
            PROGRESS:
            <span
              className={`ml-2 font-normal text-base ${renderProjectProgress(
                props.progress
              )}`}
            >
              {props.progress}%
            </span>
          </span> */}
        </div>

      </div>
      <div className="border border-white w-full order-1 md:order-2 lg:w-2/4 xl:w-7/10 animate__animated animate__fadeInRight">
        <img
          className="w-full h-auto"
          src={noImage}
          alt="project"
          width={250}
        />
      </div>
    </div>
  );
};

