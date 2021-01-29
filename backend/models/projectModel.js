import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    img: {
      type: String
    },
    trelloUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
    projectUrl: {
      type: String,
    },
    frontendStack: {
      type: [String],
    },
    backendStack: {
      type: [String],
    },
    databaseStack: {
      type: [String],
    },
    status: {
      type: String,
      default: "Under Construction",
      enum: ["Live", "Under Construction", "Not Live", "Remodeling"],
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
