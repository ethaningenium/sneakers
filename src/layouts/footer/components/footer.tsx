import { Link } from "react-router-dom";

import Logo from "@/components/Common/Logo";
import routes from "../assets/routes.json";
import { Email } from "./email";

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 flex  justify-center py-12">
      <div className="container flex justify-center sm:items-start items-center gap-12 flex-col sm:flex-row sm:gap-24 lg:gap-0 lg:justify-between sm:flex-wrap">
        <div className="flex flex-col gap-2 items-center">
          <Logo className="w-28 md:w-64" blue="#FFFFFF" />
          <span className="text-blue-100 font-light text-xs">
            Только оригинальные кроссы
          </span>
        </div>
        <div className="flex flex-col gap-3 lg:items-start items-center">
          <h3 className="font-medium text-white mb-4">Разделы</h3>
          {routes.map((elem, i) => {
            return (
              <Link
                key={i}
                to={elem.path}
                className="text-blue-100 font-light text-xs"
              >
                {elem.title}
              </Link>
            );
          })}
        </div>
        <Email />
        <div className="flex flex-col gap-3  lg:items-end items-center">
          <h3 className="font-medium text-white mb-4">Контакты</h3>
          <span className="text-blue-100 font-light text-xs">
            +7 727 902 93 83
          </span>
          <span className="text-blue-100 font-light text-xs">
            ethanhamilthon@gmail.com
          </span>
          <span className="text-blue-100 font-light text-xs">
            Ежедневно с 09:00-21:00
          </span>
        </div>
      </div>
    </footer>
  );
};
