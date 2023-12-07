import * as React from "react";
import { useState } from "react";
import { Modal } from "~src/components";
import { addProject } from "../../api";

type CreateProjectModalProps = {
  isOpen: boolean;
};

export const CreateProjectModal = (props: CreateProjectModalProps) => {
  const [openModal, setOpenModal] = useState(props.isOpen);

  return (
    <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
      <div>
        <div className="mt-3 text-center sm:mt-5">
          <span className="text-base font-semibold leading-6 text-gray-900">
            Create new project?
          </span>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
          onClick={() => {
            addProject();
          }}
        ></button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};
