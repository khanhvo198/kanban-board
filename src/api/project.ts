import { API_URL } from "@/shared/utils/constants";
import { Project } from "@/shared/utils/types";
import axios from "axios";

interface ProjectDTO {
  name: string;
}

export const getAllProjects = async (): Promise<Project[]> => {
  const res = await axios.get(`${API_URL}/projects`, {
    withCredentials: true,
  });

  return res.data.projects;
};

export const getCurrentProject = async ({
  id,
}: {
  id: string;
}): Promise<Project> => {
  const res = await axios.get(`${API_URL}/projects`, {
    params: { id },
    withCredentials: true,
  });

  return res.data.project;
};

export const createProject = async (project: {
  project: ProjectDTO;
}): Promise<Project> => {
  const res = await axios.post(`${API_URL}/projects`, project, {
    withCredentials: true,
  });

  return res.data.project;
};
