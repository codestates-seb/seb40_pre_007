// import Logo from "../assets/Stack_Overflow-Logo.png";
import Icon from "../assets/Stack_Overflow-Icon.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center h-[60px] border-t-4 border-t-orange-400 border-b-gray-200 border-b-2 shadow-md pr-4">
      {/* Hambergers */}
      <div className="flex justify-center items-center px-4 hover:bg-main-grey h-full cursor-pointer">
        <div className="flex flex-col w-[18px] h-[30px] space-y-1 justify-center ">
          <span className="w-full bg-black h-[2px]"></span>
          <span className="w-full bg-black h-[2px]"></span>
          <span className="w-full bg-black h-[2px]"></span>
        </div>
      </div>
      {/* Logo */}
      <div className="flex justify-center items-center px-[8px] hover:bg-main-grey h-full cursor-pointer">
        <Link to={"/"}>
          <img src={Icon} alt="" className="h-[35px]" />
        </Link>
      </div>
      {/* Manu Bar */}
      <div>
        <div className="text-sm text-gray-400 hover:text-gray-700">
          <span className="hidden">About</span>
          <span className="py-1.5 px-3 hover:bg-main-grey hover:rounded-full cursor-pointer ">
            Products
          </span>
          <span className="hidden">For Teams</span>
        </div>
      </div>
      {/* Search Bar */}
      <div className=" flex flex-1 w-full h-full">
        <div className=" flex justify-center items-center px-4 hover:bg-main-grey h-full cursor-pointer ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {/* Btns */}
      <div className="space-x-2 ">
        <button className="px-3 py-1.5 bg-blue-100 border border-gray-400 rounded-md text-gray-500 hover:bg-blue-200 transition-colors">
          Log in
        </button>
        <button className="px-3 py-1.5 bg-blue-500 border border-gray-400 rounded-md text-white hover:bg-blue-700 transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
}
