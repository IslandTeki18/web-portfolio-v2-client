import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import ProjectListCard from "../../components/organisms/projectListCard/ProjectListCard";
import { useGetProjects } from "../../customHooks/useGetProjects";

const ProjectsListPage = () => {
  const { loading, error, projects } = useGetProjects();

  if (loading) {
    <Loader />;
  }
  if (error) {
    <Message variant="danger" isDismissible>
      {error}
    </Message>;
  }
  return (
    <div className="dkProjectListPage">
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
          <ProjectListCard project={project} />
        ))}
    </div>
    </div>
  );
};

export default ProjectsListPage;
