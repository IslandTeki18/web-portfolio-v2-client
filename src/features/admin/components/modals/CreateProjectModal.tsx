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

type CreateProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

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

export const CreateProjectModal = (props: CreateProjectModalProps) => {
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
          />
          <hr className="my-2" />
          <span className="text-lg font-medium">General Information</span>
          <Textarea
            id="description"
            name="description"
            placeholder="Description..."
            onChange={() => {}}
            value={""}
            hasLabel
            label="Description"
          />
          <Select
            optionItems={projectTypeOptions}
            variant="dark"
            hasLabel
            labelText="Project Type"
          />
          <Select
            optionItems={applicationTypeOptions}
            variant="dark"
            hasLabel
            labelText="Application Type"
          />
          <Input
            id="techStack"
            name="techStack"
            type="text"
            placeholder="Tech Stack..."
            hasLabel
            label="Tech Stack (Comma Separated)"
          />
          <Toggle
            hasLabel
            label="Is Public"
            name="isPublic"
            variant="dark"
            enabled={false}
            onChange={() => {}}
          />
          <hr className="my-2" />
          <span className="text-lg font-medium">Project URLs</span>
          <Input
            id="trello"
            name="trello"
            type="text"
            placeholder="Trello..."
            hasLabel
            label="Trello"
          />
          <Input
            id="Project"
            name="Project"
            type="text"
            placeholder="Project..."
            hasLabel
            label="Project"
          />
          <Input
            id="github"
            name="github"
            type="text"
            placeholder="Github..."
            hasLabel
            label="Github"
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
          />
          <Input
            id="Budget"
            name="Budget"
            type="text"
            placeholder="Budget..."
            hasLabel
            label="Budget"
          />
          <Input
            id="designer"
            name="designer"
            type="text"
            placeholder="Designer..."
            hasLabel
            label="Designer"
          />
          <Input
            id="client"
            name="client"
            type="text"
            placeholder="Client..."
            hasLabel
            label="Client"
          />
          <hr className="my-2" />
          <span className="text-lg font-medium">Images</span>
          <Input
            id="images"
            name="images"
            type="file"
            hasLabel
            label="Images"
          />
          <hr className="my-2" />
          <div className="flex justify-between gap-2">
            <Button
              variant="secondary"
              labelColor="light"
              label="Cancel"
              className="w-1/3"
              onClick={props.onClose}
            />
            <Button
              variant="dark"
              labelColor="light"
              label="Create Project"
              className="w-2/3"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};
