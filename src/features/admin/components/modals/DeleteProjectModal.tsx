import * as React from "react";
import { Modal, Button } from "~src/components";

type DeleteProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDeleteClick: () => void;
};

export const DeleteProjectModal = (props: DeleteProjectModalProps) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Delete Project</h2>
        <h3 className="text-xl font-semibold">
          Are you sure you want to delete this project?
        </h3>
        <div className="flex justify-end gap-4">
          <Button label="Cancel" variant="secondary" labelColor="light" onClick={props.onClose} />
          <Button
            label="Delete"
            variant="danger"
            labelColor="light"
            onClick={() => {
              props.onDeleteClick();
              props.onClose();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
