import { fetchBanner } from "@src/api/banner.api";
import { fetchBestBooks, fetchBooks } from "@src/api/books.api";
import { fetchAllReview } from "@src/api/review.api";
import type { MockBestBooksDataProps } from "@src/mocks/book";
import { BannerType } from "@src/models/banner.model";
import type { BookReviewItemType, BookType } from "@src/models/book.model";
import { useEffect, useState } from "react";

const useMain = () => {
  const [reviews, setReviews] = useState<BookReviewItemType[]>([]);
  const [newBooks, setNewBooks] = useState<BookType[]>([]);
  const [bestBooks, setBestBooks] = useState<MockBestBooksDataProps[]>([]);
  const [banners, setBanners] = useState<BannerType[]>([]);

  useEffect(() => {
    fetchAllReview().then((reviews) => {
      setReviews(reviews);
    });

    fetchBooks({
      category_id: undefined,
      news: true,
      limit: 4,
      currentPage: 1,
    }).then(({ books }) => {
      setNewBooks(books);
    });

    fetchBestBooks().then((bestBooks) => {
      setBestBooks(bestBooks);
    });

    fetchBanner().then((banner) => {
      setBanners(banner);
    });
  }, []);

  return { reviews, newBooks, bestBooks, banners };
};

export default useMain;
