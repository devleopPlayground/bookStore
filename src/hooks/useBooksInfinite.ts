import { fetchBooks } from "@src/api/books.api";
import { LIMIT } from "@src/constants/pagination";
import { QUERYSTRING } from "@src/constants/queryString";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const useBooksInfinite = () => {
  const location = useLocation();

  const getBooks = ({ pageParam }: { pageParam: number }) => {
    const params = new URLSearchParams(location.search);

    const category_id = params.get(QUERYSTRING.CATEGORY_ID)
      ? Number(params.get(QUERYSTRING.CATEGORY_ID))
      : null;
    const news = params.get(QUERYSTRING.NEWS) === "true";
    const limit = LIMIT;
    const currentPage = pageParam;

    return fetchBooks({
      category_id,
      news,
      limit,
      currentPage,
    });
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["books", location.search],
    queryFn: ({ pageParam = 1 }) => getBooks({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.pagination) return null;

      const isLastPage =
        Math.ceil(lastPage.pagination.totalCount / LIMIT) ===
        lastPage.pagination.currentPage;

      return isLastPage ? null : lastPage.pagination.currentPage + 1;
    },
  });

  const books = data ? data.pages.flatMap((page) => page.books) : [];
  const pagination = data ? data.pages[data.pages.length - 1] : {};
  const isEmpty = books.length == 0;

  return {
    books,
    pagination,
    isEmpty,
    isBooksLoading: isFetching,
    fetchNextPage,
    hasNextPage,
  };
};

export default useBooksInfinite;
