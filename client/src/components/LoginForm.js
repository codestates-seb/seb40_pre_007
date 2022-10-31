import { FacebookBtn, GithubBtn, GoogleBtn, LargeBtn } from "./Buttons";
import { Input } from "./Input";

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isLoginState } from "../recoil/atoms";
import { useForm } from "react-hook-form";

import { client } from "../client/client";

export const LoginForm = () => {
  // 로그인 상태 변경 함수
  const setIsLogin = useSetRecoilState(isLoginState);
  // 로그인 로직
  useEffect(() => {
    client
      .post("/login", {
        email: "coding@gmail.com",
        password: "1111",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.accessToken)
          // accessToken localStorage 저장
          localStorage.setItem("accessToken", res.data.accessToken);
        // 로그인 상태 변경
        setIsLogin(true);
      })
      .catch((err) => console.error(err));
  });

  // 로그인 form 유효성 검사를 위한 함수
  const { register, handleSubmit } = useForm();

  // 유효성 검사 통과시 적용할 로직
  const onValid = () => {
    return;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex py-2 justify-center items-center flex-col space-y-2">
        <GoogleBtn />
        <GithubBtn />
        <FacebookBtn />
      </div>
      <div className="bg-white w-[300px] py-7 px-6 mt-2 rounded-md shadow-lg ">
        <form
          className="flex flex-col space-y-5"
          onSubmit={handleSubmit(onValid)}
        >
          <Input label={"Email"} register={register("email")} />
          <Input label={"Password"} register={register("password")} />
          <LargeBtn>Log in</LargeBtn>
        </form>
      </div>
    </div>
  );
};
