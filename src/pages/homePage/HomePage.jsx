import "./HomePage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import useScrollToTop from "../../customHooks/useScrollToTop";
import HomeHeaderSection from "../../components/sectionTemplates/homeHeaderSection/HomeHeaderSection";
import HomeProjectSection from "../../components/sectionTemplates/homeProjectSection/HomeProjectSection";
import SkillsSection from "../../components/sectionTemplates/skillsSection/SkillsSection";
import ServiceSection from "../../components/sectionTemplates/serviceSection/ServiceSection";
import WorkWithMeBanner from "../../components/molecules/workWithMeBanner/WorkWithMeBanner";
import ProjectDisplayCard from "../../components/molecules/projectDisplayCard/ProjectDisplayCard";
import { limitedProjects } from "../../redux/actions/project.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;
  useEffect(() => {
    dispatch(limitedProjects());
  }, [dispatch]);
  useScrollToTop();

  function renderProjects() {
    if (!projects) return;
    return projects
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .filter((project) => project.status !== "Not Live")
      .map((project) => (
        <div
          className="col-12 col-lg-6 col-xl-4 mb-5 card-wrapper"
          key={project._id}
        >
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
