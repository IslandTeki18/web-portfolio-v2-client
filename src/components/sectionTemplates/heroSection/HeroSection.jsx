import React from "react";
import "./HeroSection.scss";
import PropTypes from "prop-types";

const HeroSection = (props) => {
  return (
    <div className="dkHeroSection bg-secondaryMain max-view-height">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12 text-center">
            <h1 className="name-text mt-5 mb-2">{props.displayText}</h1>
            <p className="subtitle-text mb-5">
              {props.heroDescrption}
              <span className="color-primaryMain ms-2">{props.profession}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  displayText: PropTypes.string,
  heroDescrption: PropTypes.string,
  profession: PropTypes.string,
};

export default HeroSection;
