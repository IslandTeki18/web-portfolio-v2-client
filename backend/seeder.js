import dotenv from "dotenv";
import projects from "./tempdata/projects.js";
import users from "./tempdata/users.js";
import Project from "./models/projectModel.js";
import User from "./models/userModel.js";
import Contact from "./models/contactModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Project.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProjects = projects.map((project) => {
      return { ...project, user: adminUser };
    });

    await Project.insertMany(sampleProjects);

    console.log("Data Import!");

    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Project.deleteMany();
    await User.deleteMany();
    await Contact.deleteMany();

    console.log("Data Destroyed!");

    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
