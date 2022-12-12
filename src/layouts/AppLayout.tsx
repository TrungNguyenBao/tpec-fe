/* eslint-disable camelcase */
import Contact from "@/components/Contact";
import { FooTer } from "@/components/FooTer";
import { Header } from "@/components/Header";
import React from "react";
import NavMobile from "./NavMobile";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <NavMobile />
      <main>{children}</main>
      <FooTer />
      <Contact />
    </>
  );
};

export default AppLayout;
