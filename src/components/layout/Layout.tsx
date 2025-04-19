import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutStyle>{children}</LayoutStyle>
      <Footer />
    </>
  );
};

export default Layout;

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  max-width: ${({ theme }) => theme.layout.width.large};

  /* min-height: 100dvh; */
`;
