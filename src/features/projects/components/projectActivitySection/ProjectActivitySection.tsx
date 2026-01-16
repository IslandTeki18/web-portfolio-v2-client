import * as React from "react";
import { ProjectCard } from "../projectCard";
import { formatDate } from "~src/utils";

type Props = {
  developerFeedback?: any[];
  relatedProjects?: any[];
};

export const ProjectActivitySection = (props: Props) => {
  function renderRecentActivity() {
    if (!props.developerFeedback) return;
    return props.developerFeedback.map((item) => (
      <div
        key={item._id}
        className="flex flex-col border-l border-base-content pb-5 pl-8 relative before:absolute before:top-0 before:left-[-12px] before:rounded-full before:w-6 before:h-6 before:bg-base-content before:border-2 before:border-base-content"
      >
        <span className="text-2xl text-error font-semibold tracking-wide">
          {item.title}
        </span>
        <span className="mb-4">
          <span className="font-semibold text-lg pr-2">Date:</span>
          {formatDate(item.createdAt, "en-US")}
        </span>
        <span>{item.description}</span>
      </div>
    ));
  }

  function renderProjectCards() {
    if (!props.relatedProjects) return;
    return props.relatedProjects.map((project) => (
      <ProjectCard
        key={project._id}
        id={project._id}
        title={project.title}
        projectDescription={project.projectDescription}
        projectType={project.projectType}
        date={formatDate(project.createdAt, "en-US")}
      />
    ));
  }
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-4 px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      {props.developerFeedback && props.developerFeedback.length > 0 ? (
        <div className="card bg-base-100 border border-base-content w-full lg:w-2/4 h-fit">
          <div className="card-body">
            <span className="text-2xl pb-6">Recent Activity</span>
            {renderRecentActivity()}
          </div>
        </div>
      ) : (
        <div className="card bg-base-100 border border-base-content w-full lg:w-2/4 h-fit">
          <div className="card-body">
            <span className="text-2xl">No Developer Feedback</span>
          </div>
        </div>
      )}
      {props.relatedProjects && props.relatedProjects.length > 0 ? (
        <div className="flex flex-col w-full lg:w-2/4">
          <div className="card bg-base-100 border border-base-content mb-4">
            <div className="card-body">
              <span className="text-2xl">Related Projects</span>
            </div>
          </div>
          {renderProjectCards()}
        </div>
      ) : (
        <div className="flex flex-col w-full lg:w-2/4">
          <div className="card bg-base-100 border border-base-content mb-4">
            <div className="card-body">
              <span className="text-2xl">No Related Projects</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
