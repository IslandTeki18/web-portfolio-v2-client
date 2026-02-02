import * as React from "react";
import { IExperience } from "~src/features/resume/types/interfaces";

type TimelineItemProps = IExperience & {
  isLast?: boolean;
};

export const TimelineItem = (props: TimelineItemProps) => {
  const dateString = `${props.startingMonth} ${props.startingYear} - ${props.endingMonth} ${props.endingYear}`;

  return (
    <div className="flex gap-4 items-stretch">
      <div className="flex flex-col items-center gap-2 w-6">
        <div className="w-3 h-3 rounded-full bg-[#22D3EE] flex-shrink-0 mt-1" />
        {!props.isLast && (
          <div className="w-0.5 flex-1 min-h-[20px] bg-[#1E293B]" />
        )}
      </div>

      <div className="flex-1 bg-[#1E293B] rounded-xl p-5 flex flex-col gap-3">
        <h3 className="text-lg font-sans font-semibold text-white">
          {props.position}
        </h3>

        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm font-sans text-[#94A3B8]">{props.companyName}</span>
          <span className="text-sm font-sans text-[#64748B]">•</span>
          <span className="text-sm font-sans text-[#94A3B8]">{props.location}</span>
        </div>

        <div className="bg-[#0F172A] rounded-md px-3 py-1.5 w-fit">
          <span className="text-[11px] font-mono text-[#64748B]">{dateString}</span>
        </div>

        <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
          {props.summary}
        </p>
      </div>
    </div>
  );
};
