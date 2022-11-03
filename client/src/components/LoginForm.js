import { FacebookBtn, GithubBtn, GoogleBtn, LargeBtn } from "./Buttons";
import { Input } from "./Input";

import { useSetRecoilState } from "recoil";
import { isLoginState } from "../recoil/atoms";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { client } from "../client/client";
import { useState } from "react";

export const LoginForm = () => {
  const naviagte = useNavigate();
  const setIsLogin = useSetRecoilState(isLoginState);
  const { register, handleSubmit } = useForm();
  const [errorMsg, setErrorMsg] = useState("");
  const [failedMsg, setFailedMsg] = useState("");

  // 유효성 검사 통과시 로그인 로직
  const onValid = ({ email: username, password }) => {
    const payload = { username, password };

    client
      .post("/api/login", JSON.stringify(payload))
      .then((res) => {
        if (res.headers.get("Authorization")) {
          localStorage.setItem("accessToken", res.headers.get("Authorization"));
          localStorage.setItem("userName", res.data.displayName);
        }
        setIsLogin(true);
        naviagte("/main");
        setFailedMsg("");
      })
      .catch((err) => {
        setFailedMsg(err.response.data.message);
        setErrorMsg("");
      });
  };

  // 유효성 검사 실패시 input 클래스 변경 로직
  const onInValid = (error) => {
    setErrorMsg(error);
    setFailedMsg("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex py-2 justify-center items-center flex-col space-y-2">
        <GoogleBtn />
        <GithubBtn />
        <FacebookBtn />
      </div>

      <div className="bg-white w-[300px] py-7 px-6 mt-2 rounded-md shadow-lg">
        <form
          className="flex flex-col space-y-5"
          onSubmit={handleSubmit(onValid, onInValid)}
        >
          <Input
            label={"Email"}
            register={register("email", {
              required: "이메일을 입력해주세요!",
            })}
            errorMsg={errorMsg}
            failedMsg={failedMsg}
          />

          <Input
            label={"Password"}
            register={register("password", {
              required: "비밀번호를 입력해주세요!",
              minLength: {
                value: 8,
                message: "비밀번호는 8글자 이상입니다.",
              },
            })}
            errorMsg={errorMsg}
            failedMsg={failedMsg}
          />

          <LargeBtn>Log in</LargeBtn>

          {failedMsg ? (
            <span className="text-xs text-red-500 m-auto">{failedMsg}</span>
          ) : null}
        </form>
      </div>
    </div>
  );
};
