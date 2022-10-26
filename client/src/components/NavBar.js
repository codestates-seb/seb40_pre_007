import Logo from "../assets/Stack_Overflow-Logo.png";
import Icon from "../assets/Stack_Overflow-Icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [isSearchBarClick, setIsSearchBarClick] = useState(false);

  const onClickSearchBar = () => {
    setIsSearchBarClick(!setIsSearchBarClick);
  };
  console.log(isSearchBarClick);

  return (
    <nav className="fixed w-full flex items-center h-[60px] border-t-4 border-t-orange-400 border-b-gray-200 border-b-2 shadow-md pr-4">
      {/* Hambergers */}
      <div className="flex justify-center items-center px-4 hover:bg-main-grey h-full cursor-pointer">
        <div className="flex flex-col w-[18px] h-[30px] space-y-1 justify-center">
          <span className="w-full bg-black h-[2px]"></span>
          <span className="w-full bg-black h-[2px]"></span>
          <span className="w-full bg-black h-[2px]"></span>
        </div>
      </div>
      {/* Icon : 모바일 */}
      <div className="flex justify-center items-center px-[8px] hover:bg-main-grey h-full cursor-pointer md:hidden">
        <Link to={"/"}>
          <img src={Icon} alt="" className="h-[35px]" />
        </Link>
      </div>
      {/* Logo : 데스크탑 */}
      <div className="justify-center items-center px-[8px] hover:bg-main-grey h-full cursor-pointer hidden md:flex">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-[150px] h-[30px]" />
        </Link>
      </div>
      {/* Manu Bar */}
      <div>
        <div className="text-sm text-gray-400 hover:text-gray-700">
          <span className="hidden lg:inline py-1.5 px-3 hover:bg-main-grey hover:rounded-full cursor-pointer ">
            About
          </span>
          <span className="py-1.5 px-3 hover:bg-main-grey hover:rounded-full cursor-pointer ">
            Products
          </span>
          <span className="hidden lg:inline py-1.5 px-3 hover:bg-main-grey hover:rounded-full cursor-pointer">
            For Teams
          </span>
        </div>
      </div>
      {/* Search Bar - 모바일 */}
      <div
        className="flex md:hidden flex-1 w-full h-full"
        onClick={onClickSearchBar}
        onKeyDown={onClickSearchBar}
        role="presentation"
      >
        <div className="flex justify-center items-center px-4 hover:bg-main-grey h-full cursor-pointer ml-auto">
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
      {/* Search Bar - 데스크탑 */}
      <form className="hidden md:flex flex-1 mr-4 items-center relative">
        <div className="text-gray-500 absolute left-2">
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
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-2 h-8 border w-full border-gray-300 rounded-sm focus:outline-none focus:border-main-blue focus:ring-4 focus:ring-blue-100"
        ></input>
      </form>
      {/* 드롭다운 */}
      <div className={isSearchBarClick ? "block" : "hidden"}>여기보세요!!!</div>
      {/* Btns */}
      <div className="space-x-2 ">
        <button className="px-3 py-1.5 bg-blue-100 border border-gray-400 rounded-md text-gray-500 hover:bg-blue-200 transition-colors">
          Log in
        </button>
        <button className="px-3 py-1.5 bg-main-blue border border-gray-400 rounded-md text-white hover:bg-deep-blue transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
};
