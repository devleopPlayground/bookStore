import type { BookReviewItemType } from "@src/models/book.model";
import styled from "styled-components";
import Slider from "react-slick";
import BookReviewItem from "../book/BookReviewItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type MainReviewProps = {
  reviews: BookReviewItemType[];
};

const MainReview = ({ reviews }: MainReviewProps) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    gap: 16,
  };

  return (
    <MainReviewStyle>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <BookReviewItem key={review.id} review={review} />
        ))}
      </Slider>
    </MainReviewStyle>
  );
};

export default MainReview;

const MainReviewStyle = styled.div`
  padding: 0 0 24px 0;

  .slick-track {
    padding: 12px 0;
  }

  .slick-slide > div {
    margin: 0 8px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }
`;
