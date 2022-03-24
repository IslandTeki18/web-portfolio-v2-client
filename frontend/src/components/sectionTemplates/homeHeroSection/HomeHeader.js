import React from "react";

const HomeHeader = () => {
  return (
    <header className="bg-primary py-5 mb-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-white mt-5 mb-2 animate__animated animate__fadeIn">
              Landon McKell
            </h1>
            <p className="lead mb-5 text-white-50">
              I build beautiful custom websites using modern technology such as React, Nodejs, Express, and MongoDB. I am full stack web developer living the Utah area.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
