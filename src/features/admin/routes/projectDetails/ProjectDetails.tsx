import * as React from "react";
import { useState } from "react";
import { SideNav } from "../../components";
import { setCurrentNavigation } from "../../utils";
import { Button, Loader } from "~src/components";
import { LabelInput } from "~src/components/molecules";
import { IProjectDetails } from "~src/types";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProjectDetails } from "~src/features/projects/hooks";
import { useRecoilValue } from "recoil";
import { projectDetailsState } from "~src/stores/project";

export const ProjectDetails = () => {
  const { id } = useParams();
  useGetProjectDetails(id!);
  const navigate = useNavigate();
  const projectDetails: IProjectDetails = useRecoilValue(projectDetailsState);

  const [project, setProject] = useState<IProjectDetails>({
    _id: projectDetails._id || "Null",
    user: projectDetails.user || "Null",
    title: projectDetails.title || "Null",
    description: projectDetails.description || "Null",
    designer: projectDetails.designer || "Null",
    projectType: projectDetails.projectType || "Null",
    applicationType: projectDetails.applicationType || "Null",
    budget: projectDetails.budget || "Null",
    isPublic: projectDetails.isPublic || false,
    client: projectDetails.client || "Null",
    images: projectDetails.images || [],
    trelloUrl: projectDetails.trelloUrl || "Null",
    githubUrl: projectDetails.githubUrl || "Null",
    projectUrl: projectDetails.projectUrl || "Null",
    techStack: projectDetails.techStack || [],
    tags: projectDetails.tags || [],
    developerFeedback: projectDetails.developerFeedback || [],
    relatedProjects: projectDetails.relatedProjects || [],
    status: projectDetails.status || "Not Live",
  });

  return (
    <div className="h-full">
      <SideNav navItems={setCurrentNavigation(1)} />
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Main */}
            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-white text-3xl">{project.title}</span>
                <Button
                  labelColor="light"
                  label="Go Back"
                  variant="primary"
                  onClick={() => {
                    navigate("/admin/projects-list");
                  }}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <LabelInput
                  type="text"
                  onChange={() => console.log("Change Me")}
                  label="Title"
                  name="nameInput"
                  value={project.title}
                />
                <LabelInput
                  type="text"
                  onChange={() => console.log("Change ME")}
                  label="Project Type"
                  name="projectTypeInput"
                  value={project.projectType}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <LabelInput
                  type="text"
                  onChange={() => console.log("Change Me")}
                  label="Designer"
                  name="designerInput"
                  value={project.designer}
                />
                <LabelInput
                  type="text"
                  onChange={() => console.log("Change ME")}
                  label="Application Type"
                  name="applicationTypeInput"
                  value={project.applicationType}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <LabelInput
                  type="text"
                  onChange={() => console.log("Change Me")}
                  label="Budget"
                  name="budgetInput"
                  value={project.budget}
                />
                <LabelInput
                  type="text"
                  onChange={() => console.log("Change ME")}
                  label="Client"
                  name="clientInput"
                  value={project.client}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
