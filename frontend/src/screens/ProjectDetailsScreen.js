import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listProjectDetails } from "../actions/projectActions";

const ProjectDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProjectDetails(match.params.id));
    // show the message, after 5 seconds remove the message
    if (error) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [dispatch, match, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" show={show}>
          {error}
        </Message>
      ) : (
        <div className="container">
          <h2 className="my-4">{project.title}</h2>
          <div className="row pb-4">
            <div className="col-md-7">
              <img className="img-fluid" src={project.img} alt={project.name} />
            </div>
            <div className="col-md-5">
              <h4 className="my-3">Project Description</h4>
              <p>{project.longDescription}</p>
              <div className="row">
                <div className="col-md-6 text-left">
                  <h5>
                    <u>Frontend Stack</u>
                  </h5>
                  {!project.frontendStack ? (
                    <Loader />
                  ) : (
                    <ul className="text-left">
                      {project.frontendStack.map((x, index) => (
                        <li key={index}>{x.toString()}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="col-md-6 text-left">
                  <h5>
                    <u>Backend Stack</u>
                  </h5>
                  {!project.backendStack ? (
                    <Loader />
                  ) : (
                    <ul className="text-left">
                      {project.backendStack.map((x, index) => (
                        <li key={index}>{x.toString()}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="col-md-6">
                  <h5>
                    <u>Project Status</u>
                  </h5>
                  <span
                    className={`badge badge-pill badge-${
                      project.status === "Live"
                        ? "success"
                        : project.status === "Not Live"
                        ? "danger"
                        : project.status === "Under Construction" ||
                          "Remodeling"
                        ? "warning"
                        : "primary"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="col-md-6 text-left">
                  <h5>
                    <u>Database Stack</u>
                  </h5>
                  {!project.databaseStack ? (
                    <Loader />
                  ) : (
                    <ul className="text-left">
                      {project.databaseStack.map((x, index) => (
                        <li key={index}>{x.toString()}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="btn-group my-4">
                <a
                  href={project.trelloUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <button
                    className="btn btn-primary details-btn"
                    disabled={project.trelloUrl === "" ? true : false}
                  >
                    Trello
                  </button>
                </a>
                <a
                  href={project.githubUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <button
                    className="btn btn-secondary details-btn"
                    disabled={project.githubUrl === "" ? true : false}
                  >
                    Github
                  </button>
                </a>
                <a
                  href={project.projectUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <button
                    className="btn btn-success details-btn"
                    disabled={project.projectUrl === "" ? true : false}
                  >
                    Project Website
                  </button>
                </a>
              </div>
              <Link className="btn btn-link" to="/projects">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetailsScreen;
