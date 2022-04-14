import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WorkWithMeBanner.scss";

const WorkWithMeBanner = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (windowWidth < 1025) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div
      className={`dkWorkWithMeBanner ${
        isMobile ? "bg-whiteMain" : "waves-spacer layered-peaks-desktop"
      }`}
    >
      <div className="container h-100 content-wrapper py-5 py-md-3">
        <div className="col-12 pb-3 text-center">
          <p className="fs-1 fw-600 color-blackMain">
            Interested in working with me?
          </p>
          <Link className="btn hire-button color-whiteMain" to="/contact">
            Hire Me!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkWithMeBanner;
