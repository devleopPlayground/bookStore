import styled from "styled-components";
import type { BookDetailType } from "../../models/book.model";
import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";
import { addCart } from "../../api/carts.api";
import { Link } from "react-router-dom";
import useBook from "../../hooks/useBook";

type CartType = {
  book: BookDetailType;
};

const AddCart = ({ book }: CartType) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, cartAdded } = useBook(String(book.id));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleIncrease = () => {
    if (quantity >= 20) return;
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <AddCartStyle added={cartAdded}>
      <div>
        <Input type="number" onChange={handleChange} value={quantity} />
        <Button size="medium" scheme="normal" onClick={handleIncrease}>
          +
        </Button>
        <Button size="medium" scheme="normal" onClick={handleDecrease}>
          -
        </Button>
      </div>
      <Button
        size="medium"
        scheme="primary"
        onClick={() => addToCart(quantity)}
      >
        장바구니 담기
      </Button>
      <div className="added">
        <p>장바구니에 추가되었습니다.</p>
        <Link to="/cart">장바구니로 이동</Link>
      </div>
    </AddCartStyle>
  );
};

export default AddCart;

const AddCartStyle = styled.div<{ added: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  .added {
    position: absolute;
    right: 0;
    bottom: -90px;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 8px 12px;
    opacity: ${({ added }) => (added ? 1 : 0)};
    transition: all 0.5s ease;

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;
