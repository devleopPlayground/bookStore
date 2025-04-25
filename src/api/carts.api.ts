import { httpClient } from "./http";

type AddCartType = {
  book_id: number;
  quantity: number;
};

export const addCart = async ({ book_id, quantity }: AddCartType) => {
  const response = await httpClient.post("/carts", { book_id, quantity });

  return response.data;
};
