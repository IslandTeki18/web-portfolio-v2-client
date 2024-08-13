import * as React from 'react'
import { useState } from "react";
import { Modal } from "~src/components";

type DeleteProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const DeleteProjectModal = (props: DeleteProjectModalProps) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
        Delete Project Modal
    </Modal>
  )
}
