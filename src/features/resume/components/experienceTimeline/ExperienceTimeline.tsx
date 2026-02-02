import * as React from "react";
import { IExperience } from "~src/features/resume/types/interfaces";
import { TimelineItem } from "./TimelineItem";

type ExperienceTimelineProps = {
  experiences: IExperience[];
};

export const ExperienceTimeline = (props: ExperienceTimelineProps) => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <p className="text-[11px] font-mono font-semibold tracking-[2px] text-[#64748B]">
        // EXPERIENCE
      </p>

      <div className="flex flex-col gap-6">
        {props.experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            {...experience}
            isLast={index === props.experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
