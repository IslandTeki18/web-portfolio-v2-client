import * as React from "react";
import { ProjectCard } from "../projectCard";
import { formatDate } from "~src/utils";

type Props = {
  developerFeedback?: any[];
  relatedProjects?: any[];
};

export const ProjectActivitySection = (props: Props) => {
  const mockProjects = [
    {
      title: "Sample One",
      id: "108rh48",
      date: "12/26/2022",
      projectType: "web",
      projectDescription:
        "Project description has a simple two line description of the project.",
    },
    {
      title: "Sample Two",
      id: "20dj4uh",
      date: "12/26/2022",
      projectType: "web",
      projectDescription:
        "Project description has a simple two line description of the project.",
    },
    {
      title: "Sample Three",
      id: "20d20j",
      date: "12/26/2022",
      projectType: "web",
      projectDescription:
        "Project description has a simple two line description of the project.",
    },
  ];

  function renderRecentActivity() {
    if (!props.developerFeedback) return;
    return props.developerFeedback.map((item) => (
      <div
        key={item.id}
        className="flex flex-col border-l border-white pb-5 pl-8 relative before:absolute before:top-0 before:left-[-12px] before:rounded-full before:w-6 before:h-6 before:bg-white before:border-2 before:border-white"
      >
        <span className="text-2xl text-danger-500 font-semibold tracking-wide">
          {item.title}
        </span>
        <span className="mb-4">
          <span className="font-semibold text-lg pr-2">Date:</span>
          {formatDate(item.createdAt, 'en-US')}
        </span>
        <span>{item.description}</span>
      </div>
    ));
  }

  function renderProjectCards() {
    if (!props.relatedProjects) return;
    return props.relatedProjects.map((project) => (
      <ProjectCard
        key={project.id}
        id={project.id}
        title={project.title}
        projectDescription={project.projectDescription}
        projectType={project.projectType}
        date={formatDate(project.createdAt, "en-US")}
      />
    ));
  }
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-4 text-white px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      {props.developerFeedback && props.developerFeedback.length > 0 ? (
        <div className="border border-white p-6 flex flex-col w-full lg:w-2/4 h-fit">
          <span className="text-2xl pb-6">Recent Activity</span>
          {renderRecentActivity()}
        </div>
      ) : (
        <div className="border border-white p-6 flex flex-col w-full lg:w-2/4 h-fit">
          <span className="text-2xl">No Developer Feedback</span>
        </div>
      )}
      {props.relatedProjects && props.relatedProjects.length > 0 ? (
        <div className="flex flex-col w-full lg:w-2/4">
          <div className="border border-white p-6 mb-4">
            <span className="text-2xl">Related Projects</span>
          </div>
          {renderProjectCards()}
        </div>
      ) : (
        <div className="flex flex-col w-full lg:w-2/4">
          <div className="border border-white p-6 mb-4">
            <span className="text-2xl">No Related Projects</span>
          </div>
        </div>
      )}
    </div>
  );
};
