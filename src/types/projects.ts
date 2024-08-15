type ProjectFeedback = {
  id: string;
  title: string;
  description: string;
};

type RelatedProject = {
  id: string;
  title: string;
  projectType: string;
  link: string;
  tags: string[];
};

type Project = {
  id: string;
  title: string;
  description: string;
  designer?: string;
  projectType: "Personal" | "Client" | "Open Source";
  applicationType: "Web" | "Mobile" | "Desktop";
  budget?: string;
  isPublic?: boolean;
  client?: string;
  images: string[];
  trelloUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  techStack: string[];
  tags: string[];
  developerFeedback: ProjectFeedback[];
  relatedProjects: RelatedProject[];
  status: "Live" | "Under Construction" | "Not Live" | "On Hold" | "Remodeling";
  createdAt: string;
  updatedAt: string;
};

type LimitedProjects = {
  id: string;
  title: string;
  description: string;
  projectType: "Personal" | "Client" | "Open Source";
  applicationType: "Web" | "Mobile" | "Desktop";
  status: "Live" | "Under Construction" | "Not Live" | "On Hold" | "Remodeling";
  createdAt: string;
  updatedAt: string;
};

export { ProjectFeedback, RelatedProject, Project, LimitedProjects };