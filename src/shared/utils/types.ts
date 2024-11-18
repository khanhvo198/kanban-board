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
}

export interface User {
  email: string;
  id: string;
}
