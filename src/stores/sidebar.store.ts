import { API_URL } from "@/shared/utils/constants";
import { Project } from "@/shared/utils/types";
import { create } from "zustand";
import { useAuthStore } from "./auth.store";

interface SideBarState {
  projects: Project[],
  fetchProjects: () => void
}


export const useSideBarStore = create<SideBarState>((set) => ({
  projects: [],
  fetchProjects: async () => {
    const res = await fetch(`${API_URL}/projects`, {
      method: "GET",
      credentials: "include"
    })
    const parsedRes = await res.json()
    console.log(parsedRes)
    set({ projects: [...parsedRes.projects] })
  }
}))
