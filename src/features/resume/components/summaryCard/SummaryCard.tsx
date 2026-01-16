import * as React from "react";
import { SUMMARY_POINTS } from "../../utils/defaults";

type SummaryCardProps = {
  title: string;
  summary: string;
};

export const SummaryCard = (props: SummaryCardProps) => {
  function renderSummaryPoints() {
    return SUMMARY_POINTS.map((item) => (
      <div key={item.value} className="flex items-center gap-2">
        <i className="fa-solid fa-circle text-lg" />
        <span className="text-ellipsis overflow-hidden">{item.value}</span>
      </div>
    ));
  }
  return (
    <div className="card bg-base-100 border border-base-content animate__animated animate__fadeInLeft">
      <div className="card-body flex flex-col gap-4">
        <span className="text-2xl sm:text-3xl uppercase font-bold">summary</span>
        <div className="flex flex-col gap-y-4 border-l border-base-content ml-2 pb-5 pl-8 relative before:absolute before:top-0 before:left-[-12px] before:rounded-full before:w-6 before:h-6 before:bg-base-content before:border-2 before:border-base-content">
          <span className="text-xl sm:text-2xl text-error font-semibold tracking-wide leading-6">
            {props.title}
          </span>
          <span className="text-base">{props.summary}</span>
          <div className="flex flex-col gap-y-6">{renderSummaryPoints()}</div>
        </div>
      </div>
    </div>
  );
};
