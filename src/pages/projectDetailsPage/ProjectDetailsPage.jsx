import "./ProjectDetailsPage.scss";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { useParams } from "react-router";
import { useGetProjectDetails } from "../../customHooks/useGetProjectDetails";
import { placeholderImages } from "../../utils/tempData";
import useScrollToTop from "../../customHooks/useScrollToTop";
import ProjectDetailsHeader from "../../components/molecules/projectDetailsHeader/ProjectDetailsHeader";
import Carousel from "../../components/molecules/carousel/Carousel";
import { Link } from "react-router-dom";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { loading, error, project } = useGetProjectDetails(id);
  useScrollToTop();

  const feedbackPlaceholder = [
    {
      title: "Project Repo Update",
      date: "April 8, 2022",
      content:
        "Refactored the github repository to align more with industry standards and allow myself easier implementations of new features and bug fixes.",
    },
  ];
  const relatedProjectPlaceholder = [
    {
      title: "King of Aces",
      type: "Ecommerce / Web App",
      link: "/projects",
    },
  ];
  function renderProjectFeedbackAndUpdates() {
    return feedbackPlaceholder.map((item) => (
      <div className="feedback-wrapper color-whiteMain pb-3" key={item.title}>
        <div className="title-label pb-2">{item.title}</div>
        <div className="date-label color-primaryMain">{item.date}</div>
        <div className="content-label">{item.content}</div>
      </div>
    ));
  }
  function renderRelatedProjects() {
    return relatedProjectPlaceholder.map((project) => (
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
                {project.longDescription}
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
                    {project.industry || "Service"}
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
                    {project.yearBuilt || "2022"}
                  </div>
                </div>
              </div>
              <div className="project-buttons-wrapper">
                <Link
                  to={project.projectUrl || "/projects"}
                  className="details-button"
                >
                  Project URL
                </Link>
                <Link
                  to={project.githubUrl || "/projects"}
                  className="details-button"
                >
                  Source Code
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 pb-0 pb-md-5">
              <Carousel images={placeholderImages} />
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-12 col-md-6 developer-feedback">
              <p className="feedback-title-label color-primaryMain">
                Developer Feedback & Updates
              </p>
              {renderProjectFeedbackAndUpdates()}
            </div>
            <div className="col-12 col-md-6 related-projects">
              <p className="related-title-label color-primaryMain">
                Related Projects
              </p>
              {renderRelatedProjects()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsPage;
