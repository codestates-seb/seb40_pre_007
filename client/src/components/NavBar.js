import Logo from "../assets/Stack_Overflow-Logo.png";
import Icon from "../assets/Stack_Overflow-Icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SerchBarMobile, SearchBarDesktop } from "./SearchBar";
import { makeClassName } from "../libs/makeClassName";

export const NavBar = () => {
  const [isSearchBarClick, setIsSearchBarClick] = useState(false);

  return (
    <nav className="fixed w-full flex items-center h-[60px] border-t-4 border-t-orange-400 border-b-gray-200 border-b-2 shadow-md pr-4">
      {/* Hambergers */}
      <div className="flex justify-center items-center px-4 hover:bg-main-gray h-full cursor-pointer">
        <div className="flex flex-col w-[18px] h-[30px] space-y-1 justify-center">
          <span className="w-full bg-black h-[2px]"></span>
          <span className="w-full bg-black h-[2px]"></span>
          <span className="w-full bg-black h-[2px]"></span>
        </div>
      </div>
      {/* Icon : 모바일 */}
      <div className="flex justify-center items-center px-[8px] hover:bg-main-gray h-full cursor-pointer md:hidden">
        <Link to={"/"}>
          <img src={Icon} alt="" className="h-[35px]" />
        </Link>
      </div>
      {/* Logo : 데스크탑 */}
      <div className="justify-center items-center px-[8px] hover:bg-main-gray h-full cursor-pointer hidden md:flex">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-[150px] h-[30px]" />
        </Link>
      </div>
      {/* Manu Bar */}
      <div>
        <div className="text-sm text-gray-400">
          <span className="hidden lg:inline py-1.5 px-3 hover:bg-main-gray hover:rounded-full cursor-pointer  hover:text-gray-700">
            About
          </span>
          <span className="py-1.5 px-3 hover:bg-main-gray hover:rounded-full cursor-pointer  hover:text-gray-700">
            Products
          </span>
          <span className="hidden lg:inline py-1.5 px-3 hover:bg-main-gray hover:rounded-full cursor-pointer  hover:text-gray-700">
            For Teams
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full h-full flex-1 flex relative">
        {/* 모바일 */}
        <div className="flex md:hidden flex-1 w-full h-full ">
          {/* 모바일 : 돋보기 아이콘 */}
          <div
            className="flex justify-center items-center px-4 hover:bg-main-gray h-full cursor-pointer ml-auto"
            onClick={() => setIsSearchBarClick(!isSearchBarClick)}
            role="presentation"
          >
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
        <SearchBarDesktop
          setIsSearchBarClick={setIsSearchBarClick}
          isSearchBarClick={isSearchBarClick}
        />
      </div>

      {/* 드롭다운 모바일 */}
      {isSearchBarClick ? (
        <SerchBarMobile
          className={makeClassName(
            "absolute top-16 w-full flex-col px-5 flex md:hidden"
          )}
        />
      ) : null}

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
