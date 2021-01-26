import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";

//@desc     Get all project
//@route    GET /api/projects
//@access   Public
const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});
  res.json(projects);
});

//@desc     Get single project by id
//@route    GET /api/projects/:id
//@access   Public
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    return res.json(project);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

//@desc     Create New Project
//@route    POST /api/projects
//@access   Private/Admin
const postNewProject = asyncHandler(async (req, res) => {
  const project = new Project({
    user: req.user._id,
    title: "Sample Title",
    shortDescription: "Sample Short Description",
    longDescription: "Sample Long Description",
    img: "http://placehold.it/700x400",
    trelloUrl: "",
    githubUrl: "",
    projectUrl: "",
    frontendStack: ["Sample Stack 1", "Sample Stack 2"],
    backendStack: ["Sample Stack 1", "Sample Stack 2"],
    databaseStack: ["Sample Stack 1", "Sample Stack 2"],
    status: "Not Live",
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

//@desc     Update a Project
//@route    PUT /api/projects/:id
//@access   Private/Admin
const putProjectById = asyncHandler(async (req, res) => {
  const {
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
  } = req.body;

  const project = await Project.findById(req.params.id);

  if (project) {
    project.title = title;
    project.shortDescription = shortDescription;
    project.longDescription = longDescription;
    project.img = img;
    project.trelloUrl = trelloUrl;
    project.githubUrl = githubUrl;
    project.projectUrl = projectUrl;
    project.frontendStack = frontendStack;
    project.backendStack = backendStack;
    project.databaseStack = databaseStack;
    project.status = status;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

//@desc     Delete a Project
//@route    DELETE /api/projects/:id
//@access   Private/Admin
const deleteProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    await project.remove();
    res.json({ message: "Project Removed" });
  } else {
    res.json(404);
    throw new Error("Project not found");
  }
});

export {
  getAllProjects,
  postNewProject,
  putProjectById,
  getProjectById,
  deleteProjectById,
};
