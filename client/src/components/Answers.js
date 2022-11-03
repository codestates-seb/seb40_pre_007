import Logo from "../assets/Stack_Overflow-Icon.png";
import { SmallBtn } from "./Buttons";
import { Link, useNavigate } from "react-router-dom";
import { BaseEditor } from "./BaseEditor";
import { useCallback, useRef, useState } from "react";
import { client } from "../client/client";
import { useRecoilValue } from "recoil";
import { userNameState } from "../recoil/atoms";
import { isLoginState } from "../recoil/atoms";

export const Answers = ({ answerList, id }) => {
  const answerCount = answerList.length;
  const isLogin = useRecoilValue(isLoginState);
  const navigate = useNavigate();

  // 답변 생성
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
      .then(() => {
        location.reload();
      })
      .catch((err) => {
        console.error(err);
        if (!isLogin) {
          alert("로그인이 필요한 서비스 입니다.");
          navigate("/");
        } else {
          alert("입력된 내용을 확인해주세요!");
        }
      });
  };

  // 답변 수정
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState(null);

  const handleAnswerEditorChange = useCallback(() => {
    if (!editorRef.current) return;
    setEditContent(editorRef.current.getInstance().getMarkdown());
  }, []);

  const onEdit = (e, value) => {
    setIsEdit(true);
    setEditId(e.target.id);
    setEditContent(value);
  };

  const onSubmitEdit = () => {
    client
      .patch(`/api/answers/${editId}`, {
        content: editContent,
      })
      .then((res) => {
        console.log(res);
        setIsEdit(false);
        location.reload();
      })
      .catch((err) => {
        console.error(err);
        alert("올바르지 않은 접근입니다. 내용을 확인해주세요!");
      });
  };

  // 답변 삭제
  const confirmDelete = (e) => {
    if (confirm("정말 답변을 삭제하시겠습니까?")) {
      onDelete(e.target.id);
    }
  };

  const onDelete = (answerId) => {
    client
      .delete(`/api/answers/${answerId}`, {})
      .then(() => {
        location.reload();
      })
      .catch((err) => {
        console.error(err);
        alert("올바르지 않은 접근입니다");
      });
  };

  // 수정, 삭제 접근 버튼
  const currentUser = useRecoilValue(userNameState);

  return (
    <div className="flex flex-col divide-y">
      <span className="pb-2 text-lg md:text-2xl border-b">
        {answerCount} Answers
      </span>
      {answerList.map((el, i) => {
        return isEdit && el.answerId === +editId ? (
          <div key={id} className="flex my-5 flex-col">
            <BaseEditor
              value={el.content}
              height="300px"
              setContent={setEditContent}
              editorRef={editorRef}
              onChange={handleAnswerEditorChange}
            />
            <div className="flex mt-4">
              <SmallBtn onClick={onSubmitEdit}>Edit Your Answer</SmallBtn>
            </div>
          </div>
        ) : (
          <section className="flex w-full divide-y py-4" key={i}>
            <div className="pl-1 mt-2 space-y-5 w-full">
              <p className="text-base">{el.content}</p>

              {/* share&follow  + 작성자 */}
              <div className="font-[#b5bfc4] flex justify-between items-end">
                {/* buttons */}
                {currentUser === el.accountNickName ? (
                  <div className="space-x-3 text-font-gray text-[11px] md:text-sm ">
                    <button
                      type="button"
                      className="cursor-pointer"
                      id={el.answerId}
                      onClick={(e) => onEdit(e, el.content)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={confirmDelete}
                      type="button"
                      className="cursor-pointer"
                      id={el.answerId}
                    >
                      Delete
                    </button>
                  </div>
                ) : null}

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
                        {el.accountNickName}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
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
