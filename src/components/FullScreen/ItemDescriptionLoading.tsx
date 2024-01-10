const ItemDescriptionLoading = () => {
  return (
    <div className="flex-1 flex flex-col items-start  gap-6 justify-between md:w-auto w-full">
      <div className="flex flex-col gap-3 items-start">
        <span className="animate-pulse text-xs text-gray-200 bg-gray-200 rounded-2xl font-light">
          NEW BALANCE
        </span>
        <h1 className="animate-pulse lg:text-4xl text-3xl font-semibold text-gray-300 bg-gray-300 rounded-2xl">
          NEW BALANCE 2002R
        </h1>
        <div className="flex gap-4 items-center">
          <span className="animate-pulse text-2xl font-semibold text-gray-300 bg-gray-300 rounded-2xl">
            4880 руб.
          </span>
          <span className="animate-pulse font-light text-gray-200 bg-gray-200 rounded-2xl">
            6970 руб.
          </span>
        </div>
        <div className="flex flex-col items-start gap-3 mt-8">
          <span className="animate-pulse text-lg  font-medium text-gray-300 bg-gray-300 rounded-2xl">
            Размеры:
          </span>
          <div className="flex flex-wrap gap-3">
            {[...Array(6)].map((_, i) => {
              return (
                <button
                  key={i}
                  className="animate-pulse px-4 py-2 text-gray-200 bg-gray-200 rounded-2xl"
                >
                  48
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2 mb-12 items-start">
          <span className="animate-pulse text-lg font-medium text-gray-300 bg-gray-300 rounded-2xl">
            Цвета:
          </span>
          <div className="flex flex-wrap gap-3">
            {[...Array(4)].map((_, i) => {
              return (
                <button
                  key={i}
                  className="animate-pulse px-4 text-gray-200 bg-gray-200 rounded-2xl py-2"
                >
                  black
                </button>
              );
            })}
          </div>
        </div>
        <div className="animate-pulse text-xs font-light flex flex-col gap-2 text-gray-200 bg-gray-200 rounded-2xl">
          <p className="line-clamp-5">
            Кроссовки New Balance 2002R станут универсальной обувью в вашем
            гардеробе. Данная модель является классикой начала 2000 –х
            годов.Верхняя часть кроссовок выполнена из текстиля и замши.
            Уникальный внешний вид,благодаря многослойному верху и духу
            деконструкции. Это создает иллюзию того, что обувьнамеренно порвана
            или же она многое повидала на этом свете. Подтверждение этому
            являютсяпотертости и мазки краски с внешней стороны подошвы, эффект
            'известки на стопе',кусковой крой верха и др. На язычке красуется
          </p>{" "}
        </div>
      </div>
      <button className="animate-pulse flex gap-2 items-center py-4 px-6 text-gray-300 bg-gray-300 rounded-2xl">
        Выберите цвет и размер
      </button>
    </div>
  );
};

export default ItemDescriptionLoading;
