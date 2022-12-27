import * as React from "react";
import { Link } from "react-router-dom";

type SectionHeaderProps = {
  bgColor?: string;
  isLimitedSection?: boolean;
  viewAllLink?: string;
  title: string;
  children: React.ReactNode;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div
      className={`bg-${props.bgColor} md:max-h-[961px] px-[3%] sm:px-[8.33333%] xl:px-[16.666%]`}
    >
      <div className="border-2 border-white max-h-[157px] p-8">
        {props.isLimitedSection && (
          <div className="flex justify-end">
            <Link
              to={`${props.viewAllLink}`}
              className="border border-white px-8 py-2 text-white uppercase"
            >
              View All
            </Link>
          </div>
        )}
        <div className="flex justify-start">
          <span className={`uppercase text-white text-3xl tracking-wide font-black ${!props.isLimitedSection ? "mt-12" : ""}`}>
            {props.title}
          </span>
        </div>
      </div>
      {props.children}
    </div>
  );
};
SectionHeader.defualtProps = {
  bgColor: "dark",
  title: "Sample",
  viewAllLink: "/",
  isLimitedSection: false,
};
