import { AsideNav } from "../../components/AsideNav";
import { NavBar } from "../../components/NavBar";
import { SmallBtn } from "../../components/Buttons";
import { Contents } from "../../components/Contents";
// import { Sidebar } from "../../components/Sidebar";
// import { Footer } from "../../components/Footer";

export const Detail = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavBar />
      <div className="flex pt-[60px] w-screen justify-center">
        <AsideNav />
        <div className="flex w-full p-6 max-w-7xl">
          <div className="w-full ">
            {/* title */}
            <div className="pb-6 space-y-6 border-b">
              <div className="flex justify-between">
                <div className="mr-5 text-3xl">
                  질문 타이틀이 이 곳에 보입니다. 아아우우
                </div>
                <SmallBtn>Ask Questions</SmallBtn>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-x-2 text-sm">
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
            <div className="box-border flex flex-col w-full h-full pt-3 lg:flex-row">
              <div className="flex flex-col w-full px-2">
                {/* Contents */}
                {/* <span className="m-auto text-2xl">Contents 영역❤️</span> */}
                <Contents />
                {/* Answer */}
                <section className="flex flex-col w-full h-full bg-main-yellow ">
                  <span className="m-auto text-2xl">Answer 영역❤️</span>
                </section>
              </div>
              {/* <Sidebar /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
