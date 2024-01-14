export const Email = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-medium text-white mb-4">Подписка на новости</h3>
      <div className="flex flex-col gap-2">
        <span className="text-blue-100 font-light text-xs">
          Будьте в курсе наших акций:
        </span>
        <input
          type="text"
          className="pl-4 py-2 w-72 rounded-md focus:outline-none"
          placeholder="E-mail"
        />
        <button className="flex justify-center items-center bg-orange-500 text-white rounded-md py-2 w-72">
          Применить
        </button>
        <label className="flex gap-2 items-center">
          <input type="checkbox" name="" id="" />
          <span className="text-white/50 font-light text-[10px]">
            Я даю согласие на обработка персоналных данных
          </span>
        </label>
      </div>
    </div>
  );
};
