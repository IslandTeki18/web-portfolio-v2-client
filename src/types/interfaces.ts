export interface IFooterListItem {
  id: string;
  name: string;
}

export interface IDeveloperFeedback {
  _id?: string;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IRelatedProject {
  title: string;
  projectType: string;
  link: string;
  tags?: [string];
}

export interface IProjectDetails {
  _id: string;
  user: string;
  title: string;
  description: string;
  designer?: string;
  projectType?: string;
  applicationType: string;
  budget?: string;
  isPublic: boolean;
  client?: string;
  images: string[];
  trelloUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  techStack: string;
  tags: string;
  developerFeedback: IDeveloperFeedback[];
  relatedProjects: IRelatedProject[];
  status: "Live" | "Under Construction" | "Not Live" | "On Hold" | "Remodeling";
  createdAt?: string;
  updatedAt?: string;
}
