import { AsideNav } from "../../components/AsideNav";
import { NavBar } from "../../components/NavBar";
import { SmallBtn } from "../../components/Buttons";
import { Sidebar } from "../../components/Sidebar";

export const Detail = () => {
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <div className="flex pt-[60px] w-screen justify-center">
        <AsideNav />
        <div className="flex w-full max-w-7xl p-6">
          <div className="w-full ">
            {/* title */}
            <div className="border-b space-y-6 pb-6">
              <div className="flex justify-between ">
                <div className="text-3xl mr-5">
                  질문 타이틀이 이 곳에 보입니다. 아아우우
                </div>
                <SmallBtn>Ask Questions</SmallBtn>
              </div>

              <div className="flex justify-between  items-center">
                <div className="text-sm space-x-2">
                  <span className="text-font-gray">Asked</span>
                  <span>today</span>
                  <span className="text-font-gray">Modified</span>
                  <span>today</span>
                  <span className="text-font-gray">Viewed</span>
                  <span>777 times</span>
                </div>
              </div>
            </div>
            {/* 본문 */}
            <div className="flex pt-3 box-border w-full h-full">
              <div className="flex w-full h-full pt-4 flex-col">
                {/* Contents */}
                <section className="flex flex-col w-full h-full bg-main-orange ">
                  <span className="m-auto text-2xl">Contents 영역❤️</span>
                </section>
                {/* Answer */}
                <section className="flex flex-col w-full h-full bg-main-yellow ">
                  <span className="m-auto text-2xl">Answer 영역❤️</span>
                </section>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
