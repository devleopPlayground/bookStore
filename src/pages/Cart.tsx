import styled from "styled-components";
import Title from "../components/common/Title";
import CartItem from "../components/cart/CartItem";
import useCart from "../hooks/useCart";
import { useMemo, useState } from "react";
import Empty from "../components/common/Empty";
import { FaShoppingCart } from "react-icons/fa";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import { OrderSheetType } from "../models/order.model";
import { useNavigate } from "react-router-dom";
import useAlert from "../hooks/useAlert";

export type CheckedValues = {
  book_id: number;
  quantity: number;
};

const Cart = () => {
  const { carts, deleteCartItem, isEmpty } = useCart();
  const { showConfirm } = useAlert();

  const navigate = useNavigate();

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const [checkedValues, setCheckedValues] = useState<CheckedValues[]>([]);

  const handleCheckItem = (id: number, book_id: number, quantity: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems((prevState) =>
        prevState.filter((number) => number !== id)
      );

      setCheckedValues((prevState) =>
        prevState.filter((book) => book.book_id !== book_id)
      );
    } else {
      setCheckedItems((prevState) => [...prevState, id]);

      setCheckedValues((prevState) => [
        ...prevState,
        {
          book_id: book_id,
          quantity: quantity,
        },
      ]);
    }
  };

  const handleItemDelete = (id: number, book_id: number, quantity: number) => {
    deleteCartItem(id);

    setCheckedValues((prevState) =>
      prevState.filter(
        (book) => !(book.book_id == book_id, book.quantity == quantity)
      )
    );
  };

  const totalQuantity = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.quantity;
      }

      return acc;
    }, 0);
  }, [carts, checkedItems]);

  const totalPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.price * cart.quantity;
      }

      return acc;
    }, 0);
  }, [carts, checkedItems]);

  const handleOrder = () => {
    if (checkedItems.length == 0) {
      alert("주문할 항목을 선택해 주세요.");

      return;
    }

    const orderData: Omit<OrderSheetType, "delivery"> = {
      items: checkedItems,
      checkedValues: checkedValues,
      totalPrice,
      totalQuantity,
      bookTitle: carts[0].title,
    };

    showConfirm("주문하시겠습니까?", () => {
      navigate("/order", { state: orderData });
    });
  };

  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        {isEmpty ? (
          <Empty
            icon={<FaShoppingCart />}
            title="장바구니가 비었습니다."
            description="장바구니를 채워보세요."
          />
        ) : (
          <>
            <div className="content">
              {carts.map((cart) => (
                <CartItem
                  cart={cart}
                  checkedItems={checkedItems}
                  onCheck={handleCheckItem}
                  onDelete={handleItemDelete}
                />
              ))}
            </div>
            <div className="summary">
              <CartSummary
                totalPrice={totalPrice}
                totalQuantity={totalQuantity}
              />
              <Button onClick={handleOrder} size="large" scheme="primary">
                주문 하기
              </Button>
            </div>
          </>
        )}
      </CartStyle>
    </>
  );
};

export default Cart;

export const CartStyle = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 0 0 0;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .order-info {
    h1 {
      padding: 0 0 24px 0;
    }

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 12px;
  }

  .delivery {
    fieldset {
      border: 0;
      margin: 0;
      padding: 0 0 12px 0;

      display: flex;
      justify-content: start;
      gap: 8px;

      label {
        width: 80px;
      }

      .input {
        flex: 1;
        input {
          width: 100%;
        }
      }
    }
  }
`;
