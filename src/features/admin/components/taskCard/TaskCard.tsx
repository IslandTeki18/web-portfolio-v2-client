import * as React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../utils";

type TaskCardProps = {};

enum Status {
  Offline = "offline",
  Online = "online",
  Error = "error",
}

enum Environment {
  Preview = "Preview",
  Production = "Production",
}

interface Deployment {
  id: number;
  href: string;
  projectName: string;
  teamName: string;
  status: Status;
  statusText: string;
  description: string;
  environment: Environment;
}

const statuses: Record<Status, string> = {
  [Status.Offline]: "text-gray-500 bg-gray-300/80",
  [Status.Online]: "text-success-400 bg-success-700/80",
  [Status.Error]: "text-danger-400 bg-danger-500/50",
};

const environments: Record<Environment, string> = {
  [Environment.Preview]: "text-gray-400 bg-gray-400/10 ring-gray-400/20",
  [Environment.Production]:
    "text-indigo-400 bg-indigo-400/10 ring-indigo-400/30",
};
const deployments: Deployment[] = [
  {
    id: 1,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: Status.Offline,
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: Environment.Preview,
  },
  {
    id: 2,
    href: "#",
    projectName: "mobile-api",
    teamName: "Planetaria",
    status: Status.Online,
    statusText: "Deployed 3m ago",
    description: "Deploys from GitHub",
    environment: Environment.Production,
  },
  {
    id: 3,
    href: "#",
    projectName: "tailwindcss.com",
    teamName: "Tailwind Labs",
    status: Status.Offline,
    statusText: "Deployed 3h ago",
    description: "Deploys from GitHub",
    environment: Environment.Preview,
  },
  {
    id: 4,
    href: "#",
    projectName: "api.protocol.chat",
    teamName: "Protocol",
    status: Status.Error,
    statusText: "Failed to deploy 6d ago",
    description: "Deploys from GitHub",
    environment: Environment.Preview,
  },
];

export const TaskCard = (props: TaskCardProps) => {
  return (
    <div className="w-full h-auto rounded-md border-2 border-gray-300 flex flex-col gap-4 p-6">
      <span className="text-white text-xl uppercase font-semibold">Tasks</span>
      <ul role="list" className="divide-y divide-white/5">
        {deployments.map((deployment) => (
          <li
            key={deployment.id}
            className="relative flex items-center space-x-4 py-4"
          >
            <div className="min-w-0 flex-auto">
              <div className="flex items-center gap-x-3">
                <div
                  className={classNames(
                    statuses[deployment.status],
                    "flex-none rounded-full p-1"
                  )}
                >
                  <div className="h-2 w-2 rounded-full bg-current" />
                </div>
                <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                  <a href={deployment.href} className="flex gap-x-2">
                    <span className="truncate">{deployment.teamName}</span>
                    <span className="text-gray-400">/</span>
                    <span className="whitespace-nowrap">
                      {deployment.projectName}
                    </span>
                    <span className="absolute inset-0" />
                  </a>
                </h2>
              </div>
              <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-white/80">
                <p className="truncate">{deployment.description}</p>
                <svg
                  viewBox="0 0 2 2"
                  className="h-0.5 w-0.5 flex-none fill-gray-300"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="whitespace-nowrap">{deployment.statusText}</p>
              </div>
            </div>
            <div
              className={classNames(
                environments[deployment.environment],
                "rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset"
              )}
            >
              {deployment.environment}
            </div>
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
