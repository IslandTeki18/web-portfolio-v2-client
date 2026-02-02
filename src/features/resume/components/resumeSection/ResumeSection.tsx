import * as React from "react";
import { IEducation, IExperience } from "../../types/interfaces";
import { ContactSidebar } from "../contactSidebar";
import { ExperienceTimeline } from "../experienceTimeline";

type Props = {
  education: IEducation[];
  experiences: IExperience[];
};

export const ResumeSection = (props: Props) => {
  return (
    <div className="px-4 sm:px-8 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <ContactSidebar
          contact={{
            name: "Landon McKell",
            location: "Benjamin, UT 84660",
            phone: "801-310-5876",
            email: "landon.roney7923@gmail.com",
          }}
          education={props.education}
        />
        <ExperienceTimeline experiences={props.experiences} />
      </div>
    </div>
  );
};
