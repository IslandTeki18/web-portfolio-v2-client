import "./HomePage.scss";
import { Link } from "react-router-dom";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { useGetProjects } from "../../customHooks/useGetProjects";
import useScrollToTop from "../../customHooks/useScrollToTop";
import Card from "../../components/atoms/card/Card";
import HomeHeaderSection from "../../components/sectionTemplates/homeHeaderSection/HomeHeaderSection";
import HomeProjectSection from "../../components/sectionTemplates/homeProjectSection/HomeProjectSection";
import SkillsSection from "../../components/sectionTemplates/skillsSection/SkillsSection";
import ServiceSection from "../../components/sectionTemplates/serviceSection/ServiceSection";
import WorkWithMeBanner from "../../components/molecules/workWithMeBanner/WorkWithMeBanner";

const HomePage = () => {
  const { loading, error, projects } = useGetProjects();
  useScrollToTop();

  function renderProjects() {
    if (!projects) return;
    return projects
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((project) => (
        <div className="col-md-6 mb-5" key={project._id}>
          <Card
            className="home-card-ht"
            imgTop
            imgSrc={project.img}
            imgAlt={project.name}
          >
            <div className="card-body cardDescription">
              <h4 className="card-title">{project.title}</h4>
              <p className="card-text lineClamp">{project.shortDescription}</p>
            </div>
            <div className="card-footer">
              <Link to={`/project/${project._id}`} className="btn btn-primary">
                View Project
              </Link>
            </div>
          </Card>
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
    <div className="dkHomePage">
      <HomeHeaderSection
        displayText="Hi, I'm Landon McKell."
        heroDescrption="I'm a Professional"
        profession="Web Developer"
      />
      <HomeProjectSection projects={renderProjects()} />
      <SkillsSection />
      <ServiceSection />
      <WorkWithMeBanner />
    </div>
  );
};

export default HomePage;
