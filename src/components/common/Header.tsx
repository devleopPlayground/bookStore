import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>book store</h1>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.color.primary};

  h1 {
    color: white;
  }
`;
