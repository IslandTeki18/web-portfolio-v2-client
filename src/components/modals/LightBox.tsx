import * as React from "react";
import { useState } from "react";

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

  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 p-10 overflow-y-scroll">
      <span
        className="absolute top-5 right-5 text-white text-4xl cursor-pointer"
        onClick={props.onClose}
      >
        &times;
      </span>

      <div className="relative max-w-4xl mx-auto mt-10">
        <div className="text-white text-sm mb-2">
          {currentSlide + 1} / {props.images.length}
        </div>
        <img
          src={props.images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full"
        />

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer"
          onClick={nextSlide}
        >
          &#10095;
        </button>

        <div className="flex justify-center mt-4">
          {props.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 object-cover mx-1 cursor-pointer ${
                index === currentSlide ? "opacity-100" : "opacity-60"
              } hover:opacity-100 transition-opacity duration-300`}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
