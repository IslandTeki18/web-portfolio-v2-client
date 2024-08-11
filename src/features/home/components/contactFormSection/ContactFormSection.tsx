import * as React from "react";
import { useState } from "react";
import { SectionWrapper, Textarea, Form, Modal } from "~src/components";
import { Input } from "~src/components";
import { Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

type Props = {};

export const ContactFormSection = (props: Props) => {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [contactObj, setContactObj] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function onChangeHandler(e: any) {
    setContactObj((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function onSubmitHandler(e: any) {
    e.preventDefault();
    
    setOpenConfirmationModal(true);
    setTimeout(() => {
      setOpenConfirmationModal(false);
      setContactObj({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 5000);
  }

  function isFormFilledOut() {
    return !contactObj.email || !contactObj.name || !contactObj.message;
  }

  return (
    <SectionWrapper title="Let's Connect">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div
          id="social-links"
          className="flex flex-col justify-between border border-white text-white p-6"
        >
          <span className="text-2xl font-bold tracking-wide uppercase">
            Let's build something great together
          </span>
          <div className="flex flex-col gap-4 justify-evenly">
            <a
              href="https://www.instagram.com/landon.mckell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base uppercase">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/landon-mckell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base uppercase">Linkedin</span>
            </a>
            <a
              href="https://twitter.com/MckellLandon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base uppercase">Twitter</span>
            </a>
            <a
              href="https://github.com/IslandTeki18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base uppercase">Github</span>
            </a>
          </div>
        </div>
        <Form onSubmit={onSubmitHandler}>
          <div
            id="contact-form"
            className="flex flex-col gap-6 justify-between"
          >
            <Input
              type="text"
              placeholder="NAME"
              name="name"
              value={contactObj.name}
              onChange={onChangeHandler}
            />
            <Input
              type="email"
              placeholder="EMAIL"
              name="email"
              value={contactObj.email}
              onChange={onChangeHandler}
            />
            <Input
              name="phone"
              type="tel"
              placeholder="PHONE"
              value={contactObj.phone}
              onChange={onChangeHandler}
            />
            <Textarea
              placeholder="TELL ME ABOUT YOUR PROJECT..."
              rows={5}
              value={contactObj.message}
              name="message"
              onChange={onChangeHandler}
            />
            <button
              disabled={isFormFilledOut()}
              type="submit"
              className="border border-white py-2 uppercase text-white w-2/6 hover:bg-white hover:text-dark disabled:opacity-25 disabled:cursor-not-allowed"
            >
              send
            </button>
          </div>
        </Form>
      </div>
      <Modal
        isOpen={openConfirmationModal}
        onClose={() => setOpenConfirmationModal(false)}
      >
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Message Successfully Sent!
            </Dialog.Title>
          </div>
        </div>
      </Modal>
    </SectionWrapper>
  );
};
