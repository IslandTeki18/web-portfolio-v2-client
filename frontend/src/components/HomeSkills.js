import React from "react";

const HomeSkills = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-12 mb-2">
          <h2>Technology Stacks</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3 mb-md-0" data-aos="slide-up">
          <div className="card h-100">
            <div className="card-header text-center">
              <i
                className="fas fa-pencil-ruler"
                style={{ fontSize: "30px" }}
              ></i>
              <h4 className="text-uppercase mb-0">Frontend</h4>
              <hr className="my-4 bg-info" />
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <i className="fab fa-react" style={{ fontSize: "28px" }}></i>
                <h5>Reactjs</h5>
              </li>
              <li className="list-group-item">
                <i className="fas fa-sim-card" style={{ fontSize: "28px" }}></i>
                <h5>Redux</h5>
              </li>
              <li className="list-group-item">
                <i
                  className="fab fa-bootstrap"
                  style={{ fontSize: "28px" }}
                ></i>
                <h5>Bootstrap 4.5</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0" data-aos="slide-up">
          <div className="card h-100">
            <div className="card-header text-center">
              <i className="fas fa-tools" style={{ fontSize: "30px" }}></i>
              <h4 className="text-uppercase mb-0">Backend</h4>
              <hr className="my-4 bg-info" />
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <i className="fab fa-node-js" style={{ fontSize: "28px" }}></i>
                <h5>Nodejs</h5>
              </li>
              <li className="list-group-item">
                <i className="fas fa-code" style={{ fontSize: "28px" }}></i>
                <h5>Expressjs</h5>
              </li>
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0" data-aos="slide-up">
          <div className="card h-100">
            <div className="card-header text-center">
              <i className="fas fa-server" style={{ fontSize: "30px" }}></i>
              <h4 className="text-uppercase mb-0">Database</h4>
              <hr className="my-4 bg-info" />
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">
                <i className="fas fa-database" style={{ fontSize: "28px" }}></i>
                <h5>MongoDB</h5>
              </li>
              <li className="list-group-item">
                <i className="fas fa-code" style={{ fontSize: "28px" }}></i>
                <h5>Mongoosejs</h5>
              </li>
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSkills;
