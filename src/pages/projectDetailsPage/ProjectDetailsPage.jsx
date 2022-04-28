import "./ProjectDetailsPage.scss";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { useParams } from "react-router";
import { useGetProjectDetails } from "../../customHooks/useGetProjectDetails";
import useScrollToTop from "../../customHooks/useScrollToTop";
import ProjectDetailsHeader from "../../components/molecules/projectDetailsHeader/ProjectDetailsHeader";
import Carousel from "../../components/molecules/carousel/Carousel";
import { Link } from "react-router-dom";
import Img from "../../components/atoms/img/Img";
import Icon from "../../components/atoms/icon/Icon";
import dateFormatter from "../../utils/dateFormatter";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { loading, error, project } = useGetProjectDetails(id);
  useScrollToTop();

  function renderProjectFeedbackAndUpdates() {
    return project.developerFeedback.map((feedback) => (
      <div className="feedback-wrapper color-whiteMain pb-3" key={feedback._id}>
        <div className="title-label pb-2">{feedback.title}</div>
        <div className="date-label color-primaryMain">
          {dateFormatter(feedback.createdAt)}
        </div>
        <div className="content-label">{feedback.description}</div>
      </div>
    ));
  }
  function renderRelatedProjects() {
    return project.relatedProjects.map((project) => (
      <div
        className="related-project-wrapper color-whiteMain pb-3"
        key={project.title}
      >
        <div className="title-type-wrapper">
          <div className="title-label">{project.title}</div>
          <div className="type-label">{project.type}</div>
        </div>
        <Link className="visit-button" to={project.link}>
          Visit
        </Link>
      </div>
    ));
  }

  if (loading || !project) {
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
      <ProjectDetailsHeader project={project} />
      <section className="bg-secondaryMain">
        <div className="container-sm">
          <div className="row">
            <div className="col-12 text-center py-2 py-md-5">
              <div className="project-overview color-whiteMain text-uppercase">
                Project Overview
              </div>
              <div className="project-description color-whiteMain">
                {project.description}
              </div>
              <div className="project-details-wrapper">
                <div className="project-details-item">
                  <div className="detail-title color-primaryMain">Client</div>
                  <div className="subtitle-label color-whiteMain">
                    {project.client || "John Doe"}
                  </div>
                </div>
                <div className="separator" />
                <div className="project-details-item">
                  <div className="detail-title color-primaryMain">Industry</div>
                  <div className="subtitle-label color-whiteMain">
                    {project.industry || "N / A"}
                  </div>
                </div>
                <div className="separator" />
                <div className="project-details-item">
                  <div className="detail-title color-primaryMain">Designer</div>
                  <div className="subtitle-label color-whiteMain">
                    {project.designer || "Myself"}
                  </div>
                </div>
                <div className="separator" />
                <div className="project-details-item">
                  <div className="detail-title color-primaryMain">Year</div>
                  <div className="subtitle-label color-whiteMain">
                    {project.yearBuilt || "N / A"}
                  </div>
                </div>
              </div>
              <div className="project-buttons-wrapper">
                <a
                  href={project.projectUrl || "/projects"}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="details-button"
                >
                  Project URL
                </a>
                <a
                  href={project.githubUrl || "/projects"}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="details-button"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {project.images && project.images.length > 1 ? (
            <div className="row">
              <div className="col-12 pb-0 pb-md-5">
                <Carousel images={project.images} />
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12 pb-0 pb-md-5 center-single-image">
                <Img
                  src={project.images}
                  className="img-fluid"
                  width={600}
                  height={300}
                />
              </div>
            </div>
          )}
          <div className="row pb-5">
            <div className="col-12 col-md-6 developer-feedback">
              <p className="feedback-title-label color-primaryMain">
                Developer Feedback & Updates
              </p>
              {project.developerFeedback &&
              project.developerFeedback.length !== 0 ? (
                renderProjectFeedbackAndUpdates()
              ) : (
                <div className="empty-feedback-area">
                  <Icon
                    className="fa-solid fa-triangle-exclamation color-primaryMain"
                    size={20}
                    marginRight={3}
                    X
                  />
                  <p className="fs-5 text-center color-primaryMain">
                    No developer feedback
                  </p>
                  <Icon
                    className="fa-solid fa-triangle-exclamation color-primaryMain"
                    size={20}
                  />
                </div>
              )}
            </div>
            <div className="col-12 col-md-6 related-projects">
              <p className="related-title-label color-primaryMain">
                Related Projects
              </p>
              {project.relatedProjects && renderRelatedProjects()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsPage;
