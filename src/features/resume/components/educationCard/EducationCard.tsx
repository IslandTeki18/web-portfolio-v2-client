import * as React from "react";
import { IEducation } from "../../types/interfaces";

type EducationCardProps = {
  education: IEducation[];
};

export const EducationCard = (props: EducationCardProps) => {
  function renderEducation() {
    return props.education.map((item) => (
      <div key={item.school} className="flex flex-col border-l border-base-content ml-2 pb-5 pl-8 relative before:absolute before:top-0 before:left-[-12px] before:rounded-full before:w-6 before:h-6 before:bg-base-content before:border-2 before:border-base-content">
        <span className="text-xl md:text-2xl text-error font-semibold tracking-wide">
          {item.school}
        </span>
        <span className="badge badge-neutral my-2">{item.timeline}</span>
        <span className="mb-4 font-semibold">{item.location}</span>
        <span>{item.summary}</span>
      </div>
    ));
  }

  return (
    <div className="card bg-base-100 border border-base-content animate__animated animate__fadeInLeft">
      <div className="card-body">
        <span className="text-2xl sm:text-3xl uppercase font-bold mb-4">Education</span>
        {renderEducation()}
      </div>
    </div>
  );
};
