import { FacebookBtn, GithubBtn, GoogleBtn, LargeBtn } from "./Buttons";
import { Input } from "./Input";

export const SignupForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex py-2 justify-center items-center flex-col space-y-2">
        <GoogleBtn />
        <GithubBtn />
        <FacebookBtn />
      </div>
      <div className="bg-white w-[300px] py-7 px-6 mt-2 rounded-md shadow-lg ">
        <form className="flex flex-col space-y-5">
          <Input label={"Display name"} id={"displayName"} />
          <Input label={"Email"} id={"email"} />
          <Input label={"Password"} id={"password"} />
          <LargeBtn>Sign up</LargeBtn>
        </form>
      </div>
    </div>
  );
};
