import * as React from "react";
// @ts-ignore
import noImage from "../../assets/noImage2.png";
import { formatNumberWithCommas } from "~src/utils";

type ProjectDetailsSectionProps = {
  isPublic: string;
  client: string;
  budget: string;
  createdAt: string;
  updatedAt: string;
  images: string[];
};

export const ProjectDetailsSection = (props: ProjectDetailsSectionProps) => {
  console.log(props.client);
  return (
    <div className="flex flex-wrap md:flex-nowrap text-white gap-4 px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <div className="border border-white p-4 flex flex-col gap-4 w-full order-2 md:order-1 lg:w-2/4 xl:w-4/10 animate__animated animate__fadeInLeft">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg uppercase">
            {props.isPublic} Project
          </span>
          {props.client && (
            <span className="font-bold text-lg">
              <i className="fa-solid fa-user mr-2" />
              CLIENT:
              <span className="ml-2 font-normal text-base">{props.client}</span>
            </span>
          )}
          {props.budget !== "0" && (
            <span className="font-bold text-lg">
              <i className="fa-regular fa-credit-card mr-2" />
              BUDGET:
              <span className="ml-2 font-normal text-base">
                ${formatNumberWithCommas(props.budget || "0")}
              </span>
            </span>
          )}
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl uppercase">
            Started:
            <span className="ml-2 font-normal text-base">
              {props.createdAt}
            </span>
          </span>
          <span className="font-bold text-xl uppercase">
            Updated:
            <span className="ml-2 font-normal text-base">
              {props.updatedAt}
            </span>
          </span>
        </div>
      </div>
      {props.images ? (
        <div className="flex border border-white p-2 w-full order-1 md:order-2 lg:w-2/4 xl:w-6/10 animate__animated animate__fadeInRight">
          <img
            className="h-[400px] w-full object-contain object-center"
            src={props.images[0] || noImage}
            alt="project"
          />
        </div>
      ) : null}
    </div>
  );
};
