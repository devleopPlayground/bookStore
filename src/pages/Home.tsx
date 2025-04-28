import styled from "styled-components";

const Home = () => {
  return <HomeStyle></HomeStyle>;
};

export default Home;

const HomeStyle = styled.div`
  color: ${({ theme }) => theme.color.border};
`;
