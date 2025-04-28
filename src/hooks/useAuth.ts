import { login, resetPassword, resetRequest, signup } from "@src/api/auth.api";
import type { LoginProps } from "@src/pages/Login";
import type { ResetPasswordProps } from "@src/pages/ResetPassword";
import type { SignupProps } from "@src/pages/Signup";
import { useAuthStore } from "@src/store/auth.store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const { isLoggedIn, storeLogin, storeLogout } = useAuthStore();
  const navigate = useNavigate();

  const userLogin = (data: LoginProps) => {
    login(data).then(
      ({ token }) => {
        alert("로그인이 완료되었습니다!");

        storeLogin(token);

        navigate("/");
      },
      (error) => {
        alert("로그인에 실패했습니다.");
      }
    );
  };

  const userSignUp = (data: SignupProps) => {
    signup(data).then(() => {
      alert("회원가입이 완료되었습니다!");

      navigate("/login");
    });
  };

  const userResetPassword = (data: ResetPasswordProps) => {
    resetPassword(data).then(() => {
      alert("비밀번호가 초기화 되었습니다.");
      navigate("/login");
    });
  };

  const [isResetPassword, setIsResetPassword] = useState(false);

  const userResetRequest = (email: string) => {
    resetRequest(email).then(() => {
      setIsResetPassword(true);
    });
  };

  return {
    userLogin,
    userSignUp,
    userResetPassword,
    userResetRequest,
    isResetPassword,
  };
};

export default useAuth;
