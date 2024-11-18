import { API_URL } from "@/shared/utils/constants";
import { User } from "@/shared/utils/types";
import { create } from "zustand";

interface AuthState {
  user: User;
  fetchUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: {} as User,
  fetchUser: async () => {
    const res = await fetch(`${API_URL}/user`, {
      method: "GET",
      credentials: "include",
    });
    const parsedRes = await res.json();
    console.log(parsedRes);
    set({ user: { ...parsedRes.user } });
  },
}));
