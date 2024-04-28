import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : process.env.REACT_APP_SERVER_URL;

export async function addProject() {
  const userToken = localStorage.getItem("authToken");
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    await axios.post(`${url}`, {}, config);
    return;
  } catch (error) {
    console.error(`Error creating new project: ${error}`);
    return;
  }
}
