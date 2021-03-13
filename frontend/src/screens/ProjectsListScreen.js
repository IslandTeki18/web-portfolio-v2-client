import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "../actions/projectActions";

const ProjectsListScreen = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;

  useEffect(() => {
    dispatch(listProjects());
    // show the message, after 5 seconds remove the message
    if (error) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" show={show}>
          {error}
        </Message>
      ) : (
        <div className="container py-3 text-white">
          <div className="row">
            <div className="col-12">
              <h2 className="text-white">
                <u>Recent Projects</u>
              </h2>
            </div>
          </div>
          {projects
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((project) => (
              <>
                <div className="row py-3" key={project._id}>
                  <div className="col-lg-6 col-sm-12">
                    <Link to={`/project/${project._id}`}>
                      <img
                        className="img-fluid rounded mb-3 mb-md-0"
                        src={project.img}
                        alt={project.name}
                      />
                    </Link>
                  </div>
                  <div className="col-lg-6 col-sm-12 mt-3">
                    <div
                      className="d-flex align-items-center"
                      id="title-status-wrapper"
                    >
                      <h3 className="mr-4 text-white">{project.title}</h3>
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
                        }`}
                      >
                        <h6 style={{ marginTop: "5px" }}>{project.status}</h6>
                      </span>
                    </div>
                    <p className="my-3">{project.shortDescription}</p>
                    <div className="row">
                      <div className="col-sm-12 col-md-8 d-flex">
                        <ul style={{ paddingInlineStart: "18px" }}>
                          {project.frontendStack.map((x, idx) => (
                            <li key={idx}>{x}</li>
                          ))}
                        </ul>
                        <ul>
                          {project.backendStack.map((x, idx) => (
                            <li key={idx}>{x}</li>
                          ))}
                        </ul>
                        <ul>
                          {project.databaseStack.map((x, idx) => (
                            <li key={idx}>{x}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <Link
                          className="btn btn-primary btn-block btn-sm"
                          to={`/project/${project._id}`}
                        >
                          Project Details
                        </Link>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <button
                            className="btn btn-light btn-block btn-sm mt-2"
                            disabled={project.githubUrl === "" ? true : false}
                          >
                            Github Repo
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr style={{ backgroundColor: "white", width: "60%" }} />
              </>
            ))}
        </div>
      )}
    </>
  );
};

export default ProjectsListScreen;
