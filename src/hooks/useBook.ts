import {
  fetchBookDetail,
  fetchLikeBook,
  fetchUnLikeBook,
} from "./../api/books.api";
import { useEffect, useState } from "react";
import type { BookDetailType } from "../models/book.model";
import { useAuthStore } from "../store/auth.store";
import { addCart } from "../api/carts.api";

const useBook = (bookId: string) => {
  const { isLoggedIn } = useAuthStore();
  const [book, setBook] = useState<BookDetailType | null>(null);
  const [cartAdded, setCartAdded] = useState(false);

  const likeToggle = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");

      return;
    }

    if (!book) return;

    if (book.liked) {
      fetchUnLikeBook(Number(book.id)).then((response) => {
        setBook({ ...book, liked: false, likes: book.likes - 1 });
        // setBook((prevState) =>
        //   prevState
        //     ? {
        //         ...prevState,
        //         liked: false,
        //         likes: book.likes - 1,
        //       }
        //     : prevState
        // );
      });
    } else {
      fetchLikeBook(Number(book.id)).then((response) => {
        setBook({ ...book, liked: true, likes: book.likes + 1 });
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
  }, [bookId]);

  return { book, likeToggle, addToCart, cartAdded };
};

export default useBook;
