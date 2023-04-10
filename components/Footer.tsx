import React, { FC, HTMLAttributes } from "react";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer: FC<FooterProps> = ({ children }) => {
  return <footer>{children}</footer>;
};
