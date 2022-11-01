/*
 * label : input에 표시할 label 이름입니다.
 * register : react-hook-form 으로 등록해주신 register 객체
 * errorMsg : 프론트단 유효성 검사 실패시 출력할 메시지
 * failedMsg : 서버에서 요청 거부시 출력할 메시지
 */
export const Input = ({
  label,
  register = { name: "text" },
  errorMsg,
  failedMsg,
}) => {
  const error = errorMsg[register.name]?.message || null;

  return (
    <div className="space-y-1 flex flex-col">
      <label htmlFor={register.name} className="font-extrabold text-md">
        {label}
      </label>

      <input
        id={register.name}
        type={register.name}
        className={`
        ${
          error || failedMsg
            ? "focus:border-red-500 focus:ring-red-100"
            : "focus:border-main-blue focus:ring-blue-100 "
        }
        border rounded-md focus:outline-none focus:ring-4 border-input-border-gray py-1.5 px-3 w-full`}
        {...register}
      />

      {errorMsg ? <span className="text-xs text-red-500">{error}</span> : null}
    </div>
  );
};
