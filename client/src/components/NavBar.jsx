// import Logo from "../assets/Stack_Overflow-Logo.png";
import Icon from "../assets/Stack_Overflow-Icon.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full flex  items-center h-[50px] border-t-4 border-t-orange-400 border-b-gray-200 border-b-2 shadow-sm">
      {/* 햄버거 바 */}
      <div className="flex flex-col w-[23px] h-[30px] ml-6 space-y-1 justify-center">
        <span className="w-full bg-black h-[2px]"></span>
        <span className="w-full bg-black h-[2px]"></span>
        <span className="w-full bg-black h-[2px]"></span>
      </div>
      {/* 로고 */}
      <Link to={"/"}>
        <img src={Icon} alt="" className="h-[35px] ml-6" />
      </Link>
      {/* 메뉴바 */}
      <div className="space-x-5 text-sm text-gray-400 ">
        <span className="hidden">About</span>
        <span className="">Products</span>
        <span className="hidden">For Teams</span>
      </div>
    </nav>
  );
}
