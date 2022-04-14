import React from "react";
import "./AboutMePage.scss";
import SkillsSection from "../../components/sectionTemplates/skillsSection/SkillsSection";
import WorkWithMeBanner from "../../components/molecules/workWithMeBanner/WorkWithMeBanner";
import Icon from "../../components/atoms/icon/Icon";
import useScrollToTop from "../../customHooks/useScrollToTop";
import Img from "../../components/atoms/img/Img";
import image from "../../assets/images/IMG_1423.png";
import { socialMediaData, personalData } from "../../utils/tempData";

const AboutMePage = () => {
  useScrollToTop();
  function socialMediaButtons() {
    return socialMediaData.map((social) => (
      <div className="social-button" key={social.icon}>
        <a href={social.link} rel="noreferrer noopener" target="_blank">
          <Icon className={social.icon} color="#ffffff" size={40} />
        </a>
      </div>
    ));
  }

  function renderPersonalFacts() {
    return personalData.map((fact) => (
      <div className="personal-fact-wrapper" key={fact.title}>
        <p className="fact-label color-whiteMain">{fact.title}</p>
        <div className="separator" />
        <p className="fact-response color-whiteMain">{fact.value}</p>
      </div>
    ));
  }
  return (
    <div className="dkAboutMePage bg-secondaryMain">
      <section>
        <div className="container">
          <div className="col-12 text-center pt-5">
            <p className="text-white aboutMe-label">ABOUT ME</p>
          </div>
          <div className="row pt-5">
            <div className="col-12 col-md-6 col-xl-5 center-content order-1 order-md-0">
              <Img
                className="img-thumbnail img-fluid"
                src={image}
                width={400}
                height={460}
              />
              <div className="social-media-group pt-3">
                {socialMediaButtons()}
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-7 order-0 order-md-1">
              <p className="name-label color-whiteMain">I'm Landon McKell</p>
              <p className="subtitle-label pb-3 pb-md-4 color-whiteMain">
                A <span className="color-primaryMain">Web Developer</span> based
                in Spanish Fork, <span className="color-primaryMain">Utah</span>
              </p>
              <p className="description-label pb-3 pb-md-4 color-whiteMain">
                I love being able to create beautiful, complex, web apps of all
                sizes. I specialize in full stack web development and though
                developing web apps is my passion, I also have firm ui/ux
                designs skills that help me accomplish a beautiful modern style
                for all of my projects. I hope you enjoy my portfolio.
              </p>
              <div className="personal-facts">{renderPersonalFacts()}</div>
            </div>
          </div>
        </div>
      </section>
      <SkillsSection />
      <div className="custom-spacer spacer-50"></div>
      <WorkWithMeBanner />
    </div>
  );
};

export default AboutMePage;
