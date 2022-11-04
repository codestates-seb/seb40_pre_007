import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { BaseEditor } from "../../components/BaseEditor";
import { useRef, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { client } from "../../client/client";

export const Edit = () => {
  const { state } = useLocation();
  const [title, setTitle] = useState(state.title);
  const [content, setContent] = useState(state.content);
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const handleEditSubmit = () => {
    client
      .patch(`/api/boards/${state.boardId}`, {
        title: title,
        content: content,
      })
      .then(() => {
        navigate(`/${state.boardId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditorChange = useCallback(() => {
    if (!editorRef.current) return;

    setContent(editorRef.current.getInstance().getMarkdown());
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <NavBar />
      <div className="flex pt-[60px] w-screen justify-center mb-32">
        <div className="flex w-full max-w-7xl">
          <div className="w-full px-6">
            <div className="flex flex-col">
              <div className="flex items-center w-full h-56 mb-48 lg:h-80 lg:mb-0">
                <div className="lg:w-[70%]  w-full bg-blue-200 border-2 border-blue-300 rounded-md p-6">
                  <h2 className="mb-2 text-2xl">Writing a good question</h2>
                  <p className="mb-0">
                    You’re ready to
                    <a
                      className="text-blue-500"
                      href="https://stackoverflow.com/help/how-to-ask"
                    >
                      {" ask "}
                    </a>
                    {"a "}
                    <a
                      className="text-blue-500"
                      href="https://stackoverflow.com/help/on-topic"
                    >
                      programming-related question
                    </a>
                    and this form will help guide you through the process.
                  </p>
                  <p className="mb-4">
                    Looking to ask a non-programming question? See
                    <a
                      className="text-blue-500"
                      href="https://stackexchange.com/sites#technology-traffic"
                    >
                      {" the topics here "}
                    </a>
                    to find a relevant site.
                  </p>
                  <h5 className="my-2 font-bold">Steps</h5>
                  <ul className="text-sm list-disc mb0 pl-7">
                    <li className="list-item ">
                      Summarize your problem in a one-line title.
                    </li>
                    <li>Describe your problem in more detail.</li>
                    <li>
                      Describe what you tried and what you expected to happen.
                    </li>
                    <li>
                      Add “tags” which help surface your question to members of
                      the community.
                    </li>
                    <li>Review your question and post it to the site.</li>
                  </ul>
                </div>
              </div>
              <div className="flex lg:justify-between h-[19.5rem] w-full mb-54 lg:mb-0 lg:h-64 flex-col-reverse lg:flex-row items-start">
                <div className="lg:w-[70%] w-full my-3 lg:my-0 border border-gray-400 flex-shrink-0 rounded-md">
                  <div className="flex flex-col flex-shrink-0 w-full p-6">
                    <div className="flex flex-col gap-y-2">
                      <div className="flex flex-col ">
                        <div className="flex--item">
                          <div className="font-bold">Title</div>
                        </div>
                      </div>
                      <div className="flex">
                        <input
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
                          id="title"
                          name="title"
                          type="text"
                          maxLength="300"
                          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                          data-min-length="15"
                          data-max-length="150"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      className="w-20 py-4 mt-5 text-white rounded-md bg-main-blue"
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className="hidden flex-col border rounded shadow-md w-[350px] ml-2text-sm bg-main-yellow border-border-yellow lg:flex">
                  <div className="px-4 py-3 font-normal list-none border-b text-font-gray border-border-yellow bg-light-yellow">
                    How to Edit
                  </div>

                  <ul className="px-8 py-4 space-y-2 list-disc">
                    <li className="">Correct minor typos or mistakes</li>
                    <li className="">Clarify meaning without changing it</li>
                    <li className="">Add related resources or links</li>
                    <li className="">
                      Always respect the author&apos;s intent
                    </li>
                    <li className="">
                      Don&apos;t use edits reply to the author
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-[70%] w-full border border-gray-400 rounded-md p-6">
                <div className="flex flex-col">
                  <div className="flex--item">
                    <div className="font-bold">Contents</div>
                  </div>
                  <div className="d-flex flex--item md:fd-column">
                    <div className="my-4">
                      Introduce the problem and expand what you put in the
                      title. Also describe what you tried, what you expected to
                      happen, and what actually happened. A minimum of 20
                      characters.
                    </div>
                  </div>
                </div>
                <BaseEditor
                  value={content}
                  height="600px"
                  setContent={setContent}
                  editorRef={editorRef}
                  onChange={handleEditorChange}
                />
              </div>
              <div className="lg:w-[70%] w-full my-3 border border-gray-400 flex-shrink-0 rounded-md">
                <div className="flex flex-col flex-shrink-0 w-full p-6">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col ">
                      <div className="flex--item">
                        <div className="font-bold">Tags</div>
                      </div>
                      <div className="d-flex flex--item md:fd-column">
                        <div className="my-2">
                          Add up to 5 tags to describe what your question is
                          about. Start typing to see suggestions.
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
                        id="title"
                        name="title"
                        type="text"
                        maxLength="300"
                        placeholder="e.g. (ajax objective-c r)"
                        data-min-length="15"
                        data-max-length="150"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* save edits BTN */}
              <button
                className="w-48 py-4 mt-5 text-white border rounded-md bg-main-blue border-button-border-gray hover:bg-deep-blue focus:outline-none focus:border-main-blue focus:ring-4 focus:ring-blue-100 focus:bg-button-fucous-blue"
                type="button"
                onClick={handleEditSubmit}
              >
                Save edits
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
