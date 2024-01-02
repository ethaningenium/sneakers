import { ReactNode } from "react";

const Show = ({
  children,
  when = false,
}: {
  children: ReactNode;
  when?: boolean;
}) => {
  return when ? children : null;
};

export default Show;
