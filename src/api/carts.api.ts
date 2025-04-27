import { CartType } from "../models/cart.model";
import { httpClient } from "./http";

type AddCartType = {
  book_id: number;
  quantity: number;
};

export const addCart = async ({ book_id, quantity }: AddCartType) => {
  const response = await httpClient.post("/carts", { book_id, quantity });

  return response.data;
};

export const fetchCart = async () => {
  const response = await httpClient.get<CartType[]>("/carts");

  return response.data;
};

export const deleteCart = async (cartId: number) => {
  const response = await httpClient.delete<CartType>(`/carts/${cartId}`);

  return response.data;
};
