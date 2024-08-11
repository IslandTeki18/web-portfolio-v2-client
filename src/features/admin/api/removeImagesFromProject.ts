import axios from "axios";

export function removeImagesFromProject(projectId: string) {
  return axios.delete(`/api/projects/${projectId}/image`);
}
