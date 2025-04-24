import styled from "styled-components";
import { LIMIT } from "../../constants/pagination";
import { PaginationType } from "../../models/pagination.model";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/queryString";

type PaginationProps = {
  pagination: PaginationType;
};

const Pagination = ({ pagination }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalCount, currentPage } = pagination;
  const pages = Math.ceil(totalCount / LIMIT);

  const handleClick = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.PAGE, page.toString());

    setSearchParams(newSearchParams);
  };

  return (
    <PaginationStyle>
      {pages > 0 && (
        <ol>
          {Array(pages)
            .fill(0)
            .map((_, idx) => (
              <li key={idx}>
                <Button
                  onClick={() => handleClick(idx + 1)}
                  size="small"
                  scheme={idx + 1 == currentPage ? "primary" : "normal"}
                >
                  {idx + 1}
                </Button>
              </li>
            ))}
        </ol>
      )}
    </PaginationStyle>
  );
};

export default Pagination;

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;

  ol {
    list-style: none;
    display: flex;
    gap: 8px;
    padding: 0;
    margin: 0;
  }
`;
