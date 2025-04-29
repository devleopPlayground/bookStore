import styled from "styled-components";
import BookReviewItem from "./BookReviewItem";
import type {
  BookReviewItemPostType,
  BookReviewItemType,
} from "@src/models/book.model";
import BookReviewAdd from "./BookReviewAdd";

type BookReviewProps = {
  reviews: BookReviewItemType[];
  onClickCreateReview: (data: BookReviewItemPostType) => void;
};

const BookReview = ({ reviews, onClickCreateReview }: BookReviewProps) => {
  return (
    <BookReviewStyle>
      <BookReviewAdd onAdd={onClickCreateReview} />
      {reviews.map((review) => (
        <BookReviewItem review={review} />
      ))}
    </BookReviewStyle>
  );
};

export default BookReview;

const BookReviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
