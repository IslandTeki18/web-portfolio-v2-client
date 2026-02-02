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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setShowLightBox(true);
  };

  const thumbnailImages = props.images?.slice(1, 5) || [];

  return (
    <div className="px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-6/10">
          <div className="card bg-base-100 border border-base-content hover:border-primary p-2 h-[400px] transition-colors duration-300 cursor-pointer">
            <img
              className="w-full h-full object-contain object-center opacity-95 hover:opacity-100"
              src={props.images?.[0] || noImage}
              alt="Main project image"
              onClick={() => handleImageClick(0)}
            />
          </div>
        </div>
        {thumbnailImages.length > 0 && (
          <div className="w-full md:w-4/10">
            <div className="grid grid-cols-2 gap-2 h-[400px]">
              {thumbnailImages.map((image, index) => (
                <div
                  key={index}
                  className="card bg-base-100 border border-base-content hover:border-info p-2 transition-colors duration-300 cursor-pointer overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover object-center opacity-95 hover:opacity-100"
                    src={image || noImage}
                    alt={`Project thumbnail ${index + 1}`}
                    onClick={() => handleImageClick(index + 1)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <LightBox
        isOpen={showLightBox}
        onClose={() => setShowLightBox(false)}
        images={props.images}
        initialIndex={selectedImageIndex}
      />
    </div>
  );
};
