import React, { FC, ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return <header className="Header">{children}</header>;
};
