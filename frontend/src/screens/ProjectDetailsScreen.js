import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listProjectDetails } from "../actions/projectActions";
import moment from "moment";

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
        <>
          <section className="py-3" id="project-details-section">
            <div className="container text-white">
              <Link
                className="btn btn-primary text-white btn-sm m-3"
                to="/projects"
              >
                Go Back
              </Link>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="row mb-3">
                    <div className="col text-center">
                      Status:
                      <span
                        className={`badge badge-${
                          project.status === "Live"
                            ? "success"
                            : project.status === "Not Live"
                            ? "danger"
                            : project.status === "Under Construction" ||
                              "Remodeling"
                            ? "warning"
                            : "primary"
                        } ml-2`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="col d-flex text-center">
                      Updated:
                      <div className="ml-2">
                        {moment(project.updatedAt).calendar()}
                      </div>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={project.img}
                    alt={project.name}
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mt-sm-2">
                  <h2 className="text-white">{project.title}</h2>
                  <div className="row">
                    <div className="col">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="btn btn-primary btn-block btn-sm"
                          disabled={project.projectUrl === "" ? true : false}
                        >
                          Website
                        </button>
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="btn btn-secondary btn-block btn-sm"
                          disabled={project.githubUrl === "" ? true : false}
                        >
                          Github Repo
                        </button>
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href={project.trelloUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="btn btn-secondary btn-block btn-sm"
                          disabled={project.trelloUrl === "" ? true : false}
                        >
                          Trello
                        </button>
                      </a>
                    </div>
                  </div>
                  <h4 className="my-3 text-white">Project Description:</h4>
                  <p>{project.longDescription}</p>
                  <div className="row">
                    <div className="col-md-4 text-left">
                      <h5 className="text-white">
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
                    <div className="col-md-4 text-left">
                      <h5 className="text-white">
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
                    <div className="col-md-4 text-left">
                      <h5 className="text-white">
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
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProjectDetailsScreen;
