import * as React from "react";
import { useState } from "react";
import { Modal } from "~src/components";

type UpdateProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const UpdateProjectModal = (props: UpdateProjectModalProps) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      Update Project Modal
    </Modal>
  );
};
