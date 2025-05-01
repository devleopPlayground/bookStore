import type { BookType } from "@src/models/book.model";
import styled from "styled-components";
import BookItem from "../books/BookItem";

type NewBooksProps = {
  books: BookType[];
};

const NewBooks = ({ books }: NewBooksProps) => {
  return (
    <NewBooksStyle>
      {books.map((book) => (
        <BookItem key={book.id} book={book} viewMode="grid" />
      ))}
    </NewBooksStyle>
  );
};

export default NewBooks;

const NewBooksStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;
