import { fakerKO as faker } from "@faker-js/faker";
import { BookType } from "@src/models/book.model";
import { http, HttpResponse } from "msw";

export type MockBestBooksDataProps = Omit<BookType, "contents">;

const mockBestBooksData: MockBestBooksDataProps[] = Array.from({
  length: 10,
}).map((_, idx) => ({
  id: idx + 1,
  title: faker.lorem.sentence(),
  imgUrl: faker.helpers.rangeToNumber({ min: 100, max: 200 }),
  category_id: faker.helpers.rangeToNumber({ min: 0, max: 3 }),
  form: "종이책",
  isbn: faker.commerce.isbn(),
  summary: faker.lorem.paragraphs(),
  detail: faker.lorem.paragraphs(),
  author: faker.person.fullName(),
  pages: faker.helpers.rangeToNumber({ min: 100, max: 500 }),
  price: faker.helpers.rangeToNumber({ min: 100000, max: 500000 }),
  likes: faker.helpers.rangeToNumber({ min: 0, max: 100 }),
  pub_date: faker.date.past().toISOString(),
}));

const URL = "http://localhost:8090/books/best";

export const fetchBestBooks = http.get(URL, () => {
  return HttpResponse.json(mockBestBooksData, { status: 200 });
});
