import * as React from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "~src/components";

type Props = {};

export const ProjectLimitSection = (props: Props) => {
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
  function renderProjects() {
    return mockProjects.map((project) => (
      <div
        className="flex flex-col justify-between border border-white p-8 h-72"
        key={project.id}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="uppercase text-white font-bold">
              {project.title}
            </span>
            <span className="text-white w-4/5">
              {project.projectDescription}
            </span>
          </div>
          <span className="text-white uppercase">{project.projectType}</span>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-white">{project.date}</span>
          <Link
            to={`/project/${project.id}`}
            className="border border-white px-6 py-2 text-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    ));
  }

  return (
    <SectionWrapper
      title="My Projects"
      isLimitedSection
      viewAllLink="/projects"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-4">
        {renderProjects()}
      </div>
    </SectionWrapper>
  );
};
