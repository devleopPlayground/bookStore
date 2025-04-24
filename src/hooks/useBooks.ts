import { useEffect, useState } from "react";
import { BookType } from "../models/book.model";
import { PaginationType } from "../models/pagination.model";
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/queryString";
import { LIMIT } from "../constants/pagination";
import { useLocation } from "react-router-dom";

const useBooks = () => {
  const location = useLocation();

  const [books, setBooks] = useState<BookType[]>([]);
  const [pagination, setPagination] = useState<PaginationType>({
    currentPage: 0,
    totalCount: 1,
  });
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    fetchBooks({
      category_id: params.get(QUERYSTRING.CATEGORY_ID)
        ? Number(params.get(QUERYSTRING.CATEGORY_ID))
        : null,
      news: params.get(QUERYSTRING.NEWS) === "true",
      currentPage: params.get(QUERYSTRING.PAGE)
        ? Number(params.get(QUERYSTRING.PAGE))
        : 1,
      limit: LIMIT,
    }).then((response) => {
      setBooks(response.books);
      setPagination(response.pagination);
      setIsEmpty(response.books.length === 0);
    });
  }, [location.search]);

  return { books, pagination, isEmpty };
};

export default useBooks;
