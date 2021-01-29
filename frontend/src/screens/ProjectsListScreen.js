import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "../actions/projectActions";
import moment from "moment";

const ProjectsListScreen = () => {
  const dispatch = useDispatch();

  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="container pt-3">
          <div className="row">
            <div className="col-12">
              <h3>Recent Projects</h3>
              <hr style={{ backgroundColor: "white" }} />
            </div>
          </div>
          {projects
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((project) => (
              <div className="row py-3" key={project._id}>
                <div className="col-md-7 col-sm-6" data-aos="slide-up">
                  <Link to={`/project/${project._id}`}>
                    <img
                      className="img-fluid rounded mb-3 mb-md-0"
                      src={project.img}
                      alt={project.name}
                    />
                  </Link>
                </div>
                <div className="col-md-5 col-sm-6" data-aos="slide-up">
                  <h4>{project.title}</h4>
                  <hr style={{ backgroundColor: "white" }} />
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
                  <p>{project.shortDescription}</p>
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Frontend</h4>
                      <p>{project.frontendStack.join(" | ")}</p>
                      <h4>Backend</h4>
                      <p>{project.backendStack.join(" | ")}</p>
                    </div>
                    <div className="col-md-6">
                      <h4>Last Updated:</h4>
                      <p>{moment(project.updatedAt).calendar()}</p>
                      <h4>Database</h4>
                      <p>{project.databaseStack.join(" | ")}</p>
                    </div>
                  </div>
                  <Link
                    className="btn btn-primary"
                    to={`/project/${project._id}`}
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default ProjectsListScreen;
