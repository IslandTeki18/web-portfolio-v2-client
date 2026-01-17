import * as React from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";

type LightBoxProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
};

export const LightBox = (props: LightBoxProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (n: number) => {
    let newIndex = n;
    if (n >= props.images.length) newIndex = 0;
    if (n < 0) newIndex = props.images.length - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => showSlide(currentSlide + 1);
  const prevSlide = () => showSlide(currentSlide - 1);

  return (
    <Transition show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="modal-box w-full max-w-4xl">
                <button
                  className="btn btn-ghost btn-circle absolute top-2 right-2"
                  onClick={props.onClose}
                >
                  ✕
                </button>

                <div className="relative">
                  <div className="text-base-content text-sm mb-2">
                    {currentSlide + 1} / {props.images.length}
                  </div>
                  <img
                    src={props.images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-full"
                  />

                  <button
                    className="btn btn-ghost btn-circle absolute top-1/2 left-0 transform -translate-y-1/2"
                    onClick={prevSlide}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-ghost btn-circle absolute top-1/2 right-0 transform -translate-y-1/2"
                    onClick={nextSlide}
                  >
                    ❯
                  </button>

                  <div className="flex justify-center mt-4 gap-2">
                    {props.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-16 h-16 object-cover cursor-pointer ${
                          index === currentSlide ? "opacity-100" : "opacity-60"
                        } hover:opacity-100 transition-opacity duration-300`}
                        onClick={() => showSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
