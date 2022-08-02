import React from "react";
import ResumeEdu from "../../components/molecules/resumeEdu/ResumeEdu";
import ResumeExp from "../../components/molecules/resumeExp/ResumeExp";
import useScrollToTop from "../../customHooks/useScrollToTop";
import "./ResumePage.scss";
import resumePDF from "../../assets/images/Resume.pdf";

const ResumePage = () => {
  useScrollToTop();
  return (
    <div className="dkResumePage bg-secondaryMain">
      <section className="resume py-2">
        <div className="container text-white">
          <div className="section-title">
            <h2 className="text-white">Resume</h2>
            <p>
              I'm a professional
              <span className="ms-1 color-primaryMain">Web Developer</span> located
              in Spanish Fork, Utah.
            </p>
            <a className="btn btn-warning" href={resumePDF} download>
              Download CV
            </a>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Landon McKell</h4>
                <p>
                  <em>
                    Self taught and driven web developer with 4+ years of
                    experience developing web applications.
                  </em>
                </p>
                <ul>
                  <li>Spanish Fork, Utah 84660</li>
                  <li>(801) 310-5876</li>
                  <li>landon.roney7923@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <ResumeEdu
                  educationProgram="iOS Immersive Bootcamp"
                  startYear="May 2018"
                  endYear="Aug 2018"
                  schoolName="Dev Mountain"
                  city="Salt Lake City"
                  state="UT"
                  description={`Over a course of 13 weeks, I was taught about iOS app
                  development. We learned major concepts of app development such
                  as architecture, data, sumitting apps to the Apple App Store,
                  app design, how to navigate around xcode, the Apple
                  programming language Swift, and most importantly debugging.`}
                />
              </div>
              <div className="resume-item">
                <ResumeEdu
                  educationProgram="Bachelor of Computer Science"
                  startYear="2016"
                  endYear="2017"
                  schoolName="Utah Valley University"
                  city="Orem"
                  state="UT"
                  description="Spent two years in the CS Program of Utah Valley University.
                  Had great mentors and teachers that taught me the basic
                  concepts of programming such as conditionals, variables,
                  functions, classes and much more."
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <ResumeExp
                  employer="Start Studio"
                  startMonth="May"
                  startYear="2022"
                  isPresent
                  city="Spanish Fork"
                  state="UT"
                  expListItems={[
                    "Implementing snapshot and unit tests to Nextjs project",
                    "Creating a new website using React Typescript"
                  ]}
                />
              </div>
              <div className="resume-item">
                <ResumeExp
                  employer="Red Sky Technologies"
                  startMonth="Apr"
                  startYear="2021"
                  endMonth="Apr"
                  endYear="2022"
                  city="Spanish Fork"
                  state="UT"
                  expListItems={[
                    "Developing and mantaining code base and adding features for large projects. Actively testing and debugging projects.",
                    "Maintain high standards, clean communication with clients, and leaving detailed notes on project management tools.",
                    "Developing projects using ReactJS, Typescript, NodeJS, ExpressJS, MySQL, Docker, and more.",
                  ]}
                />
              </div>
              <div className="resume-item">
                <ResumeExp
                  employer="GMetrix LLC"
                  startMonth="Nov"
                  startYear="2019"
                  endMonth="Mar"
                  endYear="2021"
                  city="Lindon"
                  state="UT"
                  expListItems={[
                    "Develop and maintain the new direction of the elearning project. Provide test cases for our QA team and implement design changes and layouts.",
                    "Develop Microsoft Office product simulations using Unity. Build out educational quiz and test questions for students and users of the simulations.",
                    "Develop these features and products using popular full stack technologys such as Reactjs, Nodejs, ASP.net, .Net core and more.",
                  ]}
                />
              </div>
              <div className="resume-item">
                <ResumeExp
                  employer="Bright Bridge Web LLC"
                  startMonth="Oct"
                  startYear="2018"
                  endMonth="Nov"
                  endYear="2019"
                  city="Provo"
                  state="UT"
                  expListItems={[
                    "Was lead developer in design, development, and deployment of mobile apps and websites that ranged from custom build to wordpress websites.",
                    "Lead a team of developers and designers in the planning and development of the projects",
                    "Weekly communication with clients, managed the git repositories, and sent a detailed weekly report to clients for project progress.",
                    "Used popular technologies such Python, Django, Reactjs, Postgres, Redux, React Native, Swift adn more.",
                    "Provided help in sales and consultation meetings with potential clients as well as management meetings for company direction.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
