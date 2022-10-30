export const Sidebar = () => {
  return (
    <>
      <aside className="box-border flex-col h-full p-4 space-y-4 lg:flex">
        <ul className="shadow-md h-[540px] text-sm bg-main-yellow border border-border-yellow rounded lg:w-80">
          <li className="px-4 py-3 font-bold border-b text-font-gray border-border-yellow bg-light-yellow">
            The overflow Blog
          </li>

          <li className="flex px-4 my-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            </div>

            <span className="pl-2">
              A flight simulator for developers to practice real world
              challenges and...
            </span>
          </li>

          <li className="flex px-4 my-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            </div>

            <span className="pl-2">
              Goodbye Webpack, hello Turbopack! The big news from today’s
              Next.JS conference
            </span>
          </li>

          <li className="px-3 py-4 font-bold border-t border-b border-border-yellow text-font-gray bg-light-yellow">
            Featured on Meta
          </li>

          <li className="flex px-4 my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-5 h-5 stroke-main-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>

            <span className="pl-2">The 2022 Community-a-thon has begun!</span>
          </li>

          <li className="flex px-4 my-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-5 h-5 stroke-main-blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </div>

            <span className="pl-2">
              Mobile app infrastructure being decommissioned
            </span>
          </li>

          <li className="flex px-4 my-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>
            </div>

            <span className="pl-2">
              Staging Ground Workflow: Canned Comments
            </span>
          </li>

          <li className="flex px-4 my-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>
            </div>

            <span className="pl-2">The Ask Wizard (2022) has graduated</span>
          </li>

          <li className="px-3 py-4 font-bold border-t border-b text-font-gray bg-light-yellow">
            Hot Meta Posts
          </li>

          <li className="flex px-4 my-3">
            <span>5</span>
            <span className="pl-3">What should be done about [explode]?</span>
          </li>
        </ul>

        <div className="flex flex-col font-light border rounded shadow-md lg:w-80">
          <strong className="px-4 py-3 border-b text-md h-11 text-font-gray bg-light-gray">
            Custom Filters
          </strong>
          <span className="px-4 py-2 my-4 h-11 text-deep-blue">
            Create a custom filter
          </span>
        </div>

        <div className="flex flex-col h-[275px] border rounded shadow-md lg:w-80 font-light">
          <strong className="px-4 py-3 border-b h-11 text-font-gray text-md bg-light-gray">
            Watched Tags
          </strong>

          <div className="flex flex-col items-center px-4 py-3 ">
            <div className="py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-12 h-12 stroke-main-blue"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <span className="mb-4 text-center">
              Watch a tags to curate your list of questions.
            </span>

            <div className="bg-button-blue">
              <button
                type="button"
                className="flex items-center justify-center p-2.5 border rounded-sm border-button-border-blue text-button-border-blue hover:bg-[#95c8ed]"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Watch a tag</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col font-light border shadow-md">
          <strong className="px-4 py-3 border-b h-11 text-font-gray text-md bg-light-gray">
            Ignored Tags
          </strong>
          <div className="flex justify-center px-3 py-3">
            <button
              type="button"
              className="p-2 border rounded-sm border-button-border-blue bg-button-blue text-button-border-blue hover:bg-[#95c8ed]"
            >
              Add an ignored tag
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
