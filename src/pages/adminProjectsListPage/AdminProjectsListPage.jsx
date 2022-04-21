import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import {
  createNewProject,
  deleteProject,
  listProjects,
} from "../../redux/actions/project.actions";
import { PROJECT_CREATE_RESET } from "../../redux/constants/projectConstants";
import { useGetProjects } from "../../customHooks/useGetProjects";

const AdminProjectsListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, projects } = useGetProjects();

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
    if (!userInfo.isAdmin) navigate("/admin/login");

    if (successCreate) {
      navigate(`/admin/project/${createdProject._id}/edit`);
    } else {
      dispatch(listProjects());
    }
  }, [
    dispatch,
    userInfo,
    successCreate,
    navigate,
    createdProject,
    deleteSuccess,
    deleteError,
    error,
    errorCreate,
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
    <div className="dkAdminProjectListPage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 my-4">
            <div className="col">
              <h4 className="text-white">Project List</h4>
            </div>
            <div className="col text-right mb-1">
              <button
                className="btn btn-primary"
                onClick={createProjectHandler}
              >
                <i className="fas fa-plus" style={{ fontSize: "13px" }}></i> Add
                Project
              </button>
            </div>
            {deleteLoading && <Loader />}
            {deleteError && (
              <Message variant="danger" isDismissible>
                {deleteError}
              </Message>
            )}
            {loadingCreate && <Loader />}
            {errorCreate && (
              <Message variant="danger" isDismissible>
                {errorCreate}
              </Message>
            )}
            {loading && <Loader />}
            {error && <Message variant="danger" isDismissible>
                {error}
              </Message> }
              <div className="table-responsive">
                <table className="table table-sm table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Title</th>
                      <th scope="col">Status</th>
                      <th scope="col">Updated</th>
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
                          <td>
                            {new Intl.DateTimeFormat("en-US", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            }).format(new Date(project.updatedAt.toString()))}
                          </td>
                          <td>
                            {new Intl.DateTimeFormat("en-US", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            }).format(new Date(project.createdAt.toString()))}
                          </td>
                          <td>
                            <Link to={`/admin/project/${project._id}/edit`}>
                              <button className="btn btn-outline-info btn-sm">
                                <i
                                  className="far fa-edit"
                                  style={{
                                    fontSize: "19px",
                                  }}
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
                                style={{
                                  fontSize: "20px",
                                }}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectsListPage;
