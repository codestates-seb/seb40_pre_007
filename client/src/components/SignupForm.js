import { FacebookBtn, GithubBtn, GoogleBtn, LargeBtn } from "./Buttons";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { client } from "../client/client";

// 유효성 검사 성공
export const SignupForm = () => {
  const naviagte = useNavigate();
  const { register, handleSubmit } = useForm();
  const [errorMsg, setErrorMsg] = useState("");
  const [failedMsg, setFailedMsg] = useState("");

  const onValid = ({ displayName, text: email, password }) => {
    const payload = { displayName, email, password };

    client
      .post("/api/accounts", JSON.stringify(payload))
      .then(() => {
        alert("가입에 성공하였습니다 :)");
        naviagte("/login");
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
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center py-2 space-y-2">
        <GoogleBtn text={"Sign up"} />
        <GithubBtn text={"Sign up"} />
        <FacebookBtn text={"Sign up"} />
      </div>
      <div className="bg-white w-[300px] py-7 px-6 mt-2 rounded-md shadow-lg ">
        {failedMsg ? (
          <div className="mb-2 text-sm text-center text-red-500">
            {failedMsg}
          </div>
        ) : null}
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onValid, onInValid)}
        >
          <Input
            label={"Display name"}
            register={register("displayName", {
              required: "이름을 입력해주세요!",
              maxLength: {
                value: 6,
                message: "최대 6자 까지만 입력해주세요!",
              },
            })}
            errorMsg={errorMsg}
            failedMsg={failedMsg}
          />
          <Input
            label={"Email"}
            register={register("text", {
              required: "이메일을 입력해주세요!",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "이메일 형식으로 작성해주세요!",
              },
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
                message: "최소 8자 이상의 숫자를 입력해주세요!",
              },
              pattern: {
                value:
                  /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/,
                message: "영문, 숫자, 특수문자를 포함하여 작성해주세요!",
              },
            })}
            errorMsg={errorMsg}
            failedMsg={failedMsg}
          />
          <p className="top-0 text-sm text-gray-500">
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </p>
          <LargeBtn>Sign up</LargeBtn>
          <p className="text-gray-500 text-sm top-0 [&>a]:text-main-blue">
            By clicking “Sign up”, you agree to our
            <a
              href="https://stackoverflow.com/legal/terms-of-service/public"
              className="hover:text-light-blue"
            >
              {" "}
              terms of service
            </a>
            ,
            <a
              href="https://stackoverflow.com/legal/privacy-policy"
              className="hover:text-light-blue"
            >
              {" "}
              privacy policy{" "}
            </a>
            and
            <a
              href="https://stackoverflow.com/legal/cookie-policy"
              className="hover:text-light-blue"
            >
              {" "}
              cookie policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
