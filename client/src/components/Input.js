export const Input = ({ label, register = "text" }) => {
  console.log(register);
  return (
    <div className="space-y-1 flex flex-col">
      <label htmlFor={register.name} className="font-extrabold text-md">
        {label}
      </label>
      <input
        id={register.name}
        type={register.name}
        className="border  rounded-md focus:outline-none focus:border-main-blue focus:ring-4 focus:ring-blue-100 border-input-border-gray py-1.5 px-3 w-full"
        required
        {...register}
      />
    </div>
  );
};
