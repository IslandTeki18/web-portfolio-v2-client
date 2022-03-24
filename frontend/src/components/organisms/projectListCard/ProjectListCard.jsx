import React from "react";
import { Link } from "react-router-dom";
import "./ProjectListCard.scss";

const ProjectListCard = (props) => {
  return (
    <div className="dkProjectListCard">
      <div className="row py-3" key={props.project._id}>
        <div className="col-lg-6 col-sm-12">
          <Link to={`/project/${props.project._id}`}>
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src={props.project.img}
              alt={props.project.name}
            />
          </Link>
        </div>
        <div className="col-lg-6 col-sm-12 mt-3">
          <div className="d-flex align-items-center" id="title-status-wrapper">
            <h3 className="mr-4 text-white">{props.project.title}</h3>
            <span
              className={`badge badge-${
                props.project.status === "Live"
                  ? "success"
                  : props.project.status === "Not Live"
                  ? "danger"
                  : props.project.status === "Under Construction" ||
                    "Remodeling"
                  ? "warning"
                  : "primary"
              }`}
            >
              <h6 style={{ marginTop: "5px" }}>{props.project.status}</h6>
            </span>
          </div>
          <p className="my-3">{props.project.shortDescription}</p>
          <div className="row">
            <div className="col-sm-12 col-md-8 d-flex">
              <ul
                style={{
                  paddingInlineStart: "18px",
                }}
              >
                {props.project.frontendStack.map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>
              <ul>
                {props.project.backendStack.map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>
              <ul>
                {props.project.databaseStack.map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="col-sm-12 col-md-4">
              <Link
                className="btn btn-primary btn-block btn-sm"
                to={`/project/${props.project._id}`}
              >
                Project Details
              </Link>
              <a
                href={props.project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <button
                  className="btn btn-light btn-block btn-sm mt-2"
                  disabled={props.project.githubUrl === "" ? true : false}
                >
                  Github Repo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          backgroundColor: "white",
          width: "60%",
        }}
      />
    </div>
  );
};

export default ProjectListCard;
