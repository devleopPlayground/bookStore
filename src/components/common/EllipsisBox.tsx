import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type EllipsisBoxProps = {
  children: React.ReactNode;
  lineLimit?: number;
};

const EllipsisBox = ({ children, lineLimit = 3 }: EllipsisBoxProps) => {
  const [expended, setExpended] = useState(false);

  return (
    <EllipsisBoxStyle lineLimit={lineLimit} $expended={expended}>
      <p>{children}</p>

      <div className="toggle">
        <Button
          size="small"
          scheme="normal"
          onClick={() => setExpended(!expended)}
        >
          {expended ? (
            <>
              <FaAngleDown />
              펼치기
            </>
          ) : (
            <>
              <FaAngleUp />
              접기
            </>
          )}
        </Button>
      </div>
    </EllipsisBoxStyle>
  );
};

export default EllipsisBox;

const EllipsisBoxStyle = styled.div<{ lineLimit: number; $expended: boolean }>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ lineLimit, $expended }) =>
      $expended ? "none" : lineLimit};
    -webkit-box-orient: vertical;
    padding: 20px 0 0 0;
    margin: 0;
  }

  .toggle {
    display: flex;
    justify-content: end;
  }
`;
