import Logo from "../assets/Stack_Overflow-Icon.png";
import { SmallBtn } from "./Buttons";
import { Link } from "react-router-dom";
import { BaseEditor } from "./BaseEditor";
import { useCallback, useRef, useState } from "react";
import { client } from "../client/client";

export const Answers = ({ answerList, setAnswerList, id }) => {
  const answerCount = answerList.length;

  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  const handleEditorChange = useCallback(() => {
    if (!editorRef.current) return;
    setContent(editorRef.current.getInstance().getMarkdown());
  }, []);

  const onAnswerSubmit = () => {
    client
      .post(`/api/${id}/answers`, {
        content,
      })
      .then((res) => {
        console.log(res);
        setAnswerList([...answerList, { content }]);
      })
      .catch((err) => console.err(err));
  };

  return (
    <div className="flex flex-col divide-y">
      <span className="pb-2 text-lg md:text-2xl">{answerCount} Answers</span>
      {answerList.map((el, i) => (
        <section className="flex w-full divide-y py-4" key={i}>
          <div className="pl-1 mt-2 space-y-5 w-full">
            <p className="text-base">{el.content}</p>

            {/* share&follow  + 작성자 */}
            <div className="font-[#b5bfc4] flex justify-between items-end">
              {/* buttons */}
              <div className="space-x-3 text-font-gray text-[11px] md:text-sm ">
                <button type="button" className="cursor-pointer">
                  Edit
                </button>
                <button type="button" className="cursor-pointer">
                  Delete
                </button>
              </div>

              {/* Writer info */}
              <div className="pl-2 text-[12px] rounded w-[200px] space-y-2">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <div className="flex w-full flex-col">
        <span className="pb-4 text-lg md:text-2xl py-5">Your Answer</span>
        <BaseEditor
          value={content}
          height="300px"
          setContent={setContent}
          editorRef={editorRef}
          onChange={handleEditorChange}
        />
        <div className="flex my-6">
          <SmallBtn onClick={onAnswerSubmit}>Post Your Answer</SmallBtn>
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

/*
height = "500px",
  value,
  editorRef,
  onChange,

<BaseEditor
  value={content}
  height="600px"
  setContent={setContent}
  editorRef={editorRef}
  onChange={handleEditorChange}
/>

const handleEditorChange = useCallback(() => {
  if (!editorRef.current) return;

  setContent(editorRef.current.getInstance().getMarkdown());
}, []);

*/
