import * as React from "react";
import { useState, useEffect } from "react";
import { DeveloperFeedback, SideNav } from "../../components";
import { setCurrentNavigation, PROJECT_STATUSES } from "../../utils";
import { Button } from "~src/components";
import {
  LabelSelect,
  LabelInput,
  LabelTextArea,
  LabelToggle,
} from "~src/components/molecules";
import { IProjectDetails } from "~src/types";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { projectDetailsState } from "~src/stores";
import { updateProject, uploadImages, removeImagesFromProject } from "../../api";
import { getProjectById } from "~src/features/projects/api";

export const AdminProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectDetails: IProjectDetails = useRecoilValue(projectDetailsState);
  const setProjectState = useSetRecoilState(projectDetailsState);

  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<IProjectDetails>(projectDetails);
  const [imageLoading, setImageLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (id) {
      getProjectById(id).then((res) => {
        setProjectState(res.data);
        setProject(res.data);
        setLoading(false);
      });
    }
  }, [id]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name.split("Input");
    setProject((prev) => {
      return {
        ...prev,
        [inputName[0]]: e.target.value,
      };
    });
  }

  function onImageChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  }

  async function uploadImagesToServer() {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      await uploadImages(id!, formData);
    }
  }

  async function removeAllImages() {
    try {
      await removeImagesFromProject(id!);
    } catch (error) {
      console.error("Error removing images: ", error)
    }
  }

  async function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = await updateProject(project, project._id);
      setProjectState(data);
    } catch (error) {
      console.error("Error: ", error);
    }
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
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Main */}
          <form onSubmit={onSubmitHandler}>
            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-white text-3xl">{project.title}</span>
                <Button
                  labelColor="light"
                  label="Go Back"
                  variant="primary"
                  onClick={() => {
                    navigate("/admin/dashboard");
                  }}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <LabelInput
                  type="text"
                  onChange={onChangeHandler}
                  label="Title"
                  name="titleInput"
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
              <div className="flex flex-col gap-4">

                <div className="flex flex-col gap-2">
                  <label htmlFor="imagesInput" className="text-white">
                    Images
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="imagesInput"
                    className="file-input file-input-bordered w-full max-w-xs"
                    onChange={(e) => onImageChangeHandler(e)}
                    multiple
                    accept="image/*"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-sm w-1/2" onClick={uploadImagesToServer}>Upload Images</button>
                  <button className="btn btn-error text-white btn-sm w-1/2" onClick={removeAllImages}>Remove All Images</button>
                </div>
                {project.images && (
                  <div className="flex flex-col gap-2">
                    <label className="text-white">Project Images</label>
                    <div className="flex flex-col gap-2">
                      {project.images.map((image, index) => {
                        return (
                          <img
                            key={index}
                            src={image}
                            alt={`Project Image ${index}`}
                            className="w-1/2"
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col md:flex-row w-full md:w-1/2 justify-between items-center">
                  <LabelToggle
                    label="Is the Project Public"
                    id="isPublicInput"
                    isChecked={project.isPublic || false}
                    onToggle={(val) => {
                      setProject((prev) => {
                        return {
                          ...prev,
                          isPublic: val,
                        };
                      });
                    }}
                  />
                  <LabelSelect
                    label="Status"
                    items={PROJECT_STATUSES}
                    id="statusInput"
                    value={project.status}
                    onSelection={(val) => {
                      setProject((prev) => {
                        return {
                          ...prev,
                          status: val,
                        };
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col md:flex-row w-full md:w-1/2 justify-between items-center"></div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col md:flex-row w-full md:w-1/2 justify-between items-center">
                  <DeveloperFeedback
                    projectId={project._id}
                    feedbacks={project.developerFeedback}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-end gap-4">
                <Button
                  label="Update Project"
                  variant="dark"
                  labelColor="light"
                  type="submit"
                />
              </div>
            </div>
          </form>
          {/* End Main */}
        </div>
      </main>
    </div>
  );
};