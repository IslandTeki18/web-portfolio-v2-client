import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  createNewProject,
  deleteProject,
  listProjects,
} from "../actions/projectActions";
import { PROJECT_CREATE_RESET } from "../constants/projectConstants";
import moment from "moment";

const AdminProjectsListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;

  const projectDelete = useSelector((state) => state.projectDelete);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = projectDelete;

  const projectCreate = useSelector((state) => state.projectCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    project: createdProject,
  } = projectCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PROJECT_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push("/admin/login");
    }

    if (successCreate) {
      history.push(`/admin/project/${createdProject._id}/edit`);
    } else {
      dispatch(listProjects());
    }
  }, [
    dispatch,
    userInfo,
    successCreate,
    history,
    createdProject,
    deleteSuccess,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you delete this project?")) {
      dispatch(deleteProject(id));
    }
  };

  const createProjectHandler = (e) => {
    dispatch(createNewProject());
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 my-4">
          <div className="col">
            <h4>Project List</h4>
          </div>
          <div className="col text-right mb-1">
            <button className="btn btn-primary" onClick={createProjectHandler}>
              <i className="fas fa-plus" style={{ fontSize: "13px" }}></i> Add
              Project
            </button>
          </div>
          {deleteLoading && <Loader />}
          {deleteError && <Message variant="danger">{deleteError}</Message>}
          {loadingCreate && <Loader />}
          {errorCreate && <Message variant="danger">{errorCreate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div className="table-responsive">
              <table className="table table-sm table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">Last Updated</th>
                    <th scope="col">Created</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {projects
                    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                    .map((project) => (
                      <tr key={project._id}>
                        <th>{project._id.substring(18)}</th>
                        <td>{project.title}</td>
                        <td>{project.status}</td>
                        <td>{moment(project.updatedAt).calendar()}</td>
                        <td>{moment(project.createdAt).calendar()}</td>
                        <td>
                          <Link to={`/admin/project/${project._id}/edit`}>
                            <button className="btn btn-outline-info btn-sm">
                              <i
                                className="far fa-edit"
                                style={{ fontSize: "19px" }}
                              ></i>
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => deleteHandler(project._id)}
                          >
                            <i
                              className="far fa-trash-alt"
                              style={{ fontSize: "20px" }}
                            ></i>
                          </button>
                        </td>
                        <td>
                          <Link to={`/project/${project._id}`}>
                            <button className="btn btn-success btn-sm">
                              View Details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProjectsListScreen;
