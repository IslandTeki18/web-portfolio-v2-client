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
      {props.images ? (
        <div className="flex border border-white p-2 w-full  animate__animated animate__fadeInRight h-[400px]">
          <img
            className="w-full h-full object-contain object-center opacity-95 hover:opacity-100 cursor-pointer"
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
