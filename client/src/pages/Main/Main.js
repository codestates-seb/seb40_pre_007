import { AsideNav } from "../../components/AsideNav";
import { NavBar } from "../../components/NavBar";
import { Question } from "../../components/Question";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";
import { LargeBtn } from "../../components/Buttons";
import { client } from "../../client/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../../recoil/atoms";

export const Main = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [pageData, setPageData] = useState({
    totalPages: 0,
    totalElements: 0,
  });
  const [page, setPage] = useState(1);
  const isLogin = useRecoilValue(isLoginState);

  const getUserData = async () => {
    const response = await client.get(`/api/boards?page=${page}`);

    setPageData({
      totalPages: response.data.pageInfo.totalPages,
      totalElements: response.data.pageInfo.totalElements,
    });
    setUserData(response.data.data);
  };

  const interestFilter = (e) => {
    e.preventDefault();
    const data = userData.slice();
    data.sort((a, b) => {
      return b.answerList.length - a.answerList.length;
    });
    setUserData(data);
  };

  const askClick = (e) => {
    e.preventDefault();
    if (!isLogin) {
      alert("로그인이 필요한 서비스입니다.");
      navigate(`/`);
      return;
    }
    navigate(`/ask`);
  };

  useEffect(() => {
    getUserData();
  }, [page]);

  const NewestFilter = (e) => {
    e.preventDefault();
    const data = userData.slice();
    data.sort((a, b) => {
      return -a.createdAt.localeCompare(b.createdAt);
    });

    setUserData(data);
  };

  const OldestFilter = (e) => {
    e.preventDefault();
    const data = userData.slice();
    data.sort((a, b) => {
      return a.createdAt.localeCompare(b.createdAt);
    });
    setUserData(data);
  };

  const checkPageClick = (data) => {
    if (page + data > 0 && page + data <= pageData.totalPages) {
      setPage(page + data);
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <NavBar />
      <div className="flex pt-[60px] w-screen justify-center">
        <AsideNav />
        <div className="flex w-full max-w-7xl flex-col md:flex-row">
          <div className="w-full">
            <div className="flex justify-between p-6 mb-6">
              <div className="text-3xl">All Questions</div>
              <LargeBtn onClick={askClick} width="150px">
                Ask Questions
              </LargeBtn>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="text-lg">{pageData.totalElements} questions</div>

              <span className="inline-flex overflow-hidden bg-white border divide-x rounded-md shadow-sm divide-dark-gray border-dark-gray">
                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray focus:bg-main-gray"
                  title="Newest Product"
                  onClick={NewestFilter}
                >
                  Newest
                </button>

                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray focus:bg-main-gray"
                  title="Oldest Product"
                  onClick={OldestFilter}
                >
                  Oldest
                </button>
                <button
                  className="inline-block p-2 text-gray-700 hover:bg-main-gray focus:bg-main-gray"
                  title="interest Product"
                  onClick={interestFilter}
                >
                  interest
                </button>
              </span>
            </div>

            <ul className="pr-6 divide-y divide-line-gray pb-80">
              {userData.map((data, i) => {
                return (
                  <Question
                    accountNickName={data.accountNickName}
                    key={i}
                    id={data.boardId}
                    title={data.title}
                    content={data.content}
                    boardStatus={data.boardStatus}
                    createdAt={data.createdAt}
                  />
                );
              })}

              <nav
                className="isolate -space-x-px rounded-md p-5"
                aria-label="Pagination"
              >
                <button
                  className="relative inline-flex items-center rounded-l-md border border-gray-300 
                           bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  onClick={() => checkPageClick(-1)}
                >
                  Previous
                </button>

                {[...Array(parseInt(pageData.totalPages))].map((n, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setPage(index + 1);
                      }}
                      className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex
                  focus:bg-indigo-50 focus:font-medium focus:text-indigo-600
                  "
                    >
                      {index + 1}
                    </button>
                  );
                })}

                <button
                  className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  onClick={() => checkPageClick(1)}
                >
                  Next
                </button>
              </nav>
            </ul>
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};
