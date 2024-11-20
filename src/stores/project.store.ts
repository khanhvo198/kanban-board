import { getAllProjects, getCurrentProject } from "@/api/project";
import { Project } from "@/shared/utils/types";
import { create } from "zustand";

interface ProjectState {
  projects: Project[];
  fetchProjects: () => void;
  currentProject: Project;
  fetchCurrentProject: (id: string) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  currentProject: {} as Project,
  fetchProjects: async () => {
    const projects = await getAllProjects();
    set({ projects: [...projects] });
  },
  fetchCurrentProject: async (id: string) => {
    const res = await getCurrentProject(id);
    set({ currentProject: { ...res } });
  },
}));
