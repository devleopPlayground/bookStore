import { useEffect, useState } from "react";
import { CartType } from "../models/cart.model";
import { deleteCart, fetchCart } from "../api/carts.api";

const useCart = () => {
  const [carts, setCarts] = useState<CartType[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const deleteCartItem = (cartId: number) => {
    deleteCart(cartId).then(() => {
      setCarts(carts.filter((cart) => cart.id !== cartId));
    });
  };

  useEffect(() => {
    fetchCart().then((carts) => {
      setCarts(carts);
      setIsEmpty(carts.length == 0);
    });
  }, [isEmpty]);

  return { carts, isEmpty, deleteCartItem };
};

export default useCart;
