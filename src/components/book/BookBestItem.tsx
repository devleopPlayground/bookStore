import styled from "styled-components";
import BookItem, { BookItemStyle } from "../books/BookItem";
import { BookType } from "@src/models/book.model";

type BookBestItemProps = {
  book: BookType;
  itemIdx: number;
};

const BookBestItem = ({ book, itemIdx }: BookBestItemProps) => {
  return (
    <BookBestItemStyle>
      <BookItem book={book} viewMode="grid" />
      <div className="rank">{itemIdx + 1}</div>
    </BookBestItemStyle>
  );
};

export default BookBestItem;

const BookBestItemStyle = styled.div`
  ${BookItemStyle} {
    .summary,
    .price,
    .likes {
      display: none;
    }

    h2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  position: relative;

  .rank {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: #fff;
    font-weight: 700;
    font-style: italic;
  }
`;
