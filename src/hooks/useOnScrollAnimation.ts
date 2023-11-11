import { useEffect } from "react";

type useOnScrollAnimationProps = {
  ref: React.MutableRefObject<HTMLElement | null>
};

export const useOnScrollAnimation = (props: useOnScrollAnimationProps) => {
  useEffect(() => {
    const onScroll = () => {
      if (props.ref.current) {
        const topPosition = props.ref.current.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight;
        if (topPosition < scrollPosition) {
          // Element is in view
          props.ref.current.classList.add(
            "animate__animated",
            "animate__fadeIn"
          );
        } else {
          // Optionally, remove the animation if the element is not in view
          props.ref.current.classList.remove(
            "animate__animated",
            "animate__fadeIn"
          );
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};
