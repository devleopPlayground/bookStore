/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  fetchBookDetail,
  fetchLikeBook,
  fetchUnLikeBook,
} from "./../api/books.api";
import { useEffect, useState } from "react";
import type {
  BookDetailType,
  BookReviewItemPostType,
  BookReviewItemType,
} from "../models/book.model";
import { useAuthStore } from "../store/auth.store";
import { addCart } from "../api/carts.api";
import { createReview, fetchBookReview } from "@src/api/review.api";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import useToast from "./useToast";

const useBook = (bookId: string) => {
  const { isLoggedIn } = useAuthStore();
  const [book, setBook] = useState<BookDetailType | null>(null);
  const [cartAdded, setCartAdded] = useState(false);
  const [reviews, setReviews] = useState<BookReviewItemType[]>([]);

  const { showToast } = useToast();

  const likeToggle = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");

      return;
    }

    if (!book) return;

    if (book.liked) {
      fetchUnLikeBook(Number(book.id)).then((response) => {
        setBook({ ...book, liked: false, likes: book.likes - 1 });
        showToast("좋아요가 취소되었습니다.");
      });
    } else {
      fetchLikeBook(Number(book.id)).then((response) => {
        setBook({ ...book, liked: true, likes: book.likes + 1 });
        showToast("좋아요에 성공했습니다.");
      });
    }
  };

  const addToCart = (quantity: number) => {
    if (!book) return;

    addCart({
      book_id: Number(book.id),
      quantity,
    }).then(() => {
      //   alert("장바구니에 추가되었습니다.");
      setCartAdded(true);

      setTimeout(() => {
        setCartAdded(false);
      }, 3000);
    });
  };

  useEffect(() => {
    fetchBookDetail(bookId).then((book) => {
      setBook(book);
    });

    fetchBookReview(bookId).then((reviews) => {
      setReviews(reviews);
    });
  }, [bookId]);

  const onClickCreateReview = (data: BookReviewItemPostType) => {
    if (!book) return;

    createReview(String(book.id), data).then((response) => {
      setReviews((prevState) => [
        ...prevState,
        {
          id: prevState.length + 1,
          userName: "Brian",
          content: data.content,
          createdAt: dayjs().format(),
          score: data.score,
        },
      ]);
    });
  };

  return {
    book,
    reviews,
    likeToggle,
    addToCart,
    cartAdded,
    onClickCreateReview,
  };
};

export default useBook;
