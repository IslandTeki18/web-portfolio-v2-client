import * as React from "react";
import { experiences, skills } from "../../data/resumeData";
import { ExperienceCard } from "./ExperienceCard";
import { SkillsCard } from "./SkillsCard";

export const ResumeSection = () => {
  return (
    <section className="w-full px-20 py-20 bg-[#0A0F1C] flex flex-col gap-16">
      {/* Header with Download Button */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-white font-semibold text-sm tracking-[3px] font-mono">
          RESUME
        </h2>
        <button className="px-6 py-2.5 bg-white text-black font-semibold text-sm rounded-lg hover:bg-[#E5E7EB] transition-colors font-sans">
          Download PDF
        </button>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-6">
        <h3 className="text-[#64748B] font-semibold text-xs tracking-[2px] font-mono">
          EXPERIENCE
        </h3>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col gap-6">
        <h3 className="text-[#64748B] font-semibold text-xs tracking-[2px] font-mono">
          SKILLS
        </h3>
        <SkillsCard skills={skills} />
      </div>
    </section>
  );
};
