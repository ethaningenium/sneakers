const Input = ({ type, name, register, placeholder }) => {
  return (
    <div className="flex p-2 bg-zinc-100 rounded-xl relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
        className="bg-transparent placeholder:text-zinc-400 focus:outline-none"
      ></input>
    </div>
  );
};

export default Input;
