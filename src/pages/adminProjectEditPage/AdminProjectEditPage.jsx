import "./AdminProjectEditPage.scss";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../components/atoms/loader/Loader";
import Message from "../../components/atoms/message/Message";
import { useGetProjectDetails } from "../../customHooks/useGetProjectDetails";
import {
  listProjectDetails,
  updateProject,
  createDeveloperFeedback,
  deleteDeveloperFeedback,
} from "../../redux/actions/project.actions";
import { PROJECT_UPDATE_RESET } from "../../redux/constants/projectConstants";
import { upload } from "../../services/upload.services";
import LabelInput from "../../components/molecules/labelInput/LabelInput";
import Input from "../../components/atoms/input/Input";
import Card from "../../components/atoms/card/Card";
import dateFormatter from "../../utils/dateFormatter";

const AdminProjectEditPage = () => {
  const { id: projectId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, project } = useGetProjectDetails(projectId);
  const [projectObj, setProjectObj] = useState({
    title: project.title || "",
    description: project.description || "",
    type: project.type || "",
    images: project.images || [],
    githubUrl: project.githubUrl || "",
    projectUrl: project.projectUrl || "",
    techStack: project.techStack || [],
    status: project.status || "",
    client: project.client || "",
    designType: project.designType || "",
    designer: project.designer || "",
    developerFeedback: project.developerFeedback || [],
    relatedProjects: project.relatedProjects || [],
  });
  const [feedbackObj, setFeedbackObj] = useState({
    title: "",
    description: "",
  });
  const [relatedProjectObj, setRelatedProjectObj] = useState({
    title: "",
    projectType: "",
    link: "",
  });
  const [selectedFiles, setSelectedFiles] = useState();
  const [progressInfo, setProgressInfo] = useState({ val: [] });
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const progressInfosRef = useRef(null);

  const projectUpdate = useSelector((state) => state.projectUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = projectUpdate;

  const projectDeleteFeedback = useSelector(
    (state) => state.projectDeleteFeedback
  );
  const {
    loading: deleteFeedbackLoading,
    error: deleteFeedbackError,
    success: deleteFeedbackSuccess,
  } = projectDeleteFeedback;

  const projectFeedbackCreate = useSelector(
    (state) => state.projectFeedbackCreate
  );
  const {
    loading: createFeedbackLoading,
    error: createFeedbackError,
    success: createFeedbackSuccess,
  } = projectFeedbackCreate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROJECT_UPDATE_RESET });
      navigate("/admin/viewprojects");
    } else {
      if (!project || project._id !== projectId) {
        dispatch(listProjectDetails(projectId));
      } else {
        setProjectObj(project);
      }
    }
  }, [
    dispatch,
    navigate,
    successUpdate,
    project,
    projectId,
    error,
    errorUpdate,
  ]);

  useEffect(() => {
    if (createFeedbackSuccess) {
      setFeedbackMessage("Feedback Added!");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 5000);
    }
    if (createFeedbackError) {
      setFeedbackMessage(createFeedbackError);
      setTimeout(() => {
        setFeedbackMessage("");
      }, 10000);
    }
  }, [createFeedbackSuccess, createFeedbackError]);

  useEffect(() => {
    if (deleteFeedbackSuccess) {
      setFeedbackMessage("Feedback removed.");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 5000);
    }
    if (deleteFeedbackError) {
      setFeedbackMessage(deleteFeedbackError);
      setTimeout(() => {
        setFeedbackMessage("");
      }, 10000);
    }
  }, [deleteFeedbackSuccess, deleteFeedbackError]);

  function selectImageFiles(event) {
    setSelectedFiles(event.target.files);
    setProgressInfo({ val: {} });
  }

  function uploadFilesToServer() {
    const files = Array.from(selectedFiles);
    let progressInfoBars = files.map((file) => ({
      percentage: 0,
      fileName: file.name,
    }));
    progressInfosRef.current = {
      val: progressInfoBars,
    };
    const uploadPromises = files.map((file, idx) => uploadImages(idx, file));
    Promise.all(uploadPromises).catch((err) => console.error(err));
  }

  async function uploadImages(idx, file) {
    let progressInfoBars = [...progressInfosRef.current.val];
    return await upload(file, (event) => {
      progressInfoBars[idx].percentage = Math.round(
        (100 * event.loaded) / event.total
      );
      setProgressInfo({ val: progressInfoBars });
    })
      .then((res) => {
        setProjectObj((prevState) => {
          return {
            ...prevState,
            images: [...prevState.images, res.data],
          };
        });
      })
      .catch((err) => {
        progressInfoBars[idx].percentage = 0;
        setProgressInfo({ val: progressInfoBars });
        setMessage(
          `Error: ${err.message}; Could not upload the file: ${file.name}`
        );
      });
  }

  const saveChangesHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProject({
        _id: projectId,
        ...projectObj,
      })
    );
  };

  function createFeedbackHandler(e) {
    e.preventDefault();
    dispatch(createDeveloperFeedback(project._id, feedbackObj));
    setFeedbackObj({
      title: "",
      description: "",
    });
  }
  function removeFeedbackHandler(e, feedbackId) {
    e.preventDefault();
    dispatch(deleteDeveloperFeedback(projectObj._id, feedbackId));
  }

  return (
    <div className="dkAdminProjectEditPage bg-secondaryMain">
      <div className="container">
        <Link className="btn btn-light m-3" to="/admin/viewprojects">
          Go Back
        </Link>
        <div className="row justify-content-center">
          <div className="col-md-10 py-3 color-whiteMain">
            <h2 className="pb-3">Project Edit</h2>
            <h6>
              ID: <span className="fst-italic">{project._id}</span>
            </h6>
            {(loading || loadingUpdate) && <Loader />}
            {errorUpdate && (
              <Message variant="danger" isDismissible>
                {errorUpdate}
              </Message>
            )}
            {error && (
              <Message variant="danger" isDismissible>
                {error}
              </Message>
            )}
            <form onSubmit={saveChangesHandler} className="was-validated">
              <div className="row mb-2">
                <div className="col">
                  <LabelInput
                    type="text"
                    inputClassName="form-control"
                    placeholder="Project Title..."
                    label="Project Title"
                    htmlFor="projectTitle"
                    value={projectObj.title}
                    isRequired
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          title: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="col">
                  <LabelInput
                    type="text"
                    inputClassName="form-control"
                    placeholder="Project Type..."
                    label="Project Type"
                    htmlFor="projectType"
                    value={projectObj.type}
                    isRequired
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          type: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="descInput">Description</label>
                  <textarea
                    type="text"
                    className="form-control is-invalid"
                    placeholder="Description"
                    required
                    rows="4"
                    value={projectObj.description}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          description: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <LabelInput
                    type="text"
                    inputClassName="form-control"
                    placeholder="Design Type..."
                    label="Design Type"
                    htmlFor="designTypes"
                    value={projectObj.designType}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          designType: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="col">
                  <LabelInput
                    type="text"
                    inputClassName="form-control"
                    placeholder="Designer..."
                    label="Designer"
                    htmlFor="designer"
                    value={projectObj.designer}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          designer: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 content-layout">
                  <div className="file-browser-wrapper">
                    <label htmlFor="imageInput">Images</label>
                    <Input
                      id="imageInput"
                      name="project-image"
                      type="file"
                      className="form-control"
                      placeholder="File Browser"
                      onChange={(e) => selectImageFiles(e)}
                      multiple
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    disabled={!selectImageFiles}
                    onClick={() => uploadFilesToServer()}
                    type="button"
                  >
                    Upload
                  </button>
                </div>
                {message && (
                  <div className="col-12">
                    <Message variant="danger" isDismissible>
                      {message}
                    </Message>
                  </div>
                )}
                <div className="col-12">
                  {progressInfo &&
                    progressInfo.val.length > 0 &&
                    progressInfo.val.map((item, idx) => (
                      <div className="mb-2" key={idx}>
                        <span>{item.fileName}</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-info"
                            role="progressbar"
                            aria-valuenow={item.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: item.percentage + "%" }}
                          >
                            {item.percentage}%
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="col-12">
                  <textarea
                    name="project-image"
                    type="text"
                    className="form-control"
                    placeholder="Project images..."
                    rows={2}
                    value={projectObj.images}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          images: e.target.value,
                        };
                      })
                    }
                    multiple
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <LabelInput
                    type="text"
                    inputClassName="form-control"
                    placeholder="Github URL..."
                    label="Github URL"
                    htmlFor="githubUrl"
                    value={projectObj.githubUrl}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          githubUrl: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="col">
                  <LabelInput
                    type="text"
                    inputClassName="form-control"
                    placeholder="Project URL..."
                    label="Project URL"
                    htmlFor="projectUrl"
                    value={projectObj.projectUrl}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          projectUrl: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <LabelInput
                    type="text"
                    inputClassName="form-control"
                    placeholder="Separate with comma and space..."
                    label="Tech Stack"
                    htmlFor="techStack"
                    value={projectObj.techStack}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          techStack: e.target.value.split(","),
                        };
                      })
                    }
                  />
                </div>
                <div className="col">
                  <LabelInput
                    type="text"
                    inputClassName="form-control"
                    placeholder="Client..."
                    label="Client"
                    htmlFor="client"
                    value={projectObj.client}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          client: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="statusInput">Project Status</label>
                  <select
                    className="form-select mb-4"
                    id="statusInputGroup"
                    value={projectObj.status}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          status: e.target.value,
                        };
                      })
                    }
                  >
                    <option value="Live">Live</option>
                    <option value="Not Live">Not Live</option>
                    <option value="Under Construction">
                      Under Construction
                    </option>
                    <option value="Remodeling">Remodeling</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-block btn-primary" type="submit">
                Save Changes
              </button>
            </form>
            <hr />
            <div className="row mt-3">
              <p className="fs-5">Developer Feedback</p>
              <form onSubmit={createFeedbackHandler}>
                <div className="col-12">
                  <LabelInput
                    className="mb-2"
                    inputClassName="form-control"
                    placeholder="Feedback Title..."
                    label="Title"
                    htmlFor="feedback-title"
                    value={feedbackObj.title}
                    onChange={(event) =>
                      setFeedbackObj((prevState) => {
                        return {
                          ...prevState,
                          title: event.target.value,
                        };
                      })
                    }
                  />
                  <LabelInput
                    className="mb-2"
                    inputClassName="form-control"
                    placeholder="Feedback Description..."
                    label="Description"
                    htmlFor="feedback-description"
                    value={feedbackObj.description}
                    onChange={(event) =>
                      setFeedbackObj((prevState) => {
                        return {
                          ...prevState,
                          description: event.target.value,
                        };
                      })
                    }
                  />
                  <button
                    className="btn btn-success mb-3"
                    type="submit"
                    disabled={!feedbackObj.title || !feedbackObj.description}
                  >
                    Submit Feedback
                  </button>
                  <Card cardClassName="color-blackMain">
                    <div className="card-header text-center">
                      <div className="fs-5">Feedback & Updates</div>
                    </div>
                    <div className="card-body">
                      {(createFeedbackLoading || deleteFeedbackLoading) && (
                        <div className="text-center">
                          <Loader />
                        </div>
                      )}
                      {feedbackMessage && (
                        <Message
                          variant={
                            createFeedbackError || deleteFeedbackError
                              ? "danger"
                              : "success"
                          }
                        >
                          {feedbackMessage}
                        </Message>
                      )}
                      <ul>
                        {projectObj.developerFeedback &&
                          projectObj.developerFeedback.length !== 0 &&
                          projectObj.developerFeedback.map((feedback) => (
                            <li key={feedback._id} className="mb-3">
                              <div className="row">
                                <div className="col-10">
                                  <div className="feedback-title">
                                    {feedback.title}
                                  </div>
                                  <div className="feedback-date">
                                    {dateFormatter(feedback.createdAt)}
                                  </div>
                                  <div className="feedback-description">
                                    {feedback.description}
                                  </div>
                                </div>
                                <div className="col-2">
                                  <button
                                    className="btn btn-danger mb-2"
                                    onClick={(event) =>
                                      removeFeedbackHandler(event, feedback._id)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                              <hr />
                            </li>
                          ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </form>
            </div>
            <hr />
            <div className="row mt-3">
              <div className="col-12">
                <p className="fs-5">Related Projects</p>
                <LabelInput
                  label="Title"
                  htmlFor="relatedProject-title"
                  placeholder="Related Project Title..."
                  inputClassName="form-control"
                  value={relatedProjectObj.title}
                  onChange={(e) =>
                    setRelatedProjectObj((prevState) => {
                      return {
                        ...prevState,
                        title: e.target.value,
                      };
                    })
                  }
                />
                <LabelInput
                  label="Project Type"
                  htmlFor="relatedProject-projectType"
                  placeholder="Related Project Project Type..."
                  inputClassName="form-control"
                  value={relatedProjectObj.projectType}
                  onChange={(e) =>
                    setRelatedProjectObj((prevState) => {
                      return {
                        ...prevState,
                        projectType: e.target.value,
                      };
                    })
                  }
                />
                <LabelInput
                  label="Link"
                  htmlFor="relatedProject-link"
                  placeholder="Related Project Link..."
                  inputClassName="form-control"
                  value={relatedProjectObj.link}
                  onChange={(e) =>
                    setRelatedProjectObj((prevState) => {
                      return {
                        ...prevState,
                        link: e.target.value,
                      };
                    })
                  }
                />
                <button
                  className="btn btn-success mt-3"
                  disabled={
                    !relatedProjectObj.title ||
                    !relatedProjectObj.projectType ||
                    !relatedProjectObj.link
                  }
                >
                  Add Related Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectEditPage;
