import * as React from "react";
import { ResumeHeader } from "../resumeHeader";
import { SummaryCard } from "../summaryCard";
import { IEducation, IExperience } from "../../types/interfaces";
import { EducationCard } from "../educationCard";
import { ExperienceCard } from "../experienceCard";

type Props = {
  education: IEducation[],
  experiences: IExperience[]
};

export const ResumeSection = (props: Props) => {
  return (
    <div className="px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <ResumeHeader />
      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <SummaryCard
            title="Landon McKell"
            summary="Proficient and effective Web Developer with 5 years of web development experience with building  web applications and systems from initial concept to post production."
          />
          <EducationCard education={props.education} />
        </div>
        <div className="w-full md:w-1/2">
          <ExperienceCard experiences={props.experiences} />
        </div>
      </div>
    </div>
  );
};
