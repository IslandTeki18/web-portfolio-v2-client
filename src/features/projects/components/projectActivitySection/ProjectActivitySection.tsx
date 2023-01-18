import * as React from "react";
import { ProjectCard } from "../projectCard";

export const ProjectActivitySection = () => {
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

  const mockActivity: {
    id: string;
    title: string;
    date: string;
    updateDesc: string;
  }[] = [
    {
      id: "34f323j4",
      title: "Changed the section headers width",
      date: "22nd of Nov, 2022",
      updateDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis convallis tellus non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "a34f34ew",
      title: "This is the most recent",
      date: "21nd of Nov, 2022",
      updateDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis convallis tellus non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];



  function renderRecentActivity() {
    return mockActivity.map((item) => (
      <div
        key={item.id}
        className="flex flex-col border-l border-white pb-5 pl-8 relative before:absolute before:top-0 before:left-[-12px] before:rounded-full before:w-6 before:h-6 before:bg-white before:border-2 before:border-white"
      >
        <span className="text-2xl text-danger-500 font-semibold tracking-wide">
          {item.title}
        </span>
        <span className="mb-4">
          <span className="font-semibold text-lg pr-2">Date:</span>
          {item.date}
        </span>
        <span>{item.updateDesc}</span>
      </div>
    ));
  }

  function renderProjectCards() {
    return mockProjects.map((project) => (
      <ProjectCard
        key={project.id}
        id={project.id}
        title={project.title}
        projectDescription={project.projectDescription}
        projectType={project.projectType}
        date={project.date}
      />
    ));
  }
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-4 text-white px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]">
      <div className="border border-white p-6 flex flex-col w-full lg:w-2/4 h-fit">
        <span className="text-2xl pb-6">Recent Activity</span>
        {renderRecentActivity()}
      </div>
      <div className="flex flex-col w-full lg:w-2/4">
        <div className="border border-white p-6 mb-4">
          <span className="text-2xl">Related Projects</span>
        </div>
        {renderProjectCards()}
      </div>
    </div>
  );
};
