import { AsideNav } from "../../components/AsideNav";
import { NavBar } from "../../components/NavBar";
import { Question } from "../../components/Question";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";
import { LargeBtn } from "../../components/Buttons";
import { client } from "../../client/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const getUserData = async () => {
    const response = await client.get("/data");
    setUserData(response.data);
  };

  const askClick = (e) => {
    e.preventDefault();
    navigate(`/ask`);
  };

  useEffect(() => {
    getUserData();
  }, []);

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
              {userData.map((data) => {
                return (
                  <Question
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    content={data.content}
                    boardStatus={data.boardStatus}
                  />
                );
              })}
            </ul>
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};
