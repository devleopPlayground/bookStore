import { fakerKO as faker } from "@faker-js/faker";
import { BookReviewItemType } from "@src/models/book.model";
import { http, HttpResponse } from "msw";

const mockReviewsData: BookReviewItemType[] = Array.from({ length: 8 }).map(
  (_, idx) => ({
    id: idx,
    userName: faker.person.fullName(),
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past().toISOString(),
    score: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
  })
);

const URL = "http://localhost:8090/reviews/:bookId";

export const reviewsById = http.get(URL, () => {
  return HttpResponse.json(mockReviewsData, {
    status: 200,
  });
});

export const createReview = http.post(URL, () => {
  return HttpResponse.json(
    { message: "리뷰가 등록되었습니다." },
    {
      status: 200,
    }
  );
});
