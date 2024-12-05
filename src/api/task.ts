import { API_URL } from "@/shared/utils/constants";
import { Project, Task, TaskRequest } from "@/shared/utils/types";
import axios from "axios";

interface TaskResponse {
  task: Task;
  currentProject: Project;
}

export const createNewTask = async (task: TaskRequest) => {
  console.log(task);
  const res = await axios.post<TaskResponse>(
    `${API_URL}/tasks`,
    { task },
    {
      withCredentials: true,
    },
  );

  return res.data;
};
