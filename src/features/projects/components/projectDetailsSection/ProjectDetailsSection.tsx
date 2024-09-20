import * as React from "react";
import { useState, useEffect } from "react";
// @ts-ignore
import noImage from "../../assets/noImage2.png";
import { formatNumberWithCommas } from "~src/utils";
import { LightBox } from "~src/components";

type ProjectDetailsSectionProps = {
  isPublic: string;
  client: string;
  budget: string;
  designer: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  images: string[];
};

export const ProjectDetailsSection = (props: ProjectDetailsSectionProps) => {
  const [showLightBox, setShowLightBox] = useState(false);

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
          {props.designer && (
            <span className="font-bold text-lg">
              <i className="fa-solid fa-pen-nib mr-2" />
              DESIGNER:
              <span className="ml-2 font-normal text-base">
                {props.designer}
              </span>
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
              {(props.createdAt &&
                new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(new Date(props.createdAt as string))) ||
                "N / A"}
            </span>
          </span>
          <span className="font-bold text-xl uppercase">
            Updated:
            <span className="ml-2 font-normal text-base">
              {(props.updatedAt &&
                new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(new Date(props.updatedAt as string))) ||
                "N / A"}
            </span>
          </span>
        </div>
      </div>
      {props.images ? (
        <div className="flex border border-white p-2 w-full order-1 md:order-2 lg:w-2/4 xl:w-6/10 animate__animated animate__fadeInRight">
          <img
            className="h-[400px] w-full object-contain object-center opacity-95 hover:opacity-100 cursor-pointer"
            src={props.images[0] || noImage}
            alt="project"
            onClick={() => setShowLightBox(true)}
          />
        </div>
      ) : null}
      <LightBox
        isOpen={showLightBox}
        onClose={() => setShowLightBox(false)}
        images={props.images}
      />
    </div>
  );
};
