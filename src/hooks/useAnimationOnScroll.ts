import { useEffect } from "react";
import React = require("react");

type useAnimationOnScrollProps = {
  ref: React.MutableRefObject<HTMLElement | null>;
};

export const useAnimationOnScroll = (props: useAnimationOnScrollProps) => {
  useEffect(() => {
    if (!props.ref.current) return;
    props.ref.current.classList.remove("animate__fadeIn");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!props.ref.current) return;
        if (entry.isIntersecting) {
          props.ref.current.classList.add("animate__fadeIn");
          props.ref.current.classList.add("animate__delay-1s");
        }
      });
    });
    observer.observe(props.ref.current);
  }, [props.ref]);
};
