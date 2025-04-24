import Title from "../components/common/Title";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { SignupStyle } from "./Signup";
import { useState } from "react";
import { resetPassword, resetRequest } from "../api/auth.api";

export type ResetPasswordProps = {
  email: string;
  password: string;
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isResetPassword, setIsResetPassword] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isResetPassword) {
      const formData = new FormData(e.currentTarget);

      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (!email || !password) return;

      resetPassword({ email, password }).then(() => {
        alert("비밀번호가 초기화 되었습니다.");
        navigate("/login");
      });
    } else {
      const formData = new FormData(e.currentTarget);
      
      const email = formData.get("email") as string;

      if (!email) return;

      resetRequest(email).then(() => {
        setIsResetPassword(true);
      });
    }
  };

  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
      <SignupStyle>
        <form onSubmit={onSubmit}>
          <fieldset>
            <Input name="email" type="email" placeholder="이메일" />
          </fieldset>
          {isResetPassword && (
            <fieldset>
              <Input name="password" type="password" placeholder="비밀번호" />
            </fieldset>
          )}
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              {isResetPassword ? "비밀번호 초기화" : "초기화 요청"}
            </Button>
          </fieldset>
        </form>
      </SignupStyle>
    </>
  );
};

export default ResetPassword;
