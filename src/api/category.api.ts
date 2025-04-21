import type { CategoryType } from "../models/category.model";
import { httpClient } from "./http";

export const fetchCategory = async () => {
  const response = await httpClient.get<CategoryType[]>("/categories");

  return response.data;
};
