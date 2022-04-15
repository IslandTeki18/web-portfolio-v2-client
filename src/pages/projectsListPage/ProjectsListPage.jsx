import "./ProjectsListPage.scss";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import ProjectDisplayCard from "../../components/molecules/projectDisplayCard/ProjectDisplayCard";
import { useGetProjects } from "../../customHooks/useGetProjects";
import useScrollToTop from "../../customHooks/useScrollToTop";

const ProjectsListPage = () => {
  const { loading, error, projects } = useGetProjects();
  useScrollToTop();

  function renderProjects() {
    if (!projects) return;
    return projects
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((project) => (
        <div className="col-12 col-sm-6 card-wrapper">
          <ProjectDisplayCard project={project} cardTitle />
        </div>
      ));
  }

  if (loading) {
    <Loader />;
  }
  if (error) {
    <Message variant="danger" isDismissible>
      {error}
    </Message>;
  }
  return (
    <div className="dkProjectListPage bg-secondaryMain">
      <div className="container py-3 text-white">
        <div className="col-12">
          <h2 className="text-white">
            <u>Recent Projects</u>
          </h2>
        </div>
        <div className="row g-0">{renderProjects()}</div>
      </div>
    </div>
  );
};

export default ProjectsListPage;
