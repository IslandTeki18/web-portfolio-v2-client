import { useEffect } from "react";
import "./ProjectDetailsPage.scss";
import { Link } from "react-router-dom";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { useParams } from "react-router";
import useGetProjectDetails from "../../customHooks/useGetProjectDetails";
import Badge from "../../components/atoms/badge/Badge";
import Img from "../../components/atoms/img/Img";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { loading, error, project } = useGetProjectDetails(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function setBadgeColor(status) {
    switch (status) {
      case "Live":
        return "success";
      case "Not Live":
        return "danger";
      case "Under Construction":
      case "Remodeling":
        return "warning";
      default:
        return "secondary";
    }
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Message variant="danger" isDismissible>
        {error}
      </Message>
    );
  }
  return (
    <div className="dkProjectDetailsPage">
      <section className="py-3" id="project-details-section">
        <div className="container text-white">
          <Link className="btn btn-secondary btn-sm mb-2" to="/projects">
            Go Back
          </Link>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row pb-3 statusUpdateContainer">
                <div className="col dkLabel">
                  Status:
                  <Badge
                    variant={setBadgeColor(project.status)}
                    className="ms-2"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="col dkLabel">
                  Updated:
                  <div className="ms-2">
                    {project.updatedAt &&
                      new Intl.DateTimeFormat("en-US", {
                        dateStyle: "short",
                        timeStyle: "short",
                      }).format(new Date(project.updatedAt))}
                  </div>
                </div>
              </div>
              <Img className="img-fluid" src={project.img} alt={project.name} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-sm-2 mt-md-0">
              <h4 className="text-white">{project.title}</h4>
              <div className="row">
                <div className="btn-group pb-2" role="group">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${
                      project.projectUrl === "" ? "disabled" : ""
                    } btn-sm`}
                  >
                    Website
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-secondary ${
                      project.githubUrl === "" ? "disabled" : ""
                    } btn-sm`}
                  >
                    Github Repo
                  </a>
                  <a
                    href={project.trelloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-secondary ${
                      project.trelloUrl === "" ? "disabled" : ""
                    } btn-sm`}
                  >
                    Trello
                  </a>
                </div>
              </div>
              <p>{project.longDescription}</p>
              <div className="row">
                <div className="col-md-4 text-left">
                  <h6 className="text-white">
                    <u>Frontend Stack</u>
                  </h6>
                  {project.frontendStack && (
                    <ul className="text-left">
                      {project.frontendStack.map((x, index) => (
                        <li key={index}>{x.toString()}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="col-md-4 text-left">
                  <h6 className="text-white">
                    <u>Backend Stack</u>
                  </h6>
                  {project.backendStack && (
                    <ul className="text-left">
                      {project.backendStack.map((x, index) => (
                        <li key={index}>{x.toString()}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="col-md-4 text-left">
                  <h6 className="text-white">
                    <u>Database Stack</u>
                  </h6>
                  {project.databaseStack && (
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
    </div>
  );
};

export default ProjectDetailsPage;
