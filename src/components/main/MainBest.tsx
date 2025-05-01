import { MockBestBooksDataProps } from "@src/mocks/book";
import styled from "styled-components";
import BookBestItem from "../book/BookBestItem";

type MainBestProps = {
  books: MockBestBooksDataProps[];
};

const MainBest = ({ books }: MainBestProps) => {
  return (
    <MainBestStyle>
      {books.map((book, idx) => (
        <BookBestItem book={{ ...book, contents: "" }} itemIdx={idx} />
      ))}
    </MainBestStyle>
  );
};

export default MainBest;

const MainBestStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;
