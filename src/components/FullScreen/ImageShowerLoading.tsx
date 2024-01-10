const ImageShowerLoading = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-end lg:justify-normal h-auto w-full md:w-1/2 gap-4 relative">
      <div className="flex lg:flex-col gap-2 lg:flex-1 lg:h-full lg:overflow-auto overflow-x-scroll">
        {[...Array(3)].map(() => {
          return (
            <div className="animate-pulse w-32 h-24 bg-gray-200 lg:w-full rounded-3xl object-cover flex-1 hover:opacity-80 active:scale-95  " />
          );
        })}
      </div>
      <div className="animate-pulse lg:w-2/3 w-full h-96 object-cover bg-gray-200 rounded-2xl" />
      <button className="animate-pulse absolute top-6 right-6 rounded-full bg-gray-300 w-10 h-10 "></button>
    </div>
  );
};

export default ImageShowerLoading;
