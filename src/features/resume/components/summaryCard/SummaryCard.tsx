import * as React from "react";
import { SUMMARY_POINTS } from "../../utils/defaults";

type SummaryCardProps = {
  title: string;
  summary: string;
};

export const SummaryCard = (props: SummaryCardProps) => {
  function renderSummaryPoints() {
    return SUMMARY_POINTS.map((item) => (
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-circle text-lg" />
        <span>{item.value}</span>
      </div>
    ));
  }
  return (
    <div className="border border-white text-white flex flex-col gap-4 p-6">
      <span className="text-3xl uppercase font-bold">summary</span>
      <div className="flex flex-col gap-y-4 border-l border-white ml-2 pb-5 pl-8 relative before:absolute before:top-0 before:left-[-12px] before:rounded-full before:w-6 before:h-6 before:bg-white before:border-2 before:border-white">
        <span className="text-xl text-danger-500 font-semibold tracking-wide leading-6">
          {props.title}
        </span>
        <span className="text-base">{props.summary}</span>
        <div className="flex flex-col gap-y-6">{renderSummaryPoints()}</div>
      </div>
    </div>
  );
};
