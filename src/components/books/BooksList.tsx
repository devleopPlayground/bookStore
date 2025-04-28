import styled from "styled-components";
import BookItem from "./BookItem";
import type { BookType } from "@models/book.model";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { QUERYSTRING } from "@constants/queryString";
import type { ViewModeType } from "./BooksViewSwitcher";

type BookListProps = {
  books: BookType[];
};

const BooksList = ({ books }: BookListProps) => {
  const location = useLocation();
  const [view, setView] = useState<ViewModeType>("grid");

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as ViewModeType);
    }
  }, [location.search]);

  return (
    <BookListStyle view={view}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} viewMode={view} />
      ))}
    </BookListStyle>
  );
};

export default BooksList;

const BookListStyle = styled.div<{ view: ViewModeType }>`
  display: grid;
  grid-template-columns: ${({ view }) =>
    view == "grid" ? "repeat(4, 1fr);" : "repeat(1, 1fr);"};
  gap: 24px;
`;
