import { useParams } from "react-router-dom";
import styled from "styled-components";
import useBook from "../hooks/useBook";
import { getImgSrc } from "../utils/image";
import Title from "../components/common/Title";
import type { BookDetailType } from "../models/book.model";
import { formatDate, formatNumber } from "../utils/format";
import { Link } from "react-router-dom";
import EllipsisBox from "../components/common/EllipsisBox";
import LikeButton from "../components/book/LikeButton";
import AddCart from "../components/book/AddCart";
import BookReview from "@src/components/book/BookReview";
import { Tab, Tabs } from "@src/components/common/Tabs";

const bookInfoList = [
  {
    label: "카테고리",
    key: "category_name",
    filter: (book: BookDetailType) => (
      <Link to={`/books?category_id=${book.category_name}`}>
        {book.category_name}
      </Link>
    ),
  },
  {
    label: "포맷",
    key: "form",
  },
  {
    label: "페이지",
    key: "pages",
  },
  {
    label: "ISBN",
    key: "isbn",
  },
  {
    label: "출간일",
    key: "pub_date",
    filter: (book: BookDetailType) => {
      return formatDate(book.pub_date);
    },
  },
  {
    label: "가격",
    key: "price",
    filter: (book: BookDetailType) => {
      return `${formatNumber(book.price)} 원`;
    },
  },
];

const BookDetail = () => {
  const { bookId } = useParams();
  const { book, likeToggle, reviews, onClickCreateReview } = useBook(
    String(bookId)
  );

  if (!book) return null;

  console.log("reviews", reviews);

  return (
    <BookDetailStyle>
      <header className="header">
        <div className="img">
          <img src={getImgSrc(book.imgUrl)} alt="" />
        </div>
        <div className="info">
          <Title size="large" color="text">
            {book.title}
          </Title>
          {bookInfoList.map(({ key, label, filter }) => (
            <dl>
              <dt>{label}</dt>
              <dd>
                {filter ? filter(book) : book[key as keyof BookDetailType]}
              </dd>
            </dl>
          ))}
          <p className="summary">{book.summary}</p>

          <div className="like">
            <LikeButton book={book} onClick={likeToggle} />
          </div>
          <div className="add-cart">
            <AddCart book={book} />
          </div>
        </div>
      </header>
      <div className="content">
        <Tabs>
          <Tab title="상세 설명">
            <Title size="medium">상세 설명</Title>
            <EllipsisBox>{book.detail}</EllipsisBox>
          </Tab>
          <Tab title="목차">
            <Title size="medium">목차</Title>
            <p>{book.contents}</p>
          </Tab>
          <Tab title="리뷰">
            <Title size="medium">리뷰</Title>
            <BookReview
              reviews={reviews}
              onClickCreateReview={onClickCreateReview}
            />
          </Tab>
        </Tabs>
      </div>
    </BookDetailStyle>
  );
};

export default BookDetail;

const BookDetailStyle = styled.div`
  .header {
    display: flex;
    align-items: start;
    gap: 24px;
    padding: 0 0 24px 0;

    .img {
      flex: 1;

      img {
        width: 100%;
        height: auto;
      }
    }

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;

      dl {
        display: flex;
        margin: 0;
        dt {
          width: 80px;
          color: ${({ theme }) => theme.color.secondary};
        }
        a {
          color: ${({ theme }) => theme.color.primary};
        }
      }
    }

    .content {
      .detail {
      }
    }
  }
`;
