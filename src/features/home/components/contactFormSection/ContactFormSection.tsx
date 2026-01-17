import * as React from "react";
import { useState } from "react";
import { SectionWrapper, Textarea, Form, Modal, Button, TerminalCard, CommandPrompt } from "~src/components";
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
        ...
prev,
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
        <TerminalCard glow glowColor="blue" id="social-links">
          <div className="card-body flex flex-col justify-between">
            <CommandPrompt status="ready">
              <span className="text-primary font-bold text-xl">ls -la ~/social</span>
            </CommandPrompt>
            <div className="flex flex-col gap-4 justify-evenly pl-6 mt-4">
              <a
                href="https://www.instagram.com/landon.mckell/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-info hover:text-accent"
              >
                <span className="text-secondary mr-2">▸</span>
                <span className="text-base">instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/landon-mckell/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-info hover:text-accent"
              >
                <span className="text-secondary mr-2">▸</span>
                <span className="text-base">linkedin</span>
              </a>
              <a
                href="https://twitter.com/MckellLandon"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-info hover:text-accent"
              >
                <span className="text-secondary mr-2">▸</span>
                <span className="text-base">twitter</span>
              </a>
              <a
                href="https://github.com/IslandTeki18"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-info hover:text-accent"
              >
                <span className="text-secondary mr-2">▸</span>
                <span className="text-base">github</span>
              </a>
            </div>
          </div>
        </TerminalCard>
        <TerminalCard glow glowColor="green">
          <div className="card-body">
            <CommandPrompt status="ready">
              <span className="text-primary font-bold text-xl">nano ~/contact-form</span>
            </CommandPrompt>
            <Form onSubmit={onSubmitHandler}>
              <div
                id="contact-form"
                className="flex flex-col gap-4 mt-4"
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
                <Button
                  label="send"
                  type="submit"
                  isDisabled={isFormFilledOut()}
                  variant="success"
                  className="w-full sm:w-2/6"
                />
              </div>
            </Form>
          </div>
        </TerminalCard>
      </div>
      <Modal
        isOpen={openConfirmationModal}
        onClose={() => setOpenConfirmationModal(false)}
      >
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success">
            <CheckIcon className="h-6 w-6 text-success-content" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6"
            >
              Message Successfully Sent!
            </Dialog.Title>
          </div>
        </div>
      </Modal>
    </SectionWrapper>
  );
};
