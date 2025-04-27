import { CheckedValues } from "../pages/Cart";

export type OrderType = {
  id: number;
  createdAt: string;
  address: string;
  receiver: string;
  contact: string;
  book_title: string;
  total_quantity: number;
  total_price: number;
};

export type OrderSheetType = {
  items: number[];
  checkedValues: CheckedValues[];
  totalQuantity: number;
  totalPrice: number;
  bookTitle: string;
  delivery: {
    address: string;
    receiver: string;
    content: string;
  };
};

export type OrderDetailType = {
  book_id: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
};

export type OrderListItem = {
  detail?: OrderDetailType[];
} & OrderType;
