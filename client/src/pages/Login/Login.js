import { NavBar } from "../../components/NavBar";
import { LoginForm } from "../../components/LoginForm";

import Icon from "../../assets/Stack_Overflow-Icon.png";

import { useRecoilValue } from "recoil";
import { isLoginState } from "../../recoil/atoms";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const isLogin = useRecoilValue(isLoginState);

  // 로그인 된 상태일 경우 로그인 페이지 접근 금지
  const navigator = useNavigate();
  useEffect(() => {
    if (isLogin) navigator("/");
  }, []);

  return (
    <div className="h-screen w-screen bg-main-gray flex justify-center items-center flex-col">
      <NavBar />
      <img src={Icon} alt="스택오버플로우 아이콘" className="h-12 w-12 mb-5" />
      <LoginForm />
      <div className="flex space-x-2 mt-10 text-sm">
        <span>{`Don't have an account?`}</span>
        <span className="text-main-blue">Sign up</span>
      </div>
    </div>
  );
};
