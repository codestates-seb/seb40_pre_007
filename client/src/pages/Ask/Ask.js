import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { BaseEditor } from "../../components/BaseEditor";
import { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../client/client";

export const Ask = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const editorRef = useRef(null);

  // .post("/api/boards")
  const handleSubmit = () => {
    client
      .post("/data", {
        title: title,
        content: content,
        createdAt: new Date().toISOString(),
      })
      .then((res) => {
        console.log(res);
        navigate(`/main`);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("submit");
  };

  const handleEditorChange = useCallback(() => {
    if (!editorRef.current) return;

    setContent(editorRef.current.getInstance().getMarkdown());
  }, []);
  console.log(editorRef);
  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex pt-[60px] w-screen justify-center mb-32">
        <div className="flex w-full max-w-7xl">
          <div className="w-full px-6">
            <div className="flex flex-col">
              <div className="flex h-36 w-full font-bold text-3xl items-center mb-14 lg:mb-0 ">
                Ask a public question
              </div>
              <div className="flex h-56 lg:h-80 w-full mb-48 lg:mb-0 items-center">
                <div className="lg:w-[70%]  w-full bg-blue-200 border-2 border-blue-300 rounded-md p-6">
                  <h2 className="text-2xl mb-2">Writing a good question</h2>
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
                  <h5 className="font-bold my-2">Steps</h5>
                  <ul className="mb0 list-disc text-sm pl-7">
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
              <div className="flex h-[19.5rem] w-full mb-54 lg:mb-0 lg:h-64 flex-col-reverse lg:flex-row items-start">
                <div className="lg:w-[70%] w-full my-3 lg:my-0 border border-gray-400 flex-shrink-0 rounded-md">
                  <div className="flex flex-col flex-shrink-0 p-6 w-full">
                    <div className="flex flex-col gap-y-2">
                      <div className="flex flex-col ">
                        <div className="flex--item">
                          <div className="font-bold">Title</div>
                        </div>
                        <div className="d-flex flex--item md:fd-column">
                          <div className="my-2">
                            Be specific and imagine you’re asking a question to
                            another person.
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <input
                          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
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
                      className="w-20 text-white py-4 mt-5 rounded-md bg-main-blue"
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-white w-full border border-gray-400 shadow-md lg:mx-4">
                  <div className="bg-main-gray border border-gray-300 shadow-sm p-4 w-full ">
                    Writing a good title
                  </div>
                  <div className="flex p-4">
                    <div>
                      <svg
                        aria-hidden="true"
                        className="mx-3"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          opacity=".2"
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        ></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                    </div>

                    <div className=" text-sm flex flex-col i">
                      <p className="mb-4">
                        Your title should summarize the problem.
                      </p>
                      <p>
                        You might find that you have a better idea of your title
                        after writing out the rest of the question.
                      </p>
                    </div>
                  </div>
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
                <div className="flex flex-col flex-shrink-0 p-6 w-full">
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
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
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

              <button
                className="w-48 text-white py-4 mt-5 bg-main-blue border-button-border-gray border rounded-md  hover:bg-deep-blue focus:outline-none focus:border-main-blue focus:ring-4 focus:ring-blue-100 focus:bg-button-fucous-blue"
                type="button"
                onClick={handleSubmit}
              >
                Review your question
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
