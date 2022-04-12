import { useEffect } from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { useGetProjects } from "../../customHooks/useGetProjects";
import Card from "../../components/atoms/card/Card";
import TechStackSection from "../../components/sectionTemplates/techStackSection/TechStackSection";
import HeroSection from "../../components/sectionTemplates/heroSection/HeroSection";

const HomePage = () => {
  const { loading, error, projects } = useGetProjects();

  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
  }, []);

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
      <section id="homeHeaderSection">
        <HeroSection
          displayText="Landon McKell"
          heroDescrption="I build beautiful custom websites using modern technology such as React, Nodejs, Express, and MongoDB. I am full stack web developer living the Utah area."
        />
      </section>
      <section id="homeProjectsSection">
        <div className="container">
          <div className="col-md-12">
            <h2 className="text-white">
              <u>Recent Projects</u>
            </h2>
          </div>
          <div className="row">{renderProjects()}</div>
        </div>
      </section>
      <section id="homeTechStackSection">
        <TechStackSection />
      </section>
    </div>
  );
};

export default HomePage;
