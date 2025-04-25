import styled from "styled-components";
import { BookDetailType } from "../../models/book.model";
import Button from "../common/Button";
import { FaHeart } from "react-icons/fa";

type LikeButtonProps = {
  book: BookDetailType;
  onClick: () => void;
};

const LikeButton = ({ book, onClick }: LikeButtonProps) => {
  return (
    <LikeButtonStyle
      size="medium"
      onClick={onClick}
      scheme={book.liked ? "like" : "normal"}
    >
      <FaHeart />
      {book.likes}
    </LikeButtonStyle>
  );
};

export default LikeButton;

const LikeButtonStyle = styled(Button)`
  display: flex;
  gap: 6px;

  svg {
    color: inherit;
    * {
      color: inherit;
    }
  }
`;
