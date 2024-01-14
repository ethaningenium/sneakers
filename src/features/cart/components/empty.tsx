import diamond from "../assets/diamond.png";

export const EmptyCart = () => {
  return (
    <div className="w-full flex-col flex justify-center items-center h-96 gap-2 bg-white">
      <img src={diamond} alt="diamond" className="w-36 h-36" />
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-semibold text-gray-700 text-center">
          Ваша корзина
          <br />в данный момент пуста. 🛒
        </h2>

        <button className="px-5 py-3 rounded-2xl bg-orange-500 text-white">
          Продолжить покупку
        </button>
      </div>
    </div>
  );
};
