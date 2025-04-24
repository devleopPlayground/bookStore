import { render } from "@testing-library/react";
import BookItem from "../components/books/BookItem";
import { BookStoreThemeProvider } from "../context/themeContext";
import type { BookType } from "../models/book.model";

const dummyBook: BookType = {
  id: 1,
  name: "string",
  imgUrl: "https://github.com/lsj0202",
  category_id: 1,
  form: "paperback",
  isbn: "dummy isbn",
  summary: "dummy summary",
  detail: "string",
  author: "dummy author",
  pages: 100,
  contents: "dummy contents",
  price: 10000,
  likes: 1,
  pub_date: "2025-01-01",
};

describe("", () => {
  it("렌더 여부", () => {
    const { getByText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyBook.name)).toBeInTheDocument();
  });
});
