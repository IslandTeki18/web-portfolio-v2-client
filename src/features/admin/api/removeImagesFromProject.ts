import { axios } from "~src/libs";

export function removeImagesFromProject(projectId: string) {
  return axios.delete(`/api/projects/${projectId}/image`);
}
