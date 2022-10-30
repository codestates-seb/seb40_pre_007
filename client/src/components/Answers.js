import Logo from "../assets/Stack_Overflow-Icon.png";
import { SmallBtn } from "./Buttons";
import { Link } from "react-router-dom";
import { BaseEditor } from "./BaseEditor";

export const Answers = () => {
  const answerCount = 3;
  return (
    <div className="flex flex-col divide-y">
      <span className="pb-2 text-lg md:text-2xl">{answerCount} Answers</span>
      {[1, 1, 1].map((el, i) => (
        <section className="flex w-full divide-y py-4" key={i}>
          <div className="pl-1 mt-2 space-y-5">
            <p className="text-base">
              you can use quicktype it will generate a model from json and give
              you the functions to use to turn a json to model or list or the
              inverse. you can use quicktype it will generate a model from json
              and give you the functions to use to turn a json to model or list
              or the inverse.
            </p>

            {/* share&follow  + 작성자 */}
            <div className="font-[#b5bfc4] flex justify-between items-end">
              {/* buttons */}
              <div className="space-x-3 text-font-gray  text-[11px] md:text-sm ">
                <button type="button" className="cursor-pointer">
                  Share
                </button>
                <button type="button" className="cursor-pointer">
                  Follow
                </button>
              </div>

              {/* Writer info */}
              <div className="pl-2 text-[12px] rounded w-[200px] space-y-2">
                <span className="text-font-gray">asked 1 min ago</span>

                <div className="flex">
                  <img
                    src={Logo}
                    alt="writer profile"
                    className="bg-black rounded w-11 h-11"
                  ></img>

                  <div className="flex flex-col justify-center ml-3 space-y-1">
                    <strong className="font-normal cursor-pointer text-deep-blue">
                      Paul Mariotti
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
      ))}
      <div className="flex w-full flex-col">
        <span className="pb-4 text-lg md:text-2xl py-5">Your Answer</span>
        {/* <div className="flex w-full h-96 bg-main-orange">
          <span className="m-auto text-2xl">에디터 자리</span>
        </div> */}
        <BaseEditor />
        <div className="flex my-6">
          <SmallBtn>Post Your Answer</SmallBtn>
        </div>
        <p>
          {`Not the answer you're looking for?`}
          <Link to={"/ask"} className="text-main-blue hover:text-light-blue">
            {" "}
            ask your own question.
          </Link>
        </p>
      </div>
    </div>
  );
};
