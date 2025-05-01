import Banner from "@src/components/common/banner/Banner";
import Title from "@src/components/common/Title";
import MainBest from "@src/components/main/MainBest";
import MainReview from "@src/components/main/MainReview";
import NewBooks from "@src/components/main/NewBooks";
import useMain from "@src/hooks/useMain";
import styled from "styled-components";

const Home = () => {
  const { reviews, newBooks, bestBooks, banners } = useMain();

  return (
    <HomeStyle>
      {/** 배너 */}
      <Banner banners={banners} />

      {/** 베스트 셀러 */}
      <section className="section">
        <Title size="large">베스트 셀러</Title>
        <MainBest books={bestBooks} />
      </section>
      {/** 신간 */}
      <section className="section">
        <Title size="large">신간 안내</Title>
        <NewBooks books={newBooks} />
      </section>
      {/** 리뷰 */}
      <section className="section">
        <Title size="large">리뷰</Title>
        <MainReview reviews={reviews} />
      </section>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: ${({ theme }) => theme.color.border};
`;
