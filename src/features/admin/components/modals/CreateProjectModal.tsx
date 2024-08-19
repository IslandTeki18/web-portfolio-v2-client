import * as React from "react";
import { useState } from "react";
import {
  Modal,
  Input,
  Textarea,
  Select,
  Toggle,
  Button,
} from "~src/components";
import { ProjectFormData } from "~src/types/projects";
import { DEV_API_URL, NODE_ENV, API_URL } from "~src/config";

type CreateProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

const applicationTypeOptions = [
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "desktop", label: "Desktop" },
];
const projectTypeOptions = [
  { value: "personal", label: "Personal" },
  { value: "team", label: "Client" },
  { value: "client", label: "Open Source" },
];

const statusOptions = [
  { value: "Live", label: "Live" },
  { value: "Construction", label: "Under Construction" },
  { value: "Not live", label: "Not Live" },
  { value: "Hold", label: "On Hold" },
  { value: "Remodeling", label: "Remodeling" },
];

const URL = NODE_ENV === "development" ? DEV_API_URL : API_URL;

export const CreateProjectModal = (props: CreateProjectModalProps) => {
  
  const [error, setError] = useState("");
  const [newProject, setNewProject] = useState({} as ProjectFormData);

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  }
  function handleSelectChange(event: any) {
    const { name, value } = event.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  }
  
  function handleFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      if (fileTypes.includes(file.type)) {
        setNewProject((prev) => ({ ...prev, images: file }));
      } else {
        setError("Invalid file type. Please upload an image file.");
      }
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      variant="dark"
      isFullWidth
    >
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold">Create New Project</span>
        <form className="flex flex-col gap-4">
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Title..."
            hasLabel
            label="Title"
            onChange={handleInputChange}
            value={newProject.title}
          />
          <hr className="my-2" />
          <span className="text-lg font-medium">General Information</span>
          <Textarea
            id="description"
            name="description"
            placeholder="Description..."
            onChange={handleInputChange}
            value={newProject.description}
            hasLabel
            label="Description"
          />
          <Select
            name={"projectType"}
            optionItems={projectTypeOptions}
            variant="dark"
            hasLabel
            labelText="Project Type"
            value={newProject.projectType}
            onChange={handleSelectChange}
          />
          <Select
            name={"applicationType"}
            optionItems={applicationTypeOptions}
            variant="dark"
            hasLabel
            labelText="Application Type"
            value={newProject.applicationType}
            onChange={handleSelectChange}
          />
          <Select
            name={"status"}
            optionItems={statusOptions}
            variant="dark"
            hasLabel
            labelText="Status"
            value={newProject.status}
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
            value={newProject.techStack}
          />
          <Toggle
            hasLabel
            label="Is Public"
            name="isPublic"
            variant="dark"
            enabled={newProject.isPublic}
            onChange={() =>
              setNewProject((prev) => ({ ...prev, isPublic: !prev.isPublic }))
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
            value={newProject.trelloUrl}
          />
          <Input
            id="Project"
            name="ProjectUrl"
            type="text"
            placeholder="Project..."
            hasLabel
            label="Project"
            onChange={handleInputChange}
            value={newProject.projectUrl}
          />
          <Input
            id="github"
            name="githubUrl"
            type="text"
            placeholder="Github..."
            hasLabel
            label="Github"
            onChange={handleInputChange}
            value={newProject.githubUrl}
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
            value={newProject.tags}
          />
          <Input
            id="budget"
            name="budget"
            type="text"
            placeholder="Budget..."
            hasLabel
            label="Budget"
            onChange={handleInputChange}
            value={newProject.budget}
          />
          <Input
            id="designer"
            name="designer"
            type="text"
            placeholder="Designer..."
            hasLabel
            label="Designer"
            onChange={handleInputChange}
            value={newProject.designer}
          />
          <Input
            id="client"
            name="client"
            type="text"
            placeholder="Client..."
            hasLabel
            label="Client"
            onChange={handleInputChange}
            value={newProject.client}
          />

          <hr className="my-2" />
          <span className="text-lg font-medium">Images</span>
          <Input
            id="images"
            name="images"
            type="file"
            hasLabel
            label="Images"
            onChange={handleFileChange}
            value={newProject.images}
          />
          {error && <span className="text-red-600">{error}</span>}
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
              label="Create Project"
              className="w-2/3"
              type="submit"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};
