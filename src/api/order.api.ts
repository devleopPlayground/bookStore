import { OrderDetailType, OrderSheetType } from "../models/order.model";
import { httpClient, requestHandler } from "./http";

export const order = async (orderData: OrderSheetType) => {
  return requestHandler("post", "/orders", orderData);
};

export const fetchOrders = async () => {
  const response = await httpClient.get("/orders");

  return response.data;
};

export const fetchOrderDetail = async (id: number) => {
  const response = await httpClient.get<OrderDetailType[]>(`/orders/${id}`);

  return response.data;
};
