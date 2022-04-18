import React from "react";
import "./ProjectDetailsHeader.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectDetailsHeader = (props) => {
  return (
    <section className="dkProjectDetailsHeader bg-primaryMain py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 text-center text-sm-start">
            <p className="project-title color-blackMain">
              {props.project.title}
            </p>
            <div className="subtitle-wrapper">
              <div className="subtitle-label">
                {props.project.type || "Web App"}
              </div>
              <div className="separator bg-blackMain" />
              <div className="subtitle-label">
                {props.project.designType || "Standard"}
              </div>
              <div className="separator bg-blackMain" />
              <div className="subtitle-label">{props.project.status}</div>
            </div>
          </div>
          <div className="col-12 col-lg-6 breadcrumb-column">
            <nav aria-label="project-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="color-blackMainf breadcrumb-label">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link
                    to="/projects"
                    className="color-blackMainf breadcrumb-label"
                  >
                    Projects
                  </Link>
                </li>
                <li className="breadcrumb-item breadcrumb-label active">
                  {props.project.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectDetailsHeader.propTypes = {
  project: PropTypes.object,
};

export default ProjectDetailsHeader;
