import * as React from "react";

type Props = {
  period: string;
  title: string;
  company: string;
  description: string;
};

export const ExperienceCard = (props: Props) => {
  return (
    <div className="flex gap-8">
      <span className="text-[#22D3EE] font-medium text-sm font-mono whitespace-nowrap">
        {props.period}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-white font-semibold text-lg font-sans">
          {props.title}
        </h3>
        <p className="text-[#94A3B8] font-medium text-sm font-sans">
          {props.company}
        </p>
        <p className="text-[#64748B] text-sm leading-[1.6] font-sans">
          {props.description}
        </p>
      </div>
    </div>
  );
};
