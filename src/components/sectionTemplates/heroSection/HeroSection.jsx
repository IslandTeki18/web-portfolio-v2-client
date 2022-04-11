import React from "react";
import PropTypes from "prop-types";

const HeroSection = (props) => {
  return (
    <header className="bg-primary py-5 mb-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-white mt-5 mb-2">
              {props.displayText}
            </h1>
            <p className="lead mb-5 text-white-50">{props.heroDescrption}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

HeroSection.propTypes = {
  displayText: PropTypes.string,
  heroDescrption: PropTypes.string,
};

export default HeroSection;
