export const ItemCardLoading = () => {
  return (
    <div className="flex-1 min-w-72 flex-col gap-6 flex p-4 bg-gray-100 shadow-2xl shadow-black/10 rounded-2xl relative select-none">
      <button className="animate-pulse absolute top-6 right-6 rounded-full w-10 h-10 cursor-pointer bg-gray-500"></button>
      <div className="animate-pulse h-56 w-full object-cover rounded-xl bg-gray-300" />
      <div className="w-full flex flex-col gap-1 items-center">
        <h3 className="animate-pulse text-sm font-light text-gray-300 line-clamp-1 bg-gray-300 rounded-2xl">
          titledfddfdfdfdfdfdfdfdtitledfddfdfdfdfdfdf
        </h3>
        <h2 className="animate-pulse text-xl font-semibold text-gray-300 bg-gray-300 rounded-2xl">
          pricesdssdssdsds
        </h2>
        <div className="w-full flex gap-2 mt-8">
          <button className="animate-pulse bg-gray-300 text-gray-300 py-3 w-full rounded-3xl">
            Подробнее
          </button>

          <button className="animate-pulse bg-gray-300 text-gray-300 py-3 w-full rounded-3xl">
            {" "}
            в Корзину
          </button>
        </div>
      </div>
    </div>
  );
};
