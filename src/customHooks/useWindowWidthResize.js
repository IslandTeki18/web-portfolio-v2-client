import { useState, useEffect } from "react";

const useWindowWidthResize = () => {
  const BREAK_POINT = 769;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      let windowWidth = window.innerWidth;
      if (windowWidth < BREAK_POINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return { isMobile };
};

export default useWindowWidthResize;
