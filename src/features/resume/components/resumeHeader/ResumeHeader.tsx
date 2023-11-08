import * as React from "react";
import { useState } from "react";
//@ts-ignore
import resumeOne from "../../assets/Resume01.jpg";
//@ts-ignore
import resumeTwo from "../../assets/Resume02.jpg";
import { Modal } from "~src/components";
import { Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

type Props = {};

export const ResumeHeader = (props: Props) => {
  const [openModal, setOpenModal] = useState(false)

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
    setOpenModal(true)
    setTimeout(() => {
      setOpenModal(false)
    }, 15000)
  }
  return (
    <div className="border-2 border-white p-6 flex flex-col gap-8 text-white animate__animated animate__fadeInDown">
      <div className="flex justify-between flex-col sm:flex-row items-start sm:items-center">
        <span className="text-3xl font-bold uppercase">resume</span>
        <button onClick={downloadMultipleImages} className="border border-white px-6 py-2 mt-4 sm:mt-0">
          Download CSV
        </button>
      </div>
      <span className="text-base">
        I worked primarily in the web development space. I love woodworking,
        football, video games, working out, and making fun things for my family
        and with my family. I love what I do I want to be able to grow even more
        in all my areas of interest.
      </span>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
      <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Resume Downloaded, Check your Downloads!
            </Dialog.Title>
          </div>
        </div>
      </Modal>
    </div>
  );
};
