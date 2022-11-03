import Logo from "../assets/Stack_Overflow-Logo.png";
import Icon from "../assets/Stack_Overflow-Icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SerchBarMobile, SearchBarDesktop } from "./SearchBar";
import { makeClassName } from "../libs/makeClassName";
import { NavBarBtns } from "./NavBarBtns";
import { SmallBtn } from "./Buttons";

import { useRecoilState } from "recoil";
import { isLoginState } from "../recoil/atoms";

export const NavBar = () => {
  // searchBar 드롭다운 관련 상태
  const [isSearchBarClick, setIsSearchBarClick] = useState(false);

  // redirect
  const naviagte = useNavigate();

  // 로그인 관련 전역 상태
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  // 로그인 버튼 : 로그인 페이지로 이동
  const onLogin = () => {
    naviagte("/login");
  };

  // 로그아웃 버튼
  const onLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    naviagte("/");
  };

  const confirmLogout = () => {
    if (confirm("정말 로그아웃 하시겠습니까?")) {
      onLogout();
    }
  };

  return (
    <header className="bg-white fixed w-screen flex items-center h-[60px] border-t-4 border-t-orange-400 border-b-gray-200 shadow-md pr-4 lg:justify-center top-0 md:pl-1 z-10">
      <div className="flex w-full items-center max-w-[1450px] h-full">
        {/* Hambergers */}
        <div className="flex justify-center items-center px-4 hover:bg-main-gray h-full cursor-pointer md:hidden">
          <div className="flex flex-col w-[18px] h-[30px] space-y-1 justify-center">
            <span className="w-full bg-black h-[2px]"></span>
            <span className="w-full bg-black h-[2px]"></span>
            <span className="w-full bg-black h-[2px]"></span>
          </div>
        </div>
        {/* Icon : 모바일 */}
        <div className="flex shrink-0 justify-center items-center px-[8px] hover:bg-main-gray h-full cursor-pointer md:hidden ">
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
          {/* 데스크탑 */}
          <SearchBarDesktop
            setIsSearchBarClick={setIsSearchBarClick}
            isSearchBarClick={isSearchBarClick}
          />
        </div>
        {/* Search Bar + 드롭다운 모바일 */}
        {isSearchBarClick ? (
          <SerchBarMobile
            className={makeClassName(
              "absolute top-16 w-full flex-col px-5 flex md:hidden bg-white"
            )}
          />
        ) : null}
        {/* Btns */}
        {isLogin ? (
          <>
            <div className="flex h-full">
              <NavBarBtns id="hi" />
            </div>
            <SmallBtn bg={"button-blue"} onClick={confirmLogout}>
              Log out
            </SmallBtn>
          </>
        ) : (
          <div className="space-x-2 flex">
            <SmallBtn bg={"button-blue"} onClick={onLogin}>
              Log in
            </SmallBtn>
            <Link to={"/signup"}>
              <SmallBtn>Sign up</SmallBtn>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
