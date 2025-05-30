import styled from "styled-components";
import Title from "../components/common/Title";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import useAuth from "@src/hooks/useAuth";

export type SignupProps = {
  email: string;
  password: string;
};

const Signup = () => {
  const { userSignUp } = useAuth();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) return;

    userSignUp({ email, password });
  };

  return (
    <>
      <Title size="large">회원가입</Title>
      <SignupStyle>
        <form onSubmit={onSubmit}>
          <fieldset>
            <Input name="email" type="email" placeholder="이메일" />
          </fieldset>
          <fieldset>
            <Input name="password" type="password" placeholder="비밀번호" />
          </fieldset>
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              회원가입
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
};

export default Signup;

export const SignupStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin: 80px auto;

  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    .error-text {
      color: red;
    }
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }

  .info {
    text-align: center;
    padding: 16px 0 0 0;
  }
`;
