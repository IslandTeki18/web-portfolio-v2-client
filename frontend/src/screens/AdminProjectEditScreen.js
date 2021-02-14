import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProjectDetails, updateProject } from "../actions/projectActions";
import { PROJECT_UPDATE_RESET } from "../constants/projectConstants";

const AdminProjectEditScreen = ({ match, history }) => {
  const projectId = match.params.id;

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [img, setImg] = useState("");
  const [trelloUrl, setTrelloUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [frontendStack, setFrontendStack] = useState([""]);
  const [backendStack, setBackendStack] = useState([""]);
  const [databaseStack, setDatabaseStack] = useState([""]);
  const [uploading, setUploading] = useState(false);
  const [show, setShow] = useState(false);
  // New features
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  const projectUpdate = useSelector((state) => state.projectUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = projectUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROJECT_UPDATE_RESET });
      history.push("/admin/viewprojects");
    } else {
      if (!project.title || project._id !== projectId) {
        dispatch(listProjectDetails(projectId));
      } else {
        setTitle(project.title);
        setShortDescription(project.shortDescription);
        setLongDescription(project.longDescription);
        setImg(project.img);
        setTrelloUrl(project.trelloUrl);
        setGithubUrl(project.githubUrl);
        setProjectUrl(project.projectUrl);
        setFrontendStack(project.frontendStack);
        setBackendStack(project.backendStack);
        setDatabaseStack(project.databaseStack);
        setStatus(project.status);
      }
    }
    // show the message, after 5 seconds remove the message
    if (error || errorUpdate) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [
    dispatch,
    history,
    successUpdate,
    project,
    projectId,
    error,
    errorUpdate,
  ]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImg(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProject({
        _id: projectId,
        title,
        shortDescription,
        longDescription,
        img,
        trelloUrl,
        githubUrl,
        projectUrl,
        frontendStack,
        backendStack,
        databaseStack,
        status,
      })
    );
  };

  return (
    <>
      <Link className="btn btn-light m-3" to="/admin/viewprojects">
        Go Back
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 my-4">
            <h2>Project Edit</h2>
            {loadingUpdate && <Loader />}
            {errorUpdate && (
              <Message variant="danger" show={show}>
                {errorUpdate}
              </Message>
            )}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger" show={show}>
                {error}
              </Message>
            ) : (
              <form onSubmit={submitHandler}>
                <div className="form-row mb-2">
                  <div className="col">
                    <label htmlFor="titleInput">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row mb-2">
                  <div className="col">
                    <label htmlFor="shortDescInput">Short Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Short Description"
                      rows="4"
                      value={shortDescription}
                      onChange={(e) => setShortDescription(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="longDescInput">Long Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Long Description"
                      rows="4"
                      value={longDescription}
                      onChange={(e) => setLongDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row mb-2">
                  <div className="col">
                    <label htmlFor="ImageInput">Choose Image</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Trello URL"
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                    />
                    <input
                      type="file"
                      className="form-control"
                      placeholder="File Browser"
                      onChange={uploadFileHandler}
                    />
                  </div>
                  {uploading && <Loader />}
                  <div className="col">
                    <label htmlFor="trelloInput">Trello URL</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Trello URL"
                      value={trelloUrl}
                      onChange={(e) => setTrelloUrl(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row mb-2">
                  <div className="col">
                    <label htmlFor="githubInput">Github URL</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Github URL"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="projectInput">Project URL</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Project URL"
                      value={projectUrl}
                      onChange={(e) => setProjectUrl(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="frontendInput">Frontend Stack</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Separate with comma and space..."
                    value={frontendStack}
                    onChange={(e) =>
                      setFrontendStack(e.target.value.split(","))
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="backendInput">Backend Stack</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Separate with comma and space..."
                    value={backendStack}
                    onChange={(e) => setBackendStack(e.target.value.split(","))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="databaseInput">Database Stack</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Separate with comma and space..."
                    value={databaseStack}
                    onChange={(e) =>
                      setDatabaseStack(e.target.value.split(","))
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="statusInput">Project Status</label>
                  <select
                    className="custom-select"
                    id="statusInputGroup"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Choose...">Choose...</option>
                    <option value="Live">Live</option>
                    <option value="Not Live">Not Live</option>
                    <option value="Under Construction">
                      Under Construction
                    </option>
                    <option value="Remodeling">Remodeling</option>
                  </select>
                </div>
                <button className="btn btn-block btn-primary" type="submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProjectEditScreen;
