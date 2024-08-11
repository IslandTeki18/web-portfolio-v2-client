import { LimitedProjects } from "~src/types/projects";
import { generateRandomId } from "~src/utils";

export const LIMITED_PROJECTS: LimitedProjects[] = [
  {
    id: generateRandomId(10),
    title: "Test Project",
    description: "This is a test project",
    projectType: "Personal",
    applicationType: "Web",
    status: "Live",
    createdAt: "Aug 10, 2024",
    updatedAt: "Aug 10, 2024",
  },
];
