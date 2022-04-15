import "./HomePage.scss";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { useGetProjects } from "../../customHooks/useGetProjects";
import useScrollToTop from "../../customHooks/useScrollToTop";
import HomeHeaderSection from "../../components/sectionTemplates/homeHeaderSection/HomeHeaderSection";
import HomeProjectSection from "../../components/sectionTemplates/homeProjectSection/HomeProjectSection";
import SkillsSection from "../../components/sectionTemplates/skillsSection/SkillsSection";
import ServiceSection from "../../components/sectionTemplates/serviceSection/ServiceSection";
import WorkWithMeBanner from "../../components/molecules/workWithMeBanner/WorkWithMeBanner";
import ProjectDisplayCard from "../../components/molecules/projectDisplayCard/ProjectDisplayCard";

const HomePage = () => {
  const { loading, error, projects } = useGetProjects();
  useScrollToTop();

  function renderProjects() {
    if (!projects) return;
    return projects
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((project) => (
        <div className="col-md-6 mb-5 card-wrapper" key={project._id}>
          <ProjectDisplayCard project={project} />
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
