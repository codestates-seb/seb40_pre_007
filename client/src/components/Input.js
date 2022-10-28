export const Input = ({ label, id }) => {
  return (
    <div className="space-y-1 flex flex-col">
      <label htmlFor={id} className="font-extrabold text-md">
        {label}
      </label>
      <input
        id={id}
        type="email"
        className="border  rounded-md focus:outline-none focus:border-main-blue focus:ring-4 focus:ring-blue-100 border-input-border-gray py-1.5 px-3 w-full"
      />
    </div>
  );
};
