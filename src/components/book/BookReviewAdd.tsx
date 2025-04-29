import type { BookReviewItemPostType } from "@src/models/book.model";
import styled from "styled-components";
import Button from "../common/Button";

type BookReviewAddProps = {
  onAdd: (data: BookReviewItemPostType) => void;
};

const BookReviewAdd = ({ onAdd }: BookReviewAddProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const content = formData.get("content") as string;
    const score = formData.get("score") as string;

    if (!content || !score) return;

    onAdd({ content, score: Number(score) });

    e.currentTarget.reset();
  };

  return (
    <BookReviewAddStyle>
      <form onSubmit={onSubmit}>
        <fieldset>
          <textarea name="content"></textarea>
        </fieldset>
        <fieldset>
          <select name="score">
            <option value="1">1점</option>
            <option value="2">2점</option>
            <option value="3">3점</option>
            <option value="4">4점</option>
            <option value="5">5점</option>
          </select>
          <Button size="medium" scheme="primary">
            작성하기
          </Button>
        </fieldset>
      </form>
    </BookReviewAddStyle>
  );
};

export default BookReviewAdd;

const BookReviewAddStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 6px;

    fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    textarea {
      width: 100%;
      height: 100px;
      padding: 10px;
      border-radius: ${({ theme }) => theme.borderRadius.default};
      border: 1px solid ${({ theme }) => theme.color.border};
      resize: none;
    }
  }
`;
