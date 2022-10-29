import { NavBar } from "../../components/NavBar";
import { LoginForm } from "../../components/LoginForm";

import Icon from "../../assets/Stack_Overflow-Icon.png";

export const Login = () => {
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
