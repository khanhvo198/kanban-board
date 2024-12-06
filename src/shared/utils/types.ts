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
  tags: Tag[];
}

export interface File {
  id: string;
  fileName: string;
}

export interface Comment {
  id: string;
  content: string;
}

export interface Member {
  information: User;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignees: Assignee[];
  due: Date;
  tags: Tag[];
  status: string;
  files: File[];
  comments: Comment[];
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
  name: string;
  colorScheme: string;
}

export interface Tag {
  name: string;
  colorScheme: string;
}

export interface TagListHandle {
  tags: Option[];
}

export type TaskRequest = Partial<Task>;
