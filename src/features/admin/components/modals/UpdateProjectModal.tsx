import * as React from "react";
import { useState, useEffect } from "react";
import { Modal } from "~src/components";
import { Project } from "~src/types/projects";
import { Input, Textarea, Select, Toggle, Button } from "~src/components";
import { useAuthContext } from "~src/hooks";
import axios from "axios";
import { DEV_API_URL, NODE_ENV, API_URL } from "~src/config";

type UpdateProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  callback?: () => void;
  project: Project;
};

const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

const applicationTypeOptions = [
  { value: "Web", label: "Web" },
  { value: "Mobile", label: "Mobile" },
  { value: "Desktop", label: "Desktop" },
];
const projectTypeOptions = [
  { value: "Personal", label: "Personal" },
  { value: "Client", label: "Client" },
  { value: "Open Source", label: "Open Source" },
];

const statusOptions = [
  { value: "Live", label: "Live" },
  { value: "Under Construction", label: "Under Construction" },
  { value: "Not Live", label: "Not Live" },
  { value: "On Hold", label: "On Hold" },
  { value: "Remodeling", label: "Remodeling" },
];

const URL = NODE_ENV === "development" ? DEV_API_URL : API_URL;

export const UpdateProjectModal = (props: UpdateProjectModalProps) => {
  const { user } = useAuthContext();
  const [project, setProject] = useState<Project>({} as Project);
  const [error, setError] = useState("");

  useEffect(() => {
    setProject(props.project);
  }, [props.project]);

  function handleSelectChange(event: any) {
    const { name, value } = event.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  }

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    if (name === "techStack" || name === "tags") {
      setProject((prev) => ({ ...prev, [name]: value.split(",") }));
      return;
    }
    setProject((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      setProject((prev) => ({ ...prev, images: Array.from(files) }));
    }
  }

  async function updateProject(data: any) {
    try {
      await axios.put(`${URL}/projects/${project._id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user?.token}`,
        },
      });
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let form = new FormData();
    form.append("title", project.title);
    form.append("description", project.description);
    form.append("projectType", project.projectType);
    form.append("applicationType", project.applicationType);
    form.append("status", project.status);
    form.append("isPublic", project.isPublic ? "true" : "false");
    form.append("trelloUrl", project.trelloUrl || "");
    form.append("githubUrl", project.githubUrl || "");
    form.append("projectUrl", project.projectUrl || "");
    form.append("budget", project.budget || "");
    form.append("designer", project.designer || "");
    form.append("client", project.client || "");

    project.techStack.forEach((tech) => {
      form.append("techStack", tech);
    });
    project.tags.forEach((tag) => {
      form.append("tags", tag);
    });
    project.images.forEach((image: any) => {
      if (fileTypes.includes(image.type)) {
        form.append("images", image);
      } else {
        setError("Invalid file type");
      }
    });

    await updateProject(form);
    if (props.callback) {
      props.callback();
    }
    props.onClose();
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} className="max-w-lg">
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold">Edit Project</span>
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          <Input
            hasLabel
            label="Title"
            name="title"
            value={project.title}
            onChange={handleInputChange}
          />
          <hr className="my-2" />
          <span className="text-lg font-medium">General Information</span>
          <Textarea
            id="description"
            name="description"
            placeholder="Description..."
            onChange={handleInputChange}
            value={project.description}
            hasLabel
            label="Description"
          />
          <Select
            name={"projectType"}
            optionItems={projectTypeOptions}
            variant="dark"
            hasLabel
            labelText="Project Type"
            value={project.projectType}
            onChange={handleSelectChange}
          />
          <Select
            name={"applicationType"}
            optionItems={applicationTypeOptions}
            variant="dark"
            hasLabel
            labelText="Application Type"
            value={project.applicationType}
            onChange={handleSelectChange}
          />
          <Select
            name={"status"}
            optionItems={statusOptions}
            variant="dark"
            hasLabel
            labelText="Status"
            value={project.status}
            onChange={handleSelectChange}
          />
          <Input
            id="techStack"
            name="techStack"
            type="text"
            placeholder="Tech Stack..."
            hasLabel
            label="Tech Stack (Comma Separated)"
            onChange={handleInputChange}
            value={project.techStack}
          />
          <Toggle
            hasLabel
            label="Is Public"
            name="isPublic"
            variant="dark"
            enabled={project.isPublic}
            onChange={() =>
              setProject((prev) => ({ ...prev, isPublic: !prev.isPublic }))
            }
          />
          <hr className="my-2" />
          <span className="text-lg font-medium">Project URLs</span>
          <Input
            id="trello"
            name="trelloUrl"
            type="text"
            placeholder="Trello..."
            hasLabel
            label="Trello"
            onChange={handleInputChange}
            value={project.trelloUrl}
          />
          <Input
            id="Project"
            name="ProjectUrl"
            type="text"
            placeholder="Project..."
            hasLabel
            label="Project"
            onChange={handleInputChange}
            value={project.projectUrl}
          />
          <Input
            id="github"
            name="githubUrl"
            type="text"
            placeholder="Github..."
            hasLabel
            label="Github"
            onChange={handleInputChange}
            value={project.githubUrl}
          />
          <hr className="my-2" />
          <span className="text-lg font-medium">Other Information</span>
          <Input
            id="tags"
            name="tags"
            type="text"
            placeholder="Tags..."
            hasLabel
            label="Tags (Comma Separated)"
            onChange={handleInputChange}
            value={project.tags}
          />
          <Input
            id="budget"
            name="budget"
            type="text"
            placeholder="Budget..."
            hasLabel
            label="Budget"
            onChange={handleInputChange}
            value={project.budget}
          />
          <Input
            id="designer"
            name="designer"
            type="text"
            placeholder="Designer..."
            hasLabel
            label="Designer"
            onChange={handleInputChange}
            value={project.designer}
          />
          <Input
            id="client"
            name="client"
            type="text"
            placeholder="Client..."
            hasLabel
            label="Client"
            onChange={handleInputChange}
            value={project.client}
          />

          <hr className="my-2" />
          <span className="text-lg font-medium">Images</span>
          <Input
            id="images"
            name="images"
            type="file"
            hasLabel
            label="Images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          {error && <span className="text-red-600">{error}</span>}

          <h3 className="text-xl font-medium text-gray-100">Images</h3>
          {project?.images ? (
            project?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project Image ${index}`}
                className="w-full"
              />
            ))
          ) : (
            <p className="text-gray-300">No Images</p>
          )}

          <hr className="my-2" />
          <div className="flex justify-between gap-2">
            <Button
              variant="secondary"
              labelColor="light"
              label="Cancel"
              className="w-1/3"
              onClick={props.onClose}
              type="button"
            />
            <Button
              variant="dark"
              labelColor="light"
              label="Update Project"
              className="w-2/3"
              type="submit"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};
