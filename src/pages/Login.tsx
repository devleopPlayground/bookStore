import Title from "../components/common/Title";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { SignupStyle } from "./Signup";
import useAuth from "@src/hooks/useAuth";

export type LoginProps = {
  email: string;
  password: string;
};

const Login = () => {
  const { userLogin } = useAuth();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) return;

    userLogin({ email, password });
  };

  return (
    <>
      <Title size="large">로그인</Title>
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
              로그인
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

export default Login;
