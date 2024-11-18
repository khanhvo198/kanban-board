import { API_URL } from "@/shared/utils/constants";
import { User } from "@/shared/utils/types";
import { create } from "zustand";
import { useProjectStore } from "./project.store";

interface AuthState {
  isAuthenticated: boolean;
  user: User;
  fetchUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: {} as User,
  fetchUser: async () => {
    const res = await fetch(`${API_URL}/user`, {
      method: "GET",
      credentials: "include",
    });
    const parsedRes = await res.json();

    if (!res.ok) {
      return;
    }

    set({ user: { ...parsedRes.user }, isAuthenticated: true });

    useProjectStore.getState().fetchProjects();
  },
}));
