import * as React from "react";
import { ITag } from "../../types/interfaces";

type ProjectDetailsSectionProps = {
  isPublic: boolean;
  client: string;
  budget: string;
  startDate: string;
  progress: number;
};

export const ProjectDetailsSection = (props: ProjectDetailsSectionProps) => {
  const mockTags: ITag[] = [
    {
      id: "pq293jd",
      label: "Tailwindcss",
    },
    {
      id: "pq293jd",
      label: "ReactJS",
    },
    {
      id: "pq293jd",
      label: "Typescript",
    },
    {
      id: "pq293jd",
      label: "Axios",
    },
  ];

  function renderTags() {
    return mockTags.map(tag => (
        <span className="px-2 py-1 bg-primary-800 text-white">{tag.label}</span>
    ))
  }

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
      <div className="border border-white p-4 flex flex-col justify-between gap-4 w-full md:w-2/4 xl:w-3/10">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg uppercase">
            {props.isPublic ? (
              <i className="fa-solid fa-globe mr-2" />
            ) : (
              <i className="fa-solid fa-lock mr-2" />
            )}
            {props.isPublic ? "Public" : "Private"} Project
          </span>
          <span className="font-bold text-lg">
            <i className="fa-solid fa-user mr-2" />
            CLIENT:
            <span className="ml-2 font-normal text-base">{props.client}</span>
          </span>
          <span className="font-bold text-lg">
            <i className="fa-regular fa-credit-card mr-2" />
            BUDGET:
            <span className="ml-2 font-normal text-base">${props.budget}</span>
          </span>
        </div>
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
          <span className="font-bold text-xl">
            PROGRESS:
            <span
              className={`ml-2 font-normal text-base ${renderProjectProgress(
                props.progress
              )}`}
            >
              {props.progress}%
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase">Tags</span>
          <div className="flex flex-wrap items-center gap-2">
            {renderTags()}
          </div>
        </div>
      </div>
      <div className="border border-white w-full md:w-2/4 xl:w-7/10">
        <img
          className="w-full h-auto"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="project"
        />
      </div>
    </div>
  );
};

ProjectDetailsSection.defaultProps = {
  isPublic: false,
  client: "Myself",
  budget: "0.00",
  startDate: "22nd of Nov, 2022",
  deadlineDate: "5th of Feb, 2023",
  progress: 100,
};
