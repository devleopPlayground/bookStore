import { useEffect, useState } from "react";
import type { OrderListItem } from "../models/order.model";
import { fetchOrderDetail, fetchOrders } from "../api/order.api";

const useOrders = () => {
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((orders) => {
      setOrders(orders);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    if (!orderId) return;

    // 요청 방어
    if (orders.filter((order) => order.id == orderId)[0].detail) {
      setSelectedItemId(orderId);

      return;
    }

    fetchOrderDetail(orderId).then((order) => {
      setSelectedItemId(orderId);
      setOrders((prevState) =>
        prevState.map((response) =>
          response.id == orderId
            ? {
                ...response,
                detail: order,
              }
            : response
        )
      );
    });
  };

  return { orders, selectedItemId, selectOrderItem };
};

export default useOrders;
