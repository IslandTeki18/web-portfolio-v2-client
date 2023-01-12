import * as React from "react";
import { IExperience } from "../../types/interfaces";

type Props = {
  experiences: IExperience[];
};

export const ExperienceCard = (props: Props) => {
  function renderExperiences() {
    return props.experiences.map((item) => (
      <div className="flex flex-col border-l border-white ml-2 pb-5 pl-8 relative before:absolute before:top-0 before:left-[-12px] before:rounded-full before:w-6 before:h-6 before:bg-white before:border-2 before:border-white">
        <span className="text-2xl text-danger-500 font-semibold tracking-wide">
          {item.position}
        </span>
        <span className="py-2 px-4 my-2 bg-white text-dark w-fit">
          {item.startingMonth}
          {` `}
          {item.startingYear}
          <span className="px-4">-</span>
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
    <div className="border border-white text-white flex flex-col p-8">
      <span className="text-3xl uppercase font-bold mb-4">Experiences</span>
      {renderExperiences()}
    </div>
  );
};
