import { BookReviewItemType } from "@src/models/book.model";
import { formatDate } from "@src/utils/format";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

type BookReviewItemProps = {
  review: BookReviewItemType;
};

const Star = ({ score }: Pick<BookReviewItemType, "score">) => {
  return (
    <span className="star">
      {Array.from({ length: score }).map(() => (
        <FaStar />
      ))}
    </span>
  );
};

const BookReviewItem = ({ review }: BookReviewItemProps) => {
  return (
    <BookReviewItemStyle>
      <header className="header">
        <div>
          <span>{review.userName}</span>
          <Star score={review.score} />
        </div>
        <div>{formatDate(review.createdAt)}</div>
      </header>
      <div className="content">
        <p>{review.content}</p>
      </div>
    </BookReviewItemStyle>
  );
};

export default BookReviewItem;

const BookReviewItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.default};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.color.secondary};
    padding: 0;

    .star {
      padding: 0 0 0 8px;

      svg {
        fill: ${({ theme }) => theme.color.primary};
      }
    }
  }

  .content {
    p {
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
    }
  }
`;
