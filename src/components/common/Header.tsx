import { FaRegUser, FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import useCategory from "../../hooks/useCategory";
import { useAuthStore } from "../../store/auth.store";
import Dropdown from "./Dropdown";

const Header = () => {
  const { category } = useCategory();
  const { isLoggedIn, storeLogout } = useAuthStore();

  return (
    <HeaderStyle>
      <LogoStyle>
        <Link to="/" style={{ textDecoration: "none" }}>
          로고
        </Link>
      </LogoStyle>
      <nav className="category">
        <ul>
          {category.map((category) => (
            <li key={category.category_id}>
              <Link
                to={
                  category.category_id == null
                    ? "/books"
                    : `/books?category_id=${category.category_id}`
                }
              >
                {category.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <Dropdown toggleButton={<FaUserCircle />}>
          {isLoggedIn ? (
            <ul>
              <li>
                <Link to="/cart">장바구니</Link>
              </li>
              <li>
                <Link to="/orderlist">주문내역</Link>
              </li>
              <li>
                <button onClick={storeLogout}>로그아웃</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">
                  <FaSignInAlt /> 로그인
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <FaRegUser /> 회원가입
                </Link>
              </li>
            </ul>
          )}
        </Dropdown>
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
        a,
        button {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;

          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          color: ${({ theme }) => theme.color.text};
          background: none;
          border: 0;
          cursor: pointer;

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
      flex-direction: column;
      gap: 8px;
      width: 100px;
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
