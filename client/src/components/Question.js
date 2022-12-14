import { useNavigate } from "react-router-dom";
import { ElapsedTime } from "./ElapsedTime";

export const Question = ({
  id,
  title,
  content,
  accountNickName,
  createdAt,
  answerCount,
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${id}`);
  };

  return (
    <li className="flex flex-nowrap p-4 w-full border border-x-0 border-b-0 border-t-line-gray ">
      <div className="flex flex-col  w-28 flex-shrink-0 items-end text-font-gray mr-5 gap-1">
        <div className="text-sm">{answerCount} answers</div>
      </div>
      <div className="flex flex-col justify-between w-full">
        <button
          onClick={handleClick}
          className="text-lg text-left text-blue-500"
        >
          {title}
        </button>
        <div className="text-lg ">{content}</div>
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
          <div className="text-blue-500 mx-2">{accountNickName}</div>
          <div>{ElapsedTime(createdAt)}</div>
        </div>
      </div>
    </li>
  );
};
