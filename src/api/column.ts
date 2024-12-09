import { API_URL } from "@/shared/utils/constants";
import { Column } from "@/shared/utils/types";
import axios from "axios";

interface ColumnResponse {
  column: Column;
}

export const createNewColumn = async (column: Column, projectId: string) => {
  console.log(column, projectId);

  const res = await axios.post<ColumnResponse>(
    `${API_URL}/projects/${projectId}/columns`,
    {
      column,
      projectId,
    },
    {
      withCredentials: true,
    },
  );

  return res.data.column;
};
