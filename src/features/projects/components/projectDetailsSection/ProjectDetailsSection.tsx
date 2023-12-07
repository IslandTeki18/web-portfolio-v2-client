import * as React from "react";
import { ITag } from "../../types/interfaces";
// @ts-ignore
import noImage from "../../assets/noImage2.png";
import { IProjectDetails } from "~src/types";
import { formatNumberWithCommas } from "~src/utils";
import { formatDate } from "~src/utils";

type ProjectDetailsSectionProps = {
  project: IProjectDetails;
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
      <div className="border border-white p-4 flex flex-col gap-4 w-full order-2 md:order-1 lg:w-2/4 xl:w-4/10 animate__animated animate__fadeInLeft">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg uppercase">
            {!props.project.isPublic ? (
              <i className="fa-solid fa-globe mr-2" />
            ) : (
              <i className="fa-solid fa-lock mr-2" />
            )}
            {!props.project.isPublic ? "Public" : "Private"} Project
          </span>
          <span className="font-bold text-lg">
            <i className="fa-solid fa-user mr-2" />
            CLIENT:
            <span className="ml-2 font-normal text-base">
              {props.project.client}
            </span>
          </span>
          <span className="font-bold text-lg">
            <i className="fa-regular fa-credit-card mr-2" />
            BUDGET:
            <span className="ml-2 font-normal text-base">
              ${formatNumberWithCommas(props.project.budget || "0")}
            </span>
          </span>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl uppercase">
            Started:
            <span className="ml-2 font-normal text-base">
              {formatDate(props.project.createdAt!, "en-US")}
            </span>
          </span>
          <span className="font-bold text-xl uppercase">
            Updated:
            <span className="ml-2 font-normal text-base">
              {formatDate(props.project.updatedAt!, "en-US")}
            </span>
          </span>
          {/* <span className="font-bold text-xl">
            PROGRESS:
            <span
              className={`ml-2 font-normal text-base ${renderProjectProgress(
                props.project.progress
              )}`}
            >
              {props.project.progress}%
            </span>
          </span> */}
        </div>
      </div>
      <div className="flex border border-white w-full order-1 md:order-2 lg:w-2/4 xl:w-6/10 animate__animated animate__fadeInRight">
        <img
          className="h-[400px] w-full object-cover object-center"
          src={noImage}
          alt="project"
        />
      </div>
    </div>
  );
};
