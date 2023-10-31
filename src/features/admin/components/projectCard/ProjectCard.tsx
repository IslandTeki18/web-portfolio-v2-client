import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

type ProjectCardProps = {};

const fakeWebAppProjects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully functional online store for selling various products.",
    type: "Web Application",
    industry: "Retail",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Social Media Platform",
    description:
      "A social networking site with user profiles, posts, and messaging.",
    type: "Web Application",
    industry: "Social Media",
    status: "Completed",
  },
  {
    id: 3,
    title: "Project Management Tool",
    description: "An application for managing tasks, projects, and teams.",
    type: "Web Application",
    industry: "Productivity",
    status: "On Hold",
  },
  {
    id: 4,
    title: "Online Learning Platform",
    description: "A platform for online courses and educational resources.",
    type: "Web Application",
    industry: "Education",
    status: "In Progress",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description:
      "A web app that provides real-time weather forecasts for any location.",
    type: "Web Application",
    industry: "Weather",
    status: "Completed",
  },
];

const data = {
  labels: ["Not Live", "In Progress", "Live", "On Hold"],
  datasets: [
    {
      data: [12, 3, 5, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const ProjectCard = (props: ProjectCardProps) => {
  function renderProjectPreviews() {
    return fakeWebAppProjects.map((project) => (
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="text-md font-semibold text-gray-300">{project.title}</span>
          <span className="text-sm font-light text-gray-300/60">
            {project.industry}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-300">{project.status}</span>
        </div>
      </div>
    ));
  }
  return (
    <div className="bg-dark w-full h-auto flex flex-col gap-4 p-6 rounded-md shadow border-2 border-gray-300">
      <span className="uppercase text-white text-xl font-semibold">
        Project Statues
      </span>
      <div className="flex flex-col xlg:flex-row justify-between items-center gap-4">
        <div className="w-52 h-auto">
          <Doughnut data={data} />
        </div>
        <div className="border-2 border-gray-500 p-4 rounded flex flex-col gap-2 bg-white/10 w-full">
          <span className="text-white text-lg font-medium">
            Recent Projects
          </span>
          {renderProjectPreviews()}
        </div>
      </div>
    </div>
  );
};
