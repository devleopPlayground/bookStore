import type {
  BookReviewItemPostType,
  BookReviewItemType,
} from "@src/models/book.model";
import { requestHandler } from "./http";

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItemType[]>(
    "get",
    `/reviews/${bookId}`
  );
};

export const createReview = async (
  bookId: string,
  data: BookReviewItemPostType
) => {
  return await requestHandler("post", `/reviews/${bookId}`, data);
};
