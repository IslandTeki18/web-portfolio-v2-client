import { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../components/sectionTemplates/homeHeroSection/HomeHeader";
import HomeSkills from "../components/sectionTemplates/homeSkillsSection/HomeSkills";
import Loader from "../components/atoms/loader/Loader";
import Message from "../components/atoms/message/Message";
import { useGetProjects } from "../customHooks/useGetProjects";

const HomeScreen = () => {
  const { loading, error, projects } = useGetProjects();

  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
  }, []);

  function renderProjects() {
    return projects
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((project) => (
        <div className="col-md-6 mb-5" key={project._id}>
          <div className="card home-card-ht">
            <img
              className="card-img-top img-fluid"
              src={project.img}
              alt={project.name}
            />
            <div className="card-body">
              <h4 className="card-title">{project.title}</h4>
              <p className="card-text">{project.shortDescription}</p>
            </div>
            <div className="card-footer">
              <Link to={`/project/${project._id}`} className="btn btn-primary">
                Project Details
              </Link>
            </div>
          </div>
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
    <div className="dkHomeScreen">
      <section id="project-list-section">
        <HomeHeader />
        <div className="container">
          <div className="col-md-12">
            <h2 className="text-white">
              <u>Recent Projects</u>
            </h2>
          </div>
          <div className="row">{renderProjects()}</div>
        </div>
      </section>
      <section>
        <HomeSkills />
      </section>
    </div>
  );
};

export default HomeScreen;
