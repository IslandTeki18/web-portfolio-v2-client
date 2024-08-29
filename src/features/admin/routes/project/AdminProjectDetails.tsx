import * as React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Project } from "~src/types/projects";
import {
  DeleteProjectModal,
  DevFeedbackForm,
  PageWrapper,
  RelatedProjectForm,
  UpdateProjectModal,
} from "../../components";
import { Button, WheelSpinner } from "~src/components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatNumberWithCommas } from "~src/utils";
import axios from "axios";
import { API_URL, NODE_ENV, DEV_API_URL } from "~src/config";
import { useAuthContext } from "~src/hooks";

// TODO: Implement Edit and Delete functionality for the Project itself
// TODO: Implement Developer Feedback and Related Projects Edit functionality

const URL = NODE_ENV === "development" ? DEV_API_URL : API_URL;

export const AdminProjectDetails = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { projectId } = useParams();

  const [isUpdateProjectModalOpen, setIsUpdateProjectModalOpen] =
    useState(false);
  const [isDeleteProjectModalOpen, setIsDeleteProjectModalOpen] =
    useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProject();
  }, []);

  async function getProject() {
    try {
      const res = await axios.get(`${URL}/projects/${projectId}`);
      setProject(res.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  async function sendDeveloperFeedback(data: {
    title: string;
    description: string;
  }) {
    try {
      await axios.post(`${URL}/projects/${projectId}/feedback`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      getProject();
    } catch (error) {
      setError(error);
    }
  }

  async function deleteProject() {
    try {
      await axios.delete(`${URL}/projects/${projectId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      navigate("/admin/projects");
    } catch (error) {
      setError(error);
    }
  }

  async function deleteDeveloperFeedback(feedbackId: string) {
    try {
      await axios.delete(`${URL}/projects/${projectId}/${feedbackId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      getProject();
    } catch (error) {
      setError(error);
    }
  }

  async function sendRelatedProject(data: {
    title: string;
    link: string;
    projectType: string;
  }) {
    try {
      await axios.post(`${URL}/projects/${projectId}/related`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      getProject();
    } catch (error) {
      setError(error);
    }
  }

  async function deleteRelatedProject(relProject: string) {
    try {
      await axios.delete(`${URL}/projects/${projectId}/${relProject}/remove`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      getProject();
    } catch (error) {
      setError(error);
    }
  }

  if (loading) {
    return (
      <div className="h-screen w-full bg-gray-1000">
        <Navbar />
        <div className="flex justify-center pt-8">
          <WheelSpinner size="lg" color="red" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full bg-gray-1000">
        <Navbar />
        <div className="flex justify-center pt-8">
          <p className="text-white">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-auto w-full bg-gray-1000">
      <Navbar />
      <PageWrapper className="flex flex-col gap-4 max-w-3xl mx-auto">
        <div className="flex items-center gap-4">
          <Button
            label="Go Back"
            className="md:w-1/4 w-1/2"
            onClick={() => navigate("/admin/projects")}
          />
        </div>
        <h2 className="text-4xl text-gray-100">
          Project - {project?.title || "No Title"}
        </h2>
        <hr />
        <h3 className="text-xl font-medium text-gray-100">
          General Information
        </h3>
        <div className="flex justify-between items-start">
          <p className="text-gray-300 w-1/3">Description: </p>
          <p className="text-gray-100 text-right w-2/3">
            {project?.description || "No Description"}
          </p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Project Type: </p>
          <p className="text-gray-100">{project?.projectType || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Application Type: </p>
          <p className="text-gray-100">{project?.applicationType || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Status: </p>
          <p className="text-gray-100">{project?.status || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Technologies: </p>
          <p className="text-gray-100">{project?.techStack || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Is Public: </p>
          <p className="text-gray-100">{project?.isPublic ? "Yes" : "No"}</p>
        </div>
        <hr />
        <h3 className="text-xl font-medium text-gray-100">Project URLs</h3>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Trello: </p>
          <p className="text-gray-100">{project?.trelloUrl || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Project: </p>
          <p className="text-gray-100">{project?.projectUrl || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Github: </p>
          <p className="text-gray-100">{project?.githubUrl || "N / A"}</p>
        </div>
        <hr />
        <h3 className="text-xl font-medium text-gray-100">Other Information</h3>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Tags: </p>
          <p className="text-gray-100">{project?.tags || "No Tags"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Budget: </p>
          <p className="text-gray-100">
            ${formatNumberWithCommas(project?.budget || "0") || "N / A"}
          </p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Designer: </p>
          <p className="text-gray-100">{project?.designer || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Client: </p>
          <p className="text-gray-100">{project?.client || "N / A"}</p>
        </div>

        <hr />
        <h3 className="text-xl font-medium text-gray-100">Images</h3>
        {project?.images ? (
          project?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project Image ${index}`}
              className="w-full"
            />
          ))
        ) : (
          <p className="text-gray-300">No Images</p>
        )}
        <hr className="my-6" />
        <h3 className="text-xl font-medium text-gray-100">
          Developer Feedback
        </h3>
        <DevFeedbackForm
          callback={(data) => {
            sendDeveloperFeedback(data);
          }}
        />
        {project?.developerFeedback.length !== 0 ? (
          <div className="flex flex-col gap-4">
            {project?.developerFeedback.map((feedback, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="text-gray-300 text-lg">Feedback {index + 1}</p>
                  <p className="text-gray-100">
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(feedback.createdAt as Date))}
                  </p>
                </div>
                <hr className="border-gray-400" />

                <div className="flex justify-between items-center">
                  <p className="text-gray-300">Title</p>
                  <p className="text-gray-100">{feedback.title}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-300 w-1/3">Description</p>
                  <p className="text-gray-100 w-2/3 text-right">
                    {feedback.description}
                  </p>
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <Button label="Edit" variant="secondary" labelColor="light" />
                  <Button
                    label="Delete"
                    variant="danger"
                    labelColor="light"
                    onClick={() => deleteDeveloperFeedback(feedback._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No Developer Feedback</p>
        )}
        <hr className="my-6" />
        <h3 className="text-xl font-medium text-gray-100">Related Projects</h3>
        <RelatedProjectForm
          callback={(data) => {
            sendRelatedProject(data);
          }}
        />
        {project?.relatedProjects.length !== 0 ? (
          <div className="flex flex-col gap-4">
            {project?.relatedProjects.map((project, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="text-gray-300 text-lg">
                    Related Project {index + 1}
                  </p>
                  <p className="text-gray-100">
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(project.createdAt as Date))}
                  </p>
                </div>
                <hr className="border-gray-400" />

                <div className="flex justify-between items-center">
                  <p className="text-gray-300">Title</p>
                  <p className="text-gray-100">{project.title}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-300">Project Type</p>
                  <p className="text-gray-100">{project.projectType}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-300">Link</p>
                  <Link
                    to={project.link}
                    className="text-gray-100 hover:underline"
                  >
                    {project.link}
                  </Link>
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <Button label="Edit" variant="secondary" labelColor="light" />
                  <Button
                    label="Delete"
                    variant="danger"
                    labelColor="light"
                    onClick={() => deleteRelatedProject(project._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No Related Projects</p>
        )}
        <hr className="mb-4" />
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            variant="danger"
            labelColor="light"
            label="Delete Project"
            className="w-full md:w-1/3"
            onClick={() => setIsDeleteProjectModalOpen(true)}
          />
          <Button
            variant="secondary"
            labelColor="light"
            label="Edit Project"
            className="w-full md:w-1/3"
            onClick={() => setIsUpdateProjectModalOpen(true)}
          />
          <Button
            variant="dark"
            label="View Project"
            className="w-full md:w-1/3"
            onClick={() => navigate(`/project/${projectId}`)}
          />
        </div>
      </PageWrapper>
      <UpdateProjectModal
        callback={() => {
          getProject();
        }}
        isOpen={isUpdateProjectModalOpen}
        onClose={() => setIsUpdateProjectModalOpen(false)}
        project={project!}
      />
      <DeleteProjectModal
        isOpen={isDeleteProjectModalOpen}
        onClose={() => setIsDeleteProjectModalOpen(false)}
        onDeleteClick={() => deleteProject()}
      />
    </div>
  );
};
