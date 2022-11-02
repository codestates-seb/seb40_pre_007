// import { useState } from "react";
import Logo from "../assets/Stack_Overflow-Icon.png";
import { client } from "../client/client";
import { useNavigate } from "react-router-dom";

//setUserData
export const Contents = ({ userData }) => {
  const navigate = useNavigate();

  // const [vote, setVote] = useState(data.evaluation);
  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization: "Bearer { jwt 토큰 값}",
  // };

  const handleEdit = () => {
    navigate("/edit", { state: userData });
  };

  const handleDelete = () => {
    client
      .delete(`/api/boards/${userData.id}`)
      .then(() => {
        console.log("deleted successfully!");
        navigate(`/main`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="flex w-full">
      {/* 추천 Button */}
      <div className="flex flex-col items-center justify-around w-8 mx-4 h-44">
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#b5bfc4"
            className="w-10 h-10 cursor-pointer"
            // onClick={console.log(vote)}
          >
            <path
              fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>

          <span className="text-2xl font-medium text-center text-dark-gray">
            {userData.votes}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#b5bfc4"
            className="w-10 h-10 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* bookmark icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className="w-5 h-6 cursor-pointer stroke-dark-gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
        {/* activity */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className="w-5 h-5 cursor-pointer stroke-dark-gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {/* 질문*/}
      <div className="w-full pl-1 mt-2">
        <p className="text-base">{userData.content}</p>

        {/* 태그 */}
        <div className="mt-4 mb-10 space-x-2">
          <span className="px-2 py-1 rounded cursor-pointer text-button-border-blue bg-tag-blue">
            react
          </span>
          <span className="px-2 py-1 rounded cursor-pointer text-button-border-blue bg-tag-blue">
            javascript
          </span>
          <span className="px-2 py-1 rounded cursor-pointer text-button-border-blue bg-tag-blue">
            codestates
          </span>
        </div>

        {/* share&follow  + 작성자 */}
        <div className="font-[#b5bfc4] flex justify-between">
          {/* buttons */}
          <div className="space-x-3 text-font-gray text-[11px] md:text-sm ">
            <button type="button" className="cursor-pointer">
              Share
            </button>
            <button
              onClick={handleEdit}
              type="button"
              className="cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="cursor-pointer"
            >
              Delete
            </button>
            <button type="button" className="cursor-pointer">
              Follow
            </button>
          </div>

          {/* Writer info */}
          <div className="p-2 text-[12px] rounded bg-tag-blue w-[200px] space-y-2">
            <span className="text-font-gray">asked 1 min ago</span>

            <div className="flex">
              <img
                src={Logo}
                alt="writer profile"
                className="bg-black rounded w-11 h-11"
              ></img>

              <div className="flex flex-col justify-center ml-3 space-y-1">
                <strong className="font-normal cursor-pointer text-deep-blue">
                  {userData.accountNickName}
                </strong>

                <div className="flex space-x-2">
                  <span className="font-bold text-font-gray">11</span>

                  <div className="flex items-center space-x-1">
                    <div className="bg-[#d0a684] rounded-md w-[7px] h-[7px]">
                      {" "}
                    </div>
                    <span className="text-dark-gray">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
