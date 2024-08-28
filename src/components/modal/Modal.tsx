import * as React from "react";
import { Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: any;
  variant?: "light" | "dark";
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  className?: string;
};

export const Modal = (props: ModalProps) => {
  return (
    <Transition show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-1100 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className={`${props.className ? props.className : ""}${props.isFullWidth ? "w-full " : ""} ${
                  props.isFullHeight ? "h-full " : ""
                } relative transform overflow-hidden rounded-md ${
                  props.variant === "light"
                    ? "bg-white text-gray-1000"
                    : "bg-gray-800 text-gray-100"
                } px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6`}
              >
                {props.children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
