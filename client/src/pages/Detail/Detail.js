import { AsideNav } from "../../components/AsideNav";
import { NavBar } from "../../components/NavBar";
import { SmallBtn } from "../../components/Buttons";
import { Contents } from "../../components/Contents";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";
import { Answers } from "../../components/Answers";
import { useParams, Link } from "react-router-dom";
import { client } from "../../client/client";
import { useState, useEffect } from "react";

export const Detail = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    client
      .get(`/api/boards/${id}`)
      .then((res) => {
        setUserData(res.data.data);
        setAnswerList(res.data.data.answerList);
      })
      .catch((err) => console.log(err));
  }, []);

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
                <div className="mr-5 text-3xl">{userData.title}</div>
                <Link to={"/ask"}>
                  <SmallBtn>Ask Questions</SmallBtn>
                </Link>
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
                <Contents userData={userData} setUserData={setUserData} />
                <Answers
                  answerList={answerList}
                  setAnswerList={setAnswerList}
                  id={userData.boardId}
                />
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
