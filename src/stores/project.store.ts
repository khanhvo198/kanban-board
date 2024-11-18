import { API_URL } from "@/shared/utils/constants";
import { Project } from "@/shared/utils/types";
import { create } from "zustand";

interface ProjectState {
  projects: Project[];
  fetchProjects: () => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  fetchProjects: async () => {
    const res = await fetch(`${API_URL}/projects`, {
      method: "GET",
      credentials: "include",
    });
    const parsedRes = await res.json();
    set({ projects: [...parsedRes.projects] });
  },
}));
