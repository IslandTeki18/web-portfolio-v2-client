import * as React from "react";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { Project } from "~src/types/projects";
import { PageWrapper } from "../../components";
import { Button } from "~src/components";
import { Link, useNavigate } from "react-router-dom";

export const AdminProjectDetails = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState({} as Project);
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
          <Button
            variant="secondary"
            labelColor="dark"
            label="Edit Project"
            className="md:w-1/4 w-1/2"
            onClick={() => alert("Edit Project")}
          />
        </div>
        <h2 className="text-4xl text-gray-100">
          Project - {project.title || "No Title"}
        </h2>
        <hr />
        <h3 className="text-xl font-medium text-gray-100">
          General Information
        </h3>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Description: </p>
          <p className="text-gray-100">
            {project.description || "No Description"}
          </p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Project Type: </p>
          <p className="text-gray-100">{project.projectType || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Application Type: </p>
          <p className="text-gray-100">{project.applicationType || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Status: </p>
          <p className="text-gray-100">{project.status || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Technologies: </p>
          <p className="text-gray-100">{project.techStack || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Is Public: </p>
          <p className="text-gray-100">{project.isPublic ? "Yes" : "No"}</p>
        </div>
        <hr />
        <h3 className="text-xl font-medium text-gray-100">Project URLs</h3>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Trello: </p>
          <p className="text-gray-100">{project.trelloUrl || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Project: </p>
          <p className="text-gray-100">{project.projectUrl || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Github: </p>
          <p className="text-gray-100">{project.githubUrl || "N / A"}</p>
        </div>
        <hr />
        <h3 className="text-xl font-medium text-gray-100">Other Information</h3>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Tags: </p>
          <p className="text-gray-100">{project.tags || "No Tags"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Budget: </p>
          <p className="text-gray-100">{project.budget || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Designer: </p>
          <p className="text-gray-100">{project.designer || "N / A"}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-gray-300">Client: </p>
          <p className="text-gray-100">{project.client || "N / A"}</p>
        </div>

        <hr />
        <h3 className="text-xl font-medium text-gray-100">Images</h3>
        {project.images ? (
          project.images?.map((image, index) => (
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
        <hr />
        <h3 className="text-xl font-medium text-gray-100">
          Developer Feedback
        </h3>
        {project.developerFeedback ? (
          <div className="flex flex-col gap-4">
            {project.developerFeedback.map((feedback, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="text-gray-300">Feedback {index + 1}</p>
                <p className="text-gray-100">{feedback.title}</p>
                <p className="text-gray-100">{feedback.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No Developer Feedback</p>
        )}
        <hr />
        <h3 className="text-xl font-medium text-gray-100">Related Projects</h3>
        {project.relatedProjects ? (
          <div className="flex flex-col gap-4">
            {project.relatedProjects.map((project, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="text-gray-300">Related Project {index + 1}</p>
                <p className="text-gray-100">{project.title}</p>
                <p className="text-gray-100">{project.projectType}</p>
                <Link to={project.link}>Link: {project.link}</Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No Related Projects</p>
        )}
      </PageWrapper>
    </div>
  );
};
