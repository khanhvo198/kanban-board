export const ItemType = {
  CARD: "CARD",
};

export type State =
  | {
      status: "success";
      message: string;
      userInfo: User;
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{ path: string; message: string }>;
    }
  | null;

export type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export interface Project {
  id: string;
  name: string;
  members: Member[];
  tasks: Task[];
}

export interface Member {
  information: User;
}

export interface Task {
  title: string;
  description: string;
  assignees: Assignee[];
  due: Date;
  tags: Option[];
}

export interface Assignee {
  userId: string;
}

export interface User {
  email: string;
  name: string;
  id: string;
}

export interface Option {
  value: string;
  colorScheme: string;
}

export interface TagListHandle {
  tags: Option[];
}
