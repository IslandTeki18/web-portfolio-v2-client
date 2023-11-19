import * as React from "react";
import { useState, useEffect } from "react";
import { SideNav } from "../../components";
import { setCurrentNavigation } from "../../utils";
import { Button, Loader } from "~src/components";
import { LabelInput } from "~src/components/molecules";
import { IProjectDetails } from "~src/types";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useGetProjectDetails } from "~src/features/projects/hooks";
import { useRecoilValue } from "recoil";
import { projectDetailsState } from "~src/stores/project";
import { LabelTextArea } from "~src/components/molecules/LabelTextArea/LabelTextArea";

export const ProjectDetails = () => {
  const { id } = useParams();
  useGetProjectDetails(id || "");
  const navigate = useNavigate();
  const projectDetails: IProjectDetails = useRecoilValue(projectDetailsState);
  console.log(projectDetails);

  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<IProjectDetails>(projectDetails);

  useEffect(() => {
    if (projectDetails) {
      setProject(projectDetails);
      setLoading(false);
    }
  }, [projectDetails]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name.split("Input");
    setProject((prev) => {
      return {
        ...prev,
        [inputName[0]]: e.target.value,
      };
    });
  }

  if (loading) {
    return (
      <div className="h-full">
        <SideNav navItems={setCurrentNavigation(1)} />
        <div className="lg:pl-72">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center">
                <span className="text-2xl text-white">Loading...</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

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
                  onChange={onChangeHandler}
                  label="Title"
                  name="nameInput"
                  value={project.title}
                />
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Project Type"
                  name="projectTypeInput"
                  value={project.projectType}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Designer"
                  name="designerInput"
                  value={project.designer}
                />
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Application Type"
                  name="applicationTypeInput"
                  value={project.applicationType}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Budget"
                  name="budgetInput"
                  value={project.budget}
                />
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Client"
                  name="clientInput"
                  value={project.client}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Trello URL"
                  name="trelloUrlInput"
                  value={project.trelloUrl}
                />
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Github URL"
                  name="githubUrlInput"
                  value={project.githubUrl}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Project URL"
                  name="projectUrlInput"
                  value={project.projectUrl}
                />
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Tags"
                  name="tagsInput"
                  value={project.tags}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <LabelTextArea
                  onChange={onChangeHandler}
                  label="Description"
                  name="descriptionInput"
                  value={project.description}
                />
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Tech Stack"
                  name="techStackInput"
                  value={project.techStack}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
