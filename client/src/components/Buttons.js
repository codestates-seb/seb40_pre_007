const ICON_CLASS_NAME = "w-6 h-6";

export const GoogleBtn = ({ text = "Log in" }) => {
  return (
    <button className="w-[300px] box-border bg-white border-button-border-gray border rounded-md py-2 flex justify-center items-center space-x-2 hover:bg-light-gray ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 48 48"
          className={ICON_CLASS_NAME}
        >
          <defs>
            <path
              id="a"
              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            />
          </defs>
          <clipPath id="b">
            <use xlinkHref="#a" overflow="visible" />
          </clipPath>
          <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
          <path
            clipPath="url(#b)"
            fill="#EA4335"
            d="M0 11l17 13 7-6.1L48 14V0H0z"
          />
          <path
            clipPath="url(#b)"
            fill="#34A853"
            d="M0 37l30-23 7.9 1L48 0v48H0z"
          />
          <path
            clipPath="url(#b)"
            fill="#4285F4"
            d="M48 48L17 24l-4-3 35-10z"
          />
        </svg>
      </div>
      <span className="text-sm">{text} with Google</span>
    </button>
  );
};
export const GithubBtn = ({ text = "Log in" }) => {
  return (
    <button className="w-[300px] box-border bg- bg-[#343a40] hover:bg-[#262729] border-button-border-gray border rounded-md py-2 flex justify-center items-center space-x-2 ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={ICON_CLASS_NAME}
          fill="white"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </div>
      <span className="text-sm text-white">{text} with Github</span>
    </button>
  );
};
export const FacebookBtn = ({ text = "Log in" }) => {
  return (
    <button className="w-[300px] box-border bg- bg-[#365899] hover:bg-[#29487D] border-button-border-gray border rounded-md py-2 flex justify-center items-center space-x-2 ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1365.12"
          height="1365.12"
          viewBox="0 0 14222 14222"
          className={ICON_CLASS_NAME}
        >
          <circle cx="7111" cy="7112" r="7111" fill="white" />
          <path
            d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
            fill="#365899"
          />
        </svg>
      </div>
      <span className="text-sm text-white">{text} with Github</span>
    </button>
  );
};

// LagreBtn 사용시 props로 width를 전달할 수 있습니다.
export const LargeBtn = ({ children, width = "full", onClick }) => {
  console.log(onClick);
  return (
    <button
      className={`w-[${width}] bg-main-blue py-[10px] border-button-border-gray border rounded-md  hover:bg-deep-blue focus:outline-none focus:border-main-blue focus:ring-4 focus:ring-blue-100 focus:bg-button-fucous-blue`}
    >
      <span className="text-white text-sm">{children}</span>
    </button>
  );
};

// SmallBtn 사용시 연한 컬러는 bg 프로퍼티에 "button-blue"를 추가해주세요.
export const SmallBtn = ({ children, bg = "main-blue", onClick }) => {
  const [textColor, hoverColor] =
    bg === "main-blue" ? ["white", "deep-blue"] : ["font-gray", "blue-200"];
  return (
    <button
      onClick={onClick}
      className={`bg-${bg} hover:bg-${hoverColor} py-1.5 px-3 flex justify-center items-center border-button-border-blue border rounded-md`}
    >
      <span className={`text-${textColor} text-sm`}>{children}</span>
    </button>
  );
};
