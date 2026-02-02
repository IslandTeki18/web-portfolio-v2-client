import * as React from "react";
import { useState } from "react";
//@ts-ignore
import resumeOne from "../../assets/Resume01.jpg";
//@ts-ignore
import resumeTwo from "../../assets/Resume02.jpg";
import { Modal } from "~src/components";
import { Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TerminalPromptHeader } from "../terminalPromptHeader";

type Props = {};

export const ResumeHeader = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);

  function downloadMultipleImages() {
    const imageUrls = [resumeOne, resumeTwo];
    imageUrls.forEach((url, idx) => {
      const link = document.createElement("a");
      link.href = url;
      link.download = `Resume0${idx + 1}.jpg`;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 15000);
  }

  return (
    <>
      <TerminalPromptHeader
        command="cat ~/resume.json"
        bio="Full-stack Software Engineer specializing in React, TypeScript, and modern web development. 5+ years of experience building scalable applications."
        onDownload={downloadMultipleImages}
      />
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title as="h3" className="text-base font-semibold leading-6">
              Resume Downloaded, Check your Downloads!
            </Dialog.Title>
          </div>
        </div>
      </Modal>
    </>
  );
};
