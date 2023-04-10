import React, { Component, FC, HTMLAttributes, ReactNode } from "react";
import { Header } from "./Header";
import { Anchor } from "ukana-kit";
import s from "./ui.module.scss";
import { Footer } from "./Footer";
import Link from "next/link";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={s.Layout}>
        <Header>
          <Anchor href="/">Home</Anchor>
          <Anchor href="/users">Users</Anchor>
        </Header>
        <main>{children}</main>
        <Footer>asdfasdf</Footer>
      </div>
    </>
  );
};
