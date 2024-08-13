import * as React from "react";
import { useState } from "react";
import { Modal } from "~src/components";

type CreateProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateProjectModal = (props: CreateProjectModalProps) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      Create Project Modal
    </Modal>
  );
};
