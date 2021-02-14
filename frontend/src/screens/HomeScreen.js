import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import HomeSkills from "../components/HomeSkills";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProjects } from "../actions/projectActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProjects());
    // show the message, after 5 seconds remove the message
    if (error) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" show={show}>
          {error}
        </Message>
      ) : (
        <>
          <HomeHeader />
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="animate__animated animate__fadeInDown">
                    Recent Projects
                  </h2>
                </div>
              </div>
              <div className="row">
                {projects
                  .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                  .map((project) => (
                    <div className="col-md-4 mb-5" key={project._id}>
                      <div className="card home-card-ht">
                        <img
                          className="card-img-top img-fluid"
                          src={project.img}
                          alt={project.name}
                        />
                        <div className="card-body">
                          <h4 className="card-title">{project.title}</h4>
                          <p className="card-text">
                            {project.shortDescription}
                          </p>
                        </div>
                        <div className="card-footer">
                          <Link
                            to={`/project/${project._id}`}
                            className="btn btn-primary"
                          >
                            Check out project
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          <section className="bg-info py-5 skills-section">
            <HomeSkills />
          </section>
        </>
      )}
    </>
  );
};

export default HomeScreen;
