import styled from "styled-components";
import Button from "../common/Button";
import { FaList, FaTh } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/queryString";
import { useEffect } from "react";

const viewOptions = [
  {
    value: "list",
    icon: <FaList />,
  },
  {
    value: "grid",
    icon: <FaTh />,
  },
];

export type ViewModeType = "grid" | "list";

const BooksViewSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: ViewModeType) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.VIEW, value);

    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch("grid");
    }
  }, []);

  return (
    <BooksViewSwitcherStyle>
      {viewOptions.map((option) => (
        <Button
          key={option.value}
          onClick={() => handleSwitch(option.value as ViewModeType)}
          size="medium"
          scheme={
            searchParams.get(QUERYSTRING.VIEW) == option.value
              ? "primary"
              : "normal"
          }
        >
          {option.icon}
        </Button>
      ))}
    </BooksViewSwitcherStyle>
  );
};

export default BooksViewSwitcher;

const BooksViewSwitcherStyle = styled.div`
  display: flex;
  gap: 8px;

  svg {
    fill: white;
  }
`;
