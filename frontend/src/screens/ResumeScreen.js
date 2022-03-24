import React from "react";

const ResumeScreen = () => {
  return (
    <section className="resume py-2">
      <div className="container text-white">
        <div className="section-title">
          <h2 className="text-white">Resume</h2>
          <p>
            I build beautiful custom websites using modern technology such as
            React, Nodejs, Express, and MongoDB. I am full stack web developer
            living the Utah area.
          </p>
          <a className="btn btn-primary" href="./images/Resume.pdf" download>
            Download Resume PDF
          </a>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Landon McKell</h4>
              <p>
                <em>
                  Self taught and driven Full Stack Developer with 2+ years of
                  experience developing web applications in the MERN stack.
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
              <h4>Dev Mountain iOS Immersive Bootcamp</h4>
              <h5 className="text-white">May 2018 - Aug 2018</h5>
              <p>
                <em>Salt Lake City, UT</em>
              </p>
              <p>
                Over a course of 13 weeks, I was taught about iOS app
                development. We learned major concepts of app development such
                as architecture, data, sumitting apps to the Apple App Store,
                app design, how to navigate around xcode, the Apple programming
                language Swift, and most importantly debugging.
              </p>
            </div>
            <div className="resume-item">
              <h4>CS Student of Utah Valley University</h4>
              <h5 className="text-white">2016 - 2017</h5>
              <p>
                <em>Utah Valley University, Orem, UT</em>
              </p>
              <p>
                Spent two years in the CS Program of Utah Valley University. Had
                great mentors and teachers that taught me the basic concepts of
                programming such as conditionals, variables, functions, classes
                and much more.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Red Sky Technologies</h4>
              <h5 className="text-white">Mar 2021 - Present</h5>
              <p>
                <em>Spanish Fork, UT</em>
              </p>
              <ul>
                <li>
                  Develop and maintain the new direction of the elearning
                  project. Provide test cases for our QA team and implement
                  design changes and layouts.
                </li>
                <li>
                  Develop Microsoft Office product simulations using Unity.
                  Build out educational quiz and test questions for students and
                  users of the simulations.
                </li>
                <li>
                  Develop these features and products using popular full stack
                  technologys such as Reactjs, Nodejs, ASP.net, .Net core and
                  more.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Gmetrix LLC</h4>
              <h5 className="text-white">Nov 2019 - Mar 2021</h5>
              <p>
                <em>Lindon, UT</em>
              </p>
              <ul>
                <li>
                  Develop and maintain the new direction of the elearning
                  project. Provide test cases for our QA team and implement
                  design changes and layouts.
                </li>
                <li>
                  Develop Microsoft Office product simulations using Unity.
                  Build out educational quiz and test questions for students and
                  users of the simulations.
                </li>
                <li>
                  Develop these features and products using popular full stack
                  technologys such as Reactjs, Nodejs, ASP.net, .Net core and
                  more.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Bright Bridge Web LLC</h4>
              <h5 className="text-white">Oct 2018 - Nov 2019</h5>
              <p>
                <em>Provo, UT</em>
              </p>
              <ul>
                <li>
                  Was lead developer in design, development, and deployment of
                  mobile apps and websites that ranged from custom build to
                  wordpress websites.
                </li>
                <li>
                  Lead a team of developers and designers in the planning and
                  development of the projects
                </li>
                <li>
                  Weekly communication with clients, managed the git
                  repositories, and sent a detailed weekly report to clients for
                  project progress.
                </li>
                <li>
                  Used popular technologies such Python, Django, Reactjs,
                  Postgres, Redux, React Native, Swift adn more.
                </li>
                <li>
                  Provided help in sales and consultation meetings with
                  potential clients as well as management meetings for company
                  direction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeScreen;
