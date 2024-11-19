import { API_URL } from "@/shared/utils/constants";
import { User } from "@/shared/utils/types";
import axios from "axios";

interface SingleUserResponse {
  user: User;
}

export const getCurrentUser = async (): Promise<User> => {
  const res = await axios.get<SingleUserResponse>(`${API_URL}/user`, {
    withCredentials: true,
  });

  return res.data.user;
};
