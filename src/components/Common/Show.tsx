import { ReactNode } from "react";

type ShowPropsType = {
  children: ReactNode;
  when?: boolean;
};

const Show: React.FC<ShowPropsType> = ({ children, when = false }) => {
  return when ? children : null;
};

export default Show;
