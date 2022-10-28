import { NavBar } from "../../components/NavBar";
import {
  GoogleBtn,
  GithubBtn,
  FacebookBtn,
  LargeBtn,
} from "../../components/Buttons";

export const Login = () => {
  return (
    <div className="w-flex h-screen w-screen bg-main-gray">
      <NavBar />
      <div className="flex w-screen h-screen justify-center items-center flex-col space-y-2">
        <GoogleBtn />
        <GithubBtn />
        <FacebookBtn />
        <LargeBtn>Log in</LargeBtn>
      </div>
    </div>
  );
};
