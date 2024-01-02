import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Top = () => {
  const routePath = [
    { title: "Главная", path: "/" },
    { title: "Каталог", path: "/" },
    { title: "Доставка и оплата", path: "/" },
    { title: "Контакты", path: "/" },
  ];
  return (
    <div className="w-full bg-blue-900 flex justify-center text-blue-100 text-sm font-light">
      <div className="container py-2 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <MapPin className="text-white" strokeWidth={1.2} />
          <span>Москва</span>
        </div>
        <div className="flex gap-12 items-center">
          {routePath.map((elem) => {
            return (
              <Link to={elem.path} preventScrollReset={true}>
                {elem.title}
              </Link>
            );
          })}
        </div>
        <div className="lg:flex gap-8 hidden ">
          <span>Ежедневно с 09:00-21:00</span>
          <span>+7 727 902 93 83</span>
        </div>
      </div>
    </div>
  );
};

export default Top;
