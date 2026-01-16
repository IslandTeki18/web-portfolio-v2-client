import * as React from "react";
import { IExperience } from "../../types/interfaces";

type Props = {
  experiences: IExperience[];
};

export const ExperienceCard = (props: Props) => {
  function renderExperiences() {
    return props.experiences.map((item) => (
      <div key={item.companyName} className="flex flex-col border-l border-base-content ml-2 pb-5 pl-8 relative before:absolute before:top-0 before:left-[-12px] before:rounded-full before:w-6 before:h-6 before:bg-base-content before:border-2 before:border-base-content">
        <span className="text-xl sm:text-2xl text-error font-semibold tracking-wide">
          {item.position}
        </span>
        <span className="badge badge-neutral my-2">
          {item.startingMonth}
          {` `}
          {item.startingYear}
          <span className="px-2 sm:px-4">-</span>
          {item.isCurrentEmployment
            ? "Present"
            : `${item.endingMonth} ${item.endingYear}`}
        </span>
        <span className="mb-4 font-semibold">
          {item.companyName} - {item.location}
        </span>
        <span>{item.summary}</span>
      </div>
    ));
  }

  return (
    <div className="card bg-base-100 border border-base-content">
      <div className="card-body">
        <span className="text-2xl sm:text-3xl uppercase font-bold mb-4">Experiences</span>
        {renderExperiences()}
      </div>
    </div>
  );
};
