import { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import HomeSkills from "../components/HomeSkills";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProjects } from "../actions/projectActions";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const projectList = useSelector((state) => state.projectList);
    const { loading, error, projects } = projectList;

    useEffect(() => {
        window.scrollTo(0, 0, "smooth");
        dispatch(listProjects());
    }, [dispatch]);

    function renderProjects() {
        return projects
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((project) => (
                <div className="col-md-6 mb-5" key={project._id}>
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
                                Project Details
                            </Link>
                        </div>
                    </div>
                </div>
            ));
    }
    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant="danger" isDismissible>
            {error}
        </Message>
    ) : (
        <>
            <HomeHeader />
            <section id="project-list-section">
                <div className="container">
                    <div className="col-md-12">
                        <h2 className="animate__animated animate__fadeInDown text-white">
                            <u>Recent Projects</u>
                        </h2>
                    </div>
                    <div className="row">{renderProjects()}</div>
                </div>
            </section>
            <section className="bg-dark py-5 skills-section">
                <HomeSkills />
            </section>
        </>
    );
};

export default HomeScreen;
