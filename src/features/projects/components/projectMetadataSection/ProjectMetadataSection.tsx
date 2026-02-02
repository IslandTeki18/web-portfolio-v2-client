import * as React from "react";
import { TerminalCard, CommandPrompt } from "~src/components";
import { formatDate } from "~src/utils/helperFunctions";

type ProjectMetadataSectionProps = {
  projectType: string;
  applicationType: string;
  status: string;
  designer?: string;
  budget?: string;
  client?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export const ProjectMetadataSection = (props: ProjectMetadataSectionProps) => {
  const metadata = [
    { key: "project_type", value: props.projectType },
    { key: "application_type", value: props.applicationType },
    { key: "status", value: props.status },
    { key: "designer", value: props.designer || "N/A" },
    { key: "budget", value: props.budget || "N/A" },
    { key: "client", value: props.client || "N/A" },
    {
      key: "created_at",
      value: formatDate(props.createdAt.toString(), "en-US") || "N/A",
    },
    {
      key: "updated_at",
      value: formatDate(props.updatedAt.toString(), "en-US") || "N/A",
    },
  ];

  return (
    <div className="px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <TerminalCard glow glowColor="purple">
        <div className="card-body flex flex-col gap-4">
          <CommandPrompt status="ready">
            <span className="text-primary font-bold text-lg">cat project.json</span>
          </CommandPrompt>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 font-mono text-sm">
            {metadata.map((item, index) => (
              <div key={index} className="flex gap-2">
                <span className="text-info font-semibold">{item.key}:</span>
                <span className="text-base-content">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </TerminalCard>
    </div>
  );
};
