import * as React from "react";
import { IEducation } from "~src/features/resume/types/interfaces";

type ContactInfo = {
  name: string;
  location: string;
  phone: string;
  email: string;
};

type ContactSidebarProps = {
  contact: ContactInfo;
  education: IEducation[];
};

export const ContactSidebar = (props: ContactSidebarProps) => {
  return (
    <div className="w-full lg:w-80 bg-[#1E293B] rounded-xl p-6 flex flex-col gap-6 lg:sticky lg:top-8 lg:self-start">
      <p className="text-[11px] font-mono font-semibold tracking-[2px] text-[#64748B]">
        // CONTACT
      </p>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-mono text-[#22D3EE]">name:</span>
        <span className="text-sm font-sans text-[#94A3B8]">&quot;{props.contact.name}&quot;</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-mono text-[#22D3EE]">location:</span>
        <span className="text-sm font-sans text-[#94A3B8]">&quot;{props.contact.location}&quot;</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-mono text-[#22D3EE]">phone:</span>
        <span className="text-sm font-sans text-[#94A3B8]">&quot;{props.contact.phone}&quot;</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-mono text-[#22D3EE]">email:</span>
        <span className="text-sm font-sans text-[#94A3B8] break-words">&quot;{props.contact.email}&quot;</span>
      </div>

      <div className="w-full h-px bg-[#0F172A]" />

      <p className="text-[11px] font-mono font-semibold tracking-[2px] text-[#64748B]">
        // EDUCATION
      </p>

      {props.education.map((edu, index) => (
        <div key={index} className="flex flex-col gap-2">
          <p className="text-sm font-sans font-semibold text-white leading-snug">
            {edu.school}
          </p>
          <p className="text-[11px] font-mono text-[#64748B]">
            {edu.timeline}
          </p>
          <p className="text-xs font-sans text-[#94A3B8]">
            {edu.location}
          </p>
        </div>
      ))}
    </div>
  );
};
