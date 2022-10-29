import { AsideNav } from "../../components/AsideNav";
import { NavBar } from "../../components/NavBar";
import { Question } from "../../components/Question";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";

export const Main = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavBar />
      <div className="flex pt-[60px] w-screen justify-center">
        <AsideNav />
        <div className="flex w-full max-w-7xl">
          <div className="w-full">
            <div className="flex justify-between p-6 mb-6">
              <div className="text-3xl">All Questions</div>
              <button>Ask Questions</button>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="text-lg">777 questions</div>

              <span className="inline-flex overflow-hidden bg-white border divide-x rounded-md shadow-sm divide-dark-gray border-dark-gray">
                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray focus:bg-main-gray"
                  title="Newest Product"
                >
                  Newest
                </button>

                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray focus:bg-main-gray"
                  title="Oldest Product"
                >
                  Oldest
                </button>
                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray focus:bg-main-gray"
                  title="interest Product"
                >
                  interest
                </button>

                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray focus:bg-main-gray"
                  title="votes Product"
                >
                  votes
                </button>
              </span>
            </div>

            <ul className="pr-6 divide-y divide-line-gray">
              <Question />
            </ul>
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};
