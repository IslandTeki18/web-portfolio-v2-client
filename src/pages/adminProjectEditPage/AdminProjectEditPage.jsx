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
} from "../../redux/actions/project.actions";
import { PROJECT_UPDATE_RESET } from "../../redux/constants/projectConstants";
import { upload } from "../../services/upload.services";
import LabelInput from "../../components/molecules/labelInput/LabelInput";
import Input from "../../components/atoms/input/Input";

const AdminProjectEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, project } = useGetProjectDetails(id);
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
  });
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [progressInfo, setProgressInfo] = useState({ val: [] });
  const progressInfosRef = useRef(null);
  const [message, setMessage] = useState("");

  const projectUpdate = useSelector((state) => state.projectUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = projectUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROJECT_UPDATE_RESET });
      navigate("/admin/viewprojects");
    } else {
      if (!project || project._id !== id) {
        dispatch(listProjectDetails(id));
      } else {
        setProjectObj(project);
      }
    }
  }, [dispatch, navigate, successUpdate, project, id, error, errorUpdate]);

  function selectFiles(event) {
    setSelectedFiles(event.target.files);
    setProgressInfo({ val: {} });
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

  function uploadFiles() {
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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(projectObj);
    dispatch(
      updateProject({
        _id: id,
        ...projectObj,
      })
    );
  };

  return (
    <div className="dkAdminProjectEditPage bg-secondaryMain">
      <Link className="btn btn-light m-3" to="/admin/viewprojects">
        Go Back
      </Link>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 py-3 color-whiteMain">
            <h2 className="pb-3">Project Edit</h2>
            {loadingUpdate && <Loader />}
            {errorUpdate && (
              <Message variant="danger" isDismissible>
                {errorUpdate}
              </Message>
            )}
            {loading && <Loader />}
            {error && (
              <Message variant="danger" isDismissible>
                {error}
              </Message>
            )}
            <form onSubmit={submitHandler}>
              <div className="row mb-2">
                <div className="col">
                  <LabelInput
                    type="text"
                    inputClassName="form-control"
                    placeholder="Project Title..."
                    label="Project Title"
                    htmlFor="projectTitle"
                    value={projectObj.title}
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
                    className="form-control"
                    placeholder="Description"
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
                      onChange={(e) => selectFiles(e)}
                      multiple
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    disabled={!selectFiles}
                    onClick={() => uploadFiles()}
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
              <div className="row">
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectEditPage;
