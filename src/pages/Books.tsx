import styled from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import useBooks from "../hooks/useBooks";
import Pagination from "../components/books/Pagination";
import Loading from "@src/components/common/Loading";

const Books = () => {
  const { books, pagination, isBooksLoading } = useBooks();

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
        <Pagination pagination={pagination} />
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
