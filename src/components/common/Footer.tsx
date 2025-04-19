import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <LogoStyle>로고</LogoStyle>
      <div className="copyright">
        <p>copyright(c), 2025, book store.</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  border-top: 1px solid ${({ theme }) => theme.color.background};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .copyright {
    p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.text};
    }
  }
`;

const LogoStyle = styled.h1`
  width: 80px;
  height: 35px;
  border-radius: 5px;
  background-color: orange;
  font-size: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
