import * as React from "react";

type TerminalPromptHeaderProps = {
  command: string;
  bio: string;
  onDownload: () => void;
};

export const TerminalPromptHeader = (props: TerminalPromptHeaderProps) => {
  return (
    <div className="bg-[#0F172A] px-4 sm:px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[#22D3EE] font-mono text-lg font-bold">$</span>
          <span className="text-white font-mono text-lg font-semibold">{props.command}</span>
        </div>

        <p className="text-[#94A3B8] font-sans text-sm leading-relaxed max-w-3xl">
          {props.bio}
        </p>

        <button
          onClick={props.onDownload}
          className="border border-[#22D3EE] text-[#22D3EE] font-mono text-xs font-medium px-5 py-2.5 rounded-md w-fit hover:bg-[#22D3EE] hover:text-[#0F172A] transition-colors"
        >
          --download
        </button>
      </div>
    </div>
  );
};
