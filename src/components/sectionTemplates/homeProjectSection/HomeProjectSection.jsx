import React from "react";
import "./HomeProjectSection.scss";
import PropTypes from "prop-types";

const HomeProjectSection = (props) => {
  return (
    <section className="dkHomeProjectSection waves-spacer waves-1">
      <div className="container">
        <div className="row title-row">
          <div className="col-12">
            <p className="project-title color-whiteMain">Latest Projects</p>
          </div>
        </div>
        <div className="row">{props.projects}</div>
      </div>
    </section>
  );
};

HomeProjectSection.propTypes = {
  projects: PropTypes.array,
};

export default HomeProjectSection;
