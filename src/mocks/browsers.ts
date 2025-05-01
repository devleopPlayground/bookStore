import { setupWorker } from "msw/browser";
import { createReview, reviewsById, reviewsForMain } from "./review";
import { fetchBestBooks } from "./book";
import { fetchBanners } from "./banner";

const handlers = [
  reviewsById,
  createReview,
  reviewsForMain,
  fetchBestBooks,
  fetchBanners,
];

export const worker = setupWorker(...handlers);
