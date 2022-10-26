import { AsideNav } from "../../components/AsideNav";
import { NavBar } from "../../components/NavBar";

export const Main = () => {
  return (
    //justify-content: center;
    <div className="flex h-screen w-screen">
      <NavBar />
      <div className="flex pt-[60px] w-screen justify-center">
        <AsideNav />
        <div className="flex w-full max-w-7xl">
          <div className="w-full">
            <div className="flex justify-between mb-6 p-6">
              <div className="text-3xl">All Questions</div>
              <button>Ask Questions</button>
            </div>
            <div className="flex justify-between p-6 items-center">
              <div className="text-lg">777 questions</div>

              <span className="inline-flex divide-x divide-dark-gray overflow-hidden rounded-md border border-dark-gray bg-white shadow-sm">
                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray focus:relative"
                  title="Newest Product"
                >
                  Newest
                </button>

                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray  focus:relative"
                  title="Oldest Product"
                >
                  Oldest
                </button>
                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray  focus:relative"
                  title="interest Product"
                >
                  interest
                </button>

                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray  focus:relative"
                  title="votes Product"
                >
                  votes
                </button>
              </span>
            </div>

            <ul className="pr-6 divide-y divide-line-gray">
              <li className="flex flex-nowrap p-4 w-full border border-x-0 border-b-0 border-t-line-gray bg-main-yellow ">
                <div className="flex flex-col  w-28 flex-shrink-0 items-end text-font-gray mr-5 gap-1">
                  <div className="text-sm text-black">0 votes</div>
                  <div className="text-sm">10 answers</div>
                  <div className="text-sm">100 views</div>
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div className="text-lg text-blue-500">
                    Script to copy all text from one file into template file
                  </div>
                  <div className="flex justify-end pr-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-main-gray rounded-lg p-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <div className="text-blue-500 mx-2">seunghwan</div>
                    <div> asked 6 hours ago</div>
                  </div>
                </div>
              </li>
              <li className="flex flex-nowrap p-4 w-full border border-x-0 border-b-0 border-t-line-gray bg-main-yellow ">
                <div className="flex flex-col  w-28 flex-shrink-0 items-end text-font-gray mr-5 gap-1">
                  <div className="text-sm text-black">0 votes</div>
                  <div className="text-sm">10 answers</div>
                  <div className="text-sm">100 views</div>
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div className="text-lg text-blue-500">
                    Script to copy all text from one file into template file
                  </div>
                  <div className="flex justify-end pr-5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-main-gray rounded-lg p-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <div className="text-blue-500 mx-2">seunghwan</div>
                    <div> asked 6 hours ago</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <aside className="bg-blue-200 w-96 p-6 lg:block hidden">aside</aside>
        </div>
      </div>
    </div>
  );
};
