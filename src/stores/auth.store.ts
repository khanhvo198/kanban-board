import { API_URL } from "@/shared/utils/constants";
import { User } from "@/shared/utils/types";
import { create } from "zustand";
import { useProjectStore } from "./project.store";
import { getCurrentUser } from "@/api/user";

interface AuthState {
  isAuthenticated: boolean;
  user: User;
  fetchUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: {} as User,
  fetchUser: async () => {
    const res = await getCurrentUser();
    set({ user: { ...res }, isAuthenticated: true });

    useProjectStore.getState().fetchProjects();
  },
}));
