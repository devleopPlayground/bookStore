import { FaRegUser, FaSignInAlt } from "react-icons/fa";
import { styled } from "styled-components";

const CATEGORY = [
  { id: null, name: "전체" },
  { id: 0, name: "동화" },
  { id: 1, name: "소설" },
  { id: 2, name: "사회" },
];

const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle>로고</LogoStyle>
      <nav className="category">
        <ul>
          {CATEGORY.map((category) => (
            <li key={category.id}>
              <a
                href={
                  category.id == null
                    ? "books"
                    : `/books?category_id=${category.id}`
                }
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <ul>
          <li>
            <a href="/login">
              <FaSignInAlt /> 로그인
            </a>
          </li>
          <li>
            <a href="/register">
              <FaRegUser /> 회원가입
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .category {
    ul {
      display: flex;
      gap: 32px;

      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
    }
    li {
      a {
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        line-height: 1;

        color: ${({ theme }) => theme.color.text};

        svg {
          fill: ${({ theme }) => theme.color.text};
          margin-right: 6px;
        }
      }
    }
  }
`;

const LogoStyle = styled.h1`
  width: 150px;
  height: 55px;
  border-radius: 5px;
  background-color: orange;
  font-size: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
