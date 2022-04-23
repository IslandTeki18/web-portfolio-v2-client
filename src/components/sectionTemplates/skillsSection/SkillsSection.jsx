import React from "react";
import "./SkillsSection.scss";
import LabelProgressBar from "../../molecules/labelProgressBar/LabelProgressBar";
import ResumePDF from "../../../assets/images/Resume.pdf";
import { mySkillsData } from "../../../utils/tempData";

const SkillsSection = () => {
  function renderProgressBars() {
    if (!mySkillsData) return;
    return mySkillsData.map((skill) => (
      <div className="col-12 col-md-6" key={skill.title}>
        <LabelProgressBar
          label={skill.title}
          progressValue={skill.progress}
          key={skill.title}
          progressBarClassName="skill-progress"
          labelClassName="skill-label color-whiteMain"
          className="skill-wrapper"
        />
      </div>
    ));
  }
  return (
    <section className="dkSkillsSection waves-spacer stacked-waves-2 py-5">
      <div className="container">
        <div className="col-12 pb-5">
          <p className="skills-title color-whiteMain">My Skills</p>
        </div>
        <div className="row">{renderProgressBars()}</div>
        <div className="col-12 resume-button-wrapper pb-5">
          <a href={ResumePDF}  download>
            <button className="cv-button">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
