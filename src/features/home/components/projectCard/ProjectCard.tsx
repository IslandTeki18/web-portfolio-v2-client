import * as React from "react";

type ProjectCardProps = {
  image: string;
  tag: string;
  title: string;
  description: string;
  techStack: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="w-[300px] bg-[#1E293B] rounded-xl overflow-hidden flex flex-col">
      <div
        className="w-full h-[220px] bg-cover bg-center"
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <div className="p-6 flex flex-col gap-3">
        <p className="text-[#22D3EE] font-bold text-[11px] tracking-[2px] font-mono">
          {props.tag}
        </p>
        <h3 className="text-white font-semibold text-xl font-sans">
          {props.title}
        </h3>
        <p className="text-[#64748B] text-sm leading-[1.5] font-sans">
          {props.description}
        </p>
        <p className="text-[#475569] font-medium text-xs font-mono">
          {props.techStack}
        </p>
      </div>
    </div>
  );
};
