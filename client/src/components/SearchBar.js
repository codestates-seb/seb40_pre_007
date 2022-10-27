export const SerchBarMobile = ({ className }) => {
  return (
    <div className={className}>
      <form className="flex flex-1 items-center relative bg-main-gray">
        {/* 데스크탑 : 돋보기 아이콘 */}
        <div className="text-gray-500 absolute left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-2 h-8 border w-full border-gray-300 rounded-sm focus:outline-none focus:border-main-blue focus:ring-4 focus:ring-blue-100"
        ></input>
      </form>
      {/* 드롭다운 메뉴 */}
      <div className="shadow-lg w-full mt-2 py-2 border border-gray-300 bg-white">
        <ul className="space-y-3 px-4 mb-3">
          <li>
            <strong>[tag]</strong>{" "}
            <span className="text-font-gray">search within a tag</span>
          </li>
          <li>
            <strong>user:1234</strong>{" "}
            <span className="text-font-gray">search by author</span>
          </li>
          <li>
            <strong>{`"words here"`}</strong>{" "}
            <span className="text-font-gray">exact phrase</span>
          </li>
          <li>
            <strong>{`collective:"Name"`}</strong>{" "}
            <span className="text-font-gray">collective content</span>
          </li>
          <li>
            <strong>answers: 0</strong>{" "}
            <span className="text-font-gray">unanswered questions</span>
          </li>
          <li>
            <strong>score:3</strong>{" "}
            <span className="text-font-gray">posts with a 3+ score</span>
          </li>
          <li>
            <strong>is:question</strong>{" "}
            <span className="text-font-gray">type of post</span>
          </li>
          <li>
            <strong>isaccepted:yes</strong>{" "}
            <span className="text-font-gray">search within status</span>
          </li>
        </ul>
        <div className="flex py-3 px-4 border-t-main-gray border-t justify-between items-center">
          <button>Ask a question</button>
          <span className="text-deep-blue text-sm">Search help</span>
        </div>
      </div>
    </div>
  );
};

export const SearchBarDesktop = ({ setIsSearchBarClick, isSearchBarClick }) => {
  return (
    <div className="hidden md:flex flex-col justify-center w-full mr-2">
      <form
        className="flex flex-1 items-center relative"
        onFocus={() => setIsSearchBarClick(true)}
        onBlur={() => setIsSearchBarClick(false)}
      >
        {/* 데스크탑 : 돋보기 아이콘 */}
        <div className="text-gray-500 absolute left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-2 h-8 border w-full border-gray-300 rounded-sm focus:outline-none focus:border-main-blue focus:ring-4 focus:ring-blue-100"
        ></input>
      </form>
      {/* 드롭다운 메뉴 */}
      {isSearchBarClick ? (
        <div className="shadow-lg w-full py-2 absolute top-12 border border-gray-300 rounded-md">
          <ul className="space-y-3 px-4 mb-3">
            <li>
              <strong>[tag]</strong>{" "}
              <span className="text-font-gray">search within a tag</span>
            </li>
            <li>
              <strong>user:1234</strong>{" "}
              <span className="text-font-gray">search by author</span>
            </li>
            <li>
              <strong>{`"words here"`}</strong>{" "}
              <span className="text-font-gray">exact phrase</span>
            </li>
            <li>
              <strong>{`collective:"Name"`}</strong>{" "}
              <span className="text-font-gray">collective content</span>
            </li>
            <li>
              <strong>answers: 0</strong>{" "}
              <span className="text-font-gray">unanswered questions</span>
            </li>
            <li>
              <strong>score:3</strong>{" "}
              <span className="text-font-gray">posts with a 3+ score</span>
            </li>
            <li>
              <strong>is:question</strong>{" "}
              <span className="text-font-gray">type of post</span>
            </li>
            <li>
              <strong>isaccepted:yes</strong>{" "}
              <span className="text-font-gray">search within status</span>
            </li>
          </ul>
          <div className="flex py-3 px-4 border-t-main-gray border-t justify-between items-center">
            <button>Ask a question</button>
            <span className="text-deep-blue text-sm">Search help</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
