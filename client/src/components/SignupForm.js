import { FacebookBtn, GithubBtn, GoogleBtn, LargeBtn } from "./Buttons";
import { Input } from "./Input";

export const SignupForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex py-2 justify-center items-center flex-col space-y-2">
        <GoogleBtn text={"Sign up"} />
        <GithubBtn text={"Sign up"} />
        <FacebookBtn text={"Sign up"} />
      </div>
      <div className="bg-white w-[300px] py-7 px-6 mt-2 rounded-md shadow-lg ">
        <form className="flex flex-col space-y-4">
          <Input label={"Display name"} />
          <Input label={"Email"} />
          <Input label={"Password"} />
          <p className="text-gray-500 text-sm top-0">
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
