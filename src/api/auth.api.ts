import type { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async (userData: SignupProps) => {
  const response = await httpClient.post("/users/join", userData);

  return response.data;
};

export const resetRequest = async (email: string) => {
  const response = await httpClient.post("/users/reset", { email });

  return response.data;
};

export const resetPassword = async (data: SignupProps) => {
  const response = await httpClient.put("/users/reset", data);

  return response.data;
};

type LoginType = {
  token: string;
};

export const login = async (data: SignupProps) => {
  const response = await httpClient.post<LoginType>("/users/login", data);

  return response.data;
};
