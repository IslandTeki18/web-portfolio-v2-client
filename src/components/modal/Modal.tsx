import * as React from "react";
import { useState, useEffect } from "react";
import "./Modal.scss";

type ModalProps = {
  isOpen: boolean;
};

export const Modal = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen);
  const enteringBackDropClass = "ease-out duration-400 opacity-100";
  const exitingBackDropClass = "ease-in duration-400 opacity-0";
  const showModalClass =
    "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100";
  const exitModalClass =
    "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95";
  useEffect(() => {
    setIsOpen((prev) => !prev);
  }, [props.isOpen]);
  return isOpen ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Modal Title</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything.
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
              <button
                className="bg-info-500 text-white active:bg-info-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-opacity-25 fixed inset-0 z-40 bg-gray-500 ${
          isOpen ? enteringBackDropClass : exitingBackDropClass
        }`}
      ></div>
    </>
  ) : null;
};

Modal.defaultProps = {};
