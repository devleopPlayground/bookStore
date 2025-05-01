import type { BannerType } from "@src/models/banner.model";
import styled from "styled-components";
import BannerItem from "./BannerItem";
import { useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type BannerProps = {
  banners: BannerType[];
};
const Banner = ({ banners }: BannerProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const transformValue = useMemo(() => {
    return currentIdx * -100;
  }, [currentIdx]);

  const handlePrev = () => {
    if (currentIdx <= 0) {
      setCurrentIdx(banners.length - 1);
      return;
    }

    setCurrentIdx((prevState) => prevState - 1);
  };

  const handleNext = () => {
    if (currentIdx >= banners.length - 1) {
      setCurrentIdx(0);

      return;
    }

    setCurrentIdx((prevState) => prevState + 1);
  };

  const handleIndicator = (idx: number) => {
    setCurrentIdx(idx);
  };

  return (
    <BannerStyle>
      {/** 배너 그룹 */}
      <BannerContainerStyle transformValue={transformValue}>
        {banners.map((banner) => (
          <BannerItem key={banner.id} banner={banner} />
        ))}
      </BannerContainerStyle>

      {/** 버튼 영역 */}
      <BannerButtonStyle>
        <button onClick={handlePrev} className="prev">
          <FaAngleLeft />
        </button>
        <button onClick={handleNext} className="next">
          <FaAngleRight />
        </button>
      </BannerButtonStyle>

      <BannerIndicatorStyle>
        {Array.from({ length: banners.length }).map((_, idx) => (
          <span
            onClick={() => handleIndicator(idx)}
            className={currentIdx == idx ? "active" : ""}
          />
        ))}
      </BannerIndicatorStyle>
    </BannerStyle>
  );
};

export default Banner;

const BannerStyle = styled.div`
  position: relative;
  overflow: hidden;
`;

const BannerContainerStyle = styled.div<{ transformValue: number }>`
  display: flex;
  transform: translateX(${({ transformValue }) => transformValue}%);
  transition: transform 0.5s ease-in-out;
`;

const BannerButtonStyle = styled.div`
  button {
    border: 0;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 2rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    svg {
      fill: white;
    }

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
`;

const BannerIndicatorStyle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background-color: white;
    margin: 0 4px;
    cursor: pointer;

    &.active {
      background-color: ${({ theme }) => theme.color.primary};
    }
  }
`;
