import { API_URL } from "@/shared/utils/constants";
import { Project } from "@/shared/utils/types";
import axios from "axios";

interface ProjectDTO {
  name: string;
}

interface MultipleProjectResponse {
  projects: Project[];
}

interface SingleProjectResponse {
  project: Project;
}

export const getAllProjects = async (): Promise<Project[]> => {
  const res = await axios.get<MultipleProjectResponse>(`${API_URL}/projects`, {
    withCredentials: true,
  });

  return res.data.projects;
};

export const getCurrentProject = async ({
  id,
}: {
  id: string;
}): Promise<Project> => {
  const res = await axios.get<SingleProjectResponse>(`${API_URL}/projects`, {
    params: { id },
    withCredentials: true,
  });

  return res.data.project;
};

export const createProject = async (project: {
  project: ProjectDTO;
}): Promise<Project> => {
  const res = await axios.post<SingleProjectResponse>(
    `${API_URL}/projects`,
    project,
    {
      withCredentials: true,
    },
  );

  return res.data.project;
};
