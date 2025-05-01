import styled from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import Loading from "@src/components/common/Loading";
import useBooksInfinite from "@src/hooks/useBooksInfinite";
import useIntersectionObserver from "@src/hooks/useIntersectionObserver";

const Books = () => {
  const { books, pagination, isBooksLoading, fetchNextPage, hasNextPage } =
    useBooksInfinite();

  const loadMore = () => {
    if (!hasNextPage || books.length < 1) return;

    fetchNextPage();
  };

  const moreRef = useIntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      loadMore();
    }
  });

  if (!books || !pagination || isBooksLoading) {
    return <Loading />;
  }

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BookStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        {isBooksLoading && <Loading />}
        <BooksList books={books} />
        {/* <Pagination pagination={pagination} /> */}

        <div className="more" ref={moreRef} />
      </BookStyle>
    </>
  );
};

export default Books;

const BookStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;
