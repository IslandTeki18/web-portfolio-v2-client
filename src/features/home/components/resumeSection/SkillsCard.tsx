import * as React from "react";
import { Skills } from "../../types";

type Props = {
  skills: Skills;
};

export const SkillsCard = (props: Props) => {
  return (
    <div className="flex gap-16">
      {/* FRONTEND */}
      <div className="flex flex-col gap-3">
        <h4 className="text-[#22D3EE] font-semibold text-[11px] tracking-[2px] font-mono">
          FRONTEND
        </h4>
        <p className="text-[#94A3B8] text-sm leading-[1.8] font-sans whitespace-pre-line">
          {props.skills.frontend}
        </p>
      </div>

      {/* BACKEND */}
      <div className="flex flex-col gap-3">
        <h4 className="text-[#22D3EE] font-semibold text-[11px] tracking-[2px] font-mono">
          BACKEND
        </h4>
        <p className="text-[#94A3B8] text-sm leading-[1.8] font-sans whitespace-pre-line">
          {props.skills.backend}
        </p>
      </div>

      {/* TOOLS */}
      <div className="flex flex-col gap-3">
        <h4 className="text-[#22D3EE] font-semibold text-[11px] tracking-[2px] font-mono">
          TOOLS
        </h4>
        <p className="text-[#94A3B8] text-sm leading-[1.8] font-sans whitespace-pre-line">
          {props.skills.tools}
        </p>
      </div>
    </div>
  );
};
