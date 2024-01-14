import { cn } from "@/lib/tools/utils";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

export const MenuContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

type childrenType = {
  children: React.ReactNode;
};

type PropsType = childrenType & {
  className?: string;
};

const Menu: React.FC<PropsType> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={cn("md:hidden overflow-hidden", className)}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};

const MenuTrigger: React.FC<PropsType> = ({ children, className }) => {
  const { setIsOpen } = useContext(MenuContext);
  return (
    <button className={className} onClick={() => setIsOpen((prev) => !prev)}>
      {children}
    </button>
  );
};

const MenuCloser: React.FC<PropsType> = ({ children, className }) => {
  const { setIsOpen } = useContext(MenuContext);
  return (
    <button onClick={() => setIsOpen((prev) => !prev)} className={className}>
      {children}
    </button>
  );
};

const MenuDrawer: React.FC<PropsType> = ({ children, className }) => {
  const { isOpen } = useContext(MenuContext);
  return (
    <div
      className={cn(
        "w-72 bg-white z-50 p-4 h-dvh fixed top-0 right-0 shadow-2xl shadow-black/20 duration-300",
        {
          "-right-80": !isOpen,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

const MenuContent: React.FC<PropsType> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col items-center gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const MenuHeader: React.FC<PropsType> = ({ children, className }) => {
  return <div className={cn("w-full", className)}>{children}</div>;
};

const MenuBody: React.FC<PropsType> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>{children}</div>
  );
};

const MenuOverlay: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn(
        "fixed top-0 left-0 w-screen h-dvh backdrop-blur opacity-0 duration-300 hidden z-40",
        {
          "opacity-100 flex": isOpen,
        }
      )}
    />
  );
};

export {
  MenuTrigger,
  Menu,
  MenuDrawer,
  MenuOverlay,
  MenuContent,
  MenuHeader,
  MenuBody,
  MenuCloser,
};
