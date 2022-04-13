import React from "react";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="dkNotFoundPage">
      <div className="container spacing-content">
        <div className="center-content col-12 text-center text-white h-100">
          <p className="not-found-code display-3 color-primaryMain fw-bold">404</p>
          <p className="fs-2">Oops. There's nothing here...</p>
          <p className="fs-5">It's okay, sometimes we get lost.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
