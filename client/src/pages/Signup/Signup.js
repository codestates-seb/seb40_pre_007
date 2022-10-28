import { NavBar } from "../../components/NavBar";
import { SignupForm } from "../../components/SignupForm";

export const Signup = () => {
  return (
    <div className="h-screen w-screen bg-main-gray flex justify-center items-center flex-col">
      <NavBar />
      <SignupForm />
      <div className="flex space-x-2 mt-10 text-sm">
        <span>{`Don't have an account?`}</span>
        <span className="text-main-blue">Sign up</span>
      </div>
    </div>
  );
};
