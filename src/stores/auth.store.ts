import { getCurrentUser } from "@/api/user";
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
    const res = await getCurrentUser();
    set({ user: { ...res }, isAuthenticated: true });

    useProjectStore.getState().fetchProjects();
  },
}));
