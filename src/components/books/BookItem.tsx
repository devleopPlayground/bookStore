import styled from "styled-components";
import type { BookType } from "../../models/book.model";
import { getImgSrc } from "../../utils/image";
import { formatNumber } from "../../utils/format";
import { FaHeart } from "react-icons/fa";
import type { ViewModeType } from "./BooksViewSwitcher";

type BookItemProps = {
  book: BookType;
  viewMode: ViewModeType;
};

const BookItem = ({ book, viewMode }: BookItemProps) => {
  return (
    <BookItemStyle viewMode={viewMode}>
      <div className="img">
        <img src={getImgSrc(Number(book.id))} alt={book.name} />
      </div>
      <div className="content">
        <h2 className="title">{book.name}</h2>
        <p className="summary">{book.summary}</p>
        <p className="author">{book.author}</p>
        <p className="price">{formatNumber(book.price)} 원</p>
        <div className="likes">
          <FaHeart />
          <span>{book.likes}</span>
        </div>
      </div>
    </BookItemStyle>
  );
};

export default BookItem;

const BookItemStyle = styled.div<Pick<BookItemProps, "viewMode">>`
  display: flex;
  flex-direction: ${({ viewMode }) => (viewMode === "grid" ? "column" : "row")};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  .img {
    border-radius: ${({ theme }) => theme.borderRadius.default};
    width: 150px;
    overflow: hidden;
    width: ${({ viewMode }) => (viewMode === "grid" ? "auto" : "160px")};

    img {
      max-width: 100%;
      object-fit: contain;
    }
  }

  .content {
    padding: 16px;
    position: relative;
    flex: ${({ viewMode }) => (viewMode == "grid" ? 0 : 1)};

    .title {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 12px 0;
    }

    .summary {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }

    .author {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }

    .price {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }

    .likes {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.primary};
      margin: 0 0 4px 0;
      font-weight: 700;
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: ${({ theme }) => theme.borderRadius.default};
      padding: 4px 12px;
      position: absolute;
      bottom: 16px;
      right: 16px;

      svg {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
