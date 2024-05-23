import * as React from "react";
import { Button, Modal } from "~src/components";
import { addProject } from "../../api";

type CreateProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateProjectModal = (props: CreateProjectModalProps) => {

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="text-center sm:mt-5">
        <span className="text-xl font-semibold leading-6 text-gray-900">
          Create Empty Project
        </span>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        <Button label="Cancel" variant="secondary" labelColor="light" onClick={props.onClose} />
        <Button label="Create Project" variant="success" labelColor="light" onClick={() => {
          addProject()
          props.onClose()
        }} />
      </div>
    </Modal>

  );
};
