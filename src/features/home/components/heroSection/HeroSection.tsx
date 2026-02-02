import * as React from "react";

export const HeroSection = () => {
  return (
    <section className="w-full px-20 py-[120px] bg-[#0A0F1C] flex flex-col gap-8">
      <p className="text-[#22D3EE] font-medium text-sm tracking-[2px] font-mono">
        // CREATIVE DEVELOPER
      </p>
      <h1 className="text-white font-bold text-[96px] leading-none font-mono">
        John Doe
      </h1>
      <p className="text-[#94A3B8] text-2xl leading-[1.5] max-w-[700px] font-sans">
        I craft digital experiences that blend
        <br />
        form and function.
      </p>
      <div className="flex items-center gap-12">
        <span className="text-[#64748B] font-medium text-sm font-mono">
          → San Francisco, CA
        </span>
        <span className="text-[#22D3EE] font-medium text-sm font-mono">
          ◉ Available for work
        </span>
      </div>
    </section>
  );
};
